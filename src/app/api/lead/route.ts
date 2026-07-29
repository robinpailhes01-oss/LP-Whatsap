import type { NextRequest } from "next/server";

/**
 * Réception des demandes d'essai.
 *
 * Le formulaire postait auparavant vers `NEXT_PUBLIC_FORM_ENDPOINT`, une URL
 * visible par tout le monde dans le code de la page. Elle passe ici côté
 * serveur : la destination et les clés ne sortent jamais du serveur.
 *
 * Deux destinations possibles, dans cet ordre :
 *   1. `LEAD_WEBHOOK_URL`  — on envoie le JSON à un webhook (Make, n8n, Zapier).
 *   2. `RESEND_API_KEY` + `LEAD_EMAIL_TO` + `LEAD_EMAIL_FROM` — on envoie un
 *      e-mail directement.
 *
 * Si rien n'est configuré, la route répond 503 et le formulaire l'affiche
 * franchement au lieu de faire croire à un envoi réussi.
 */

export const runtime = "nodejs";

type Contact = "whatsapp" | "email";

type Lead = {
  name: string;
  contact: Contact;
  phone: string;
  email: string;
};

/** Fenêtre anti-abus, par IP. Une demande d'essai n'est pas envoyée en rafale. */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  /* Purge : sans ça la Map grossit indéfiniment sur une instance longue durée. */
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

/**
 * Numéro français en format international, pour fabriquer un lien wa.me
 * cliquable. En cas de doute on renvoie une chaîne vide : mieux vaut pas de
 * lien qu'un lien qui ouvre la mauvaise conversation.
 */
function toWaLink(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (/^0\d{9}$/.test(digits)) return `https://wa.me/33${digits.slice(1)}`;
  if (/^33\d{9}$/.test(digits)) return `https://wa.me/${digits}`;
  if (digits.length >= 10 && digits.length <= 15) return `https://wa.me/${digits}`;
  return "";
}

function parse(body: unknown): { lead: Lead } | { error: string } {
  if (typeof body !== "object" || body === null) return { error: "Requête invalide." };
  const raw = body as Record<string, unknown>;

  /* Champ-piège : invisible pour un humain, rempli par les robots. */
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { error: "spam" };
  }

  const name = String(raw.name ?? "").trim();
  const contact = raw.contact === "email" ? "email" : "whatsapp";
  const phone = String(raw.phone ?? "").trim();
  const email = String(raw.email ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return { error: "Merci d'indiquer votre prénom." };
  }
  if (contact === "whatsapp") {
    if (phone.replace(/\D/g, "").length < 9) {
      return { error: "Ce numéro ne semble pas complet." };
    }
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { error: "Cette adresse e-mail ne semble pas valide." };
  }

  return { lead: { name, contact, phone, email } };
}

async function deliver(lead: Lead): Promise<"sent" | "unconfigured"> {
  const receivedAt = new Date().toLocaleString("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  });
  const waLink = lead.contact === "whatsapp" ? toWaLink(lead.phone) : "";

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, waLink, receivedAt, source: "landing-luma" }),
    });
    if (!response.ok) throw new Error(`webhook ${response.status}`);
    return "sent";
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM;
  if (apiKey && to && from) {
    const prefere =
      lead.contact === "whatsapp"
        ? "WhatsApp"
        : "E-mail — ne pas écrire sur WhatsApp";
    const coordonnees =
      lead.contact === "whatsapp"
        ? `Numéro WhatsApp : ${lead.phone}${waLink ? `\nÉcrire maintenant : ${waLink}` : ""}`
        : `Adresse e-mail : ${lead.email}`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: lead.contact === "email" ? lead.email : undefined,
        subject: `Essai gratuit — ${lead.name} (${prefere})`,
        text: [
          `Prénom : ${lead.name}`,
          `Préfère être contacté par : ${prefere}`,
          coordonnees,
          "",
          `Reçu le ${receivedAt}`,
        ].join("\n"),
      }),
    });
    if (!response.ok) throw new Error(`resend ${response.status}`);
    return "sent";
  }

  return "unconfigured";
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnue";
  if (rateLimited(ip, Date.now())) {
    return Response.json(
      { error: "Trop de demandes. Réessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = parse(body);
  if ("error" in parsed) {
    /* Un robot repart avec un succès : inutile de lui apprendre le piège. */
    if (parsed.error === "spam") return Response.json({ ok: true });
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const result = await deliver(parsed.lead);
    if (result === "unconfigured") {
      return Response.json({ error: "unconfigured" }, { status: 503 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[lead] envoi impossible", error);
    return Response.json({ error: "Envoi impossible." }, { status: 502 });
  }
}
