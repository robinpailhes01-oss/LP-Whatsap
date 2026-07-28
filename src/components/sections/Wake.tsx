"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/ui";

/**
 * Deux champs. C'est cohérent avec ce que la page vend : le reste se demande
 * dans le premier message WhatsApp, exactement comme Luma le ferait.
 *
 * Pour requalifier davantage (nom de l'établissement, type), il suffit
 * d'ajouter un bloc <label>/<input> ci-dessous — mais chaque champ ajouté se
 * paie en demandes perdues.
 */
type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function Wake() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  /* Champs volontairement grands : saisie au pouce, sur un téléphone. */
  const fieldClass =
    "mt-2.5 w-full rounded-sm border-2 border-paper-line bg-paper px-4 py-4 text-sm text-ink-paper placeholder:text-ink-paper-muted/60 transition-colors duration-[120ms] focus:border-brass-deep focus:outline-none";

  return (
    <section
      id="essai-gratuit"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>L&apos;essai gratuit</SectionLabel>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[16ch] text-xl sm:text-2xl lg:text-3xl">
              Essayez-le chez vous.{" "}
              <span className="mark-brass">Ça ne vous engage à rien.</span>
            </h2>

            <p className="prose-read mt-7 text-sm text-ink-paper-muted">
              On règle Luma avec vos vraies chambres et vos vrais prix. Vous lui
              écrivez sur WhatsApp, comme un client. Si ça ne vous convainc pas,
              on en reste là.
            </p>

            <ul className="mt-9 space-y-3.5 border-t border-paper-line pt-8 text-sm">
              {[
                "Installation gratuite",
                "Sans engagement, sans carte bancaire",
                "Vous ne payez que si Luma travaille",
              ].map((line) => (
                <li key={line} className="flex items-baseline gap-3">
                  <span
                    className="h-2 w-2 shrink-0 translate-y-[-0.15em] rounded-full bg-brass"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-paper-line bg-paper-alt/70 p-6 sm:p-8">
            <h3 className="display-soft text-lg sm:text-xl">
              Demander mon essai gratuit
            </h3>
            <p className="mt-3 text-xs text-ink-paper-muted">
              Deux lignes. Je vous écris sur WhatsApp, et on voit ensemble.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Votre prénom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="Camille"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Votre numéro WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                  className={fieldClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-pill bg-ink-paper px-7 py-4 text-sm font-semibold text-paper transition-[transform,background-color] duration-[120ms] ease-confident hover:bg-[#243029] active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Envoi en cours…"
                  : "Demander mon essai gratuit"}
              </button>

              {/* Chaque état est dessiné : rien ne renvoie au défaut du navigateur. */}
              <p
                className="min-h-[3.5rem] text-2xs leading-relaxed"
                role="status"
                aria-live="polite"
              >
                {status === "idle" && (
                  <span className="text-ink-paper-muted">
                    Pas d&apos;appel commercial, pas de carte bancaire.
                  </span>
                )}
                {status === "success" && (
                  <span className="font-medium text-signal-deep">
                    C&apos;est envoyé. Je vous écris sur WhatsApp sous 24 heures
                    ouvrées — pensez à regarder vos demandes de message.
                  </span>
                )}
                {status === "error" && (
                  <span>
                    L&apos;envoi n&apos;a pas fonctionné. Réessayez, ou
                    écrivez-moi à{" "}
                    <a
                      href="mailto:contact@luma-agence.fr"
                      className="font-medium underline"
                    >
                      contact@luma-agence.fr
                    </a>
                    .
                  </span>
                )}
                {status === "unconfigured" && (
                  <span>
                    Le formulaire n&apos;est pas encore relié à sa destination
                    (variable{" "}
                    <code className="font-mono">NEXT_PUBLIC_FORM_ENDPOINT</code>{" "}
                    manquante). Voir CONTENT.md.
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
