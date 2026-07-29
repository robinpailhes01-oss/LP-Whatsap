"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/ui";

/**
 * Trois champs, jamais plus : le prénom, le canal préféré, et la coordonnée
 * correspondante. Demander à la fois le téléphone et l'e-mail obligerait à
 * remplir une ligne inutile — on demande seulement celle qu'on va utiliser.
 *
 * Le formulaire poste vers /api/lead, une route serveur. La destination et les
 * clés n'apparaissent jamais dans le navigateur.
 */
type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";
type Canal = "whatsapp" | "email";

export function Wake() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [canal, setCanal] = useState<Canal>("whatsapp");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string };

      if (response.ok) {
        form.reset();
        setCanal("whatsapp");
        setStatus("success");
        return;
      }
      if (payload.error === "unconfigured") {
        setStatus("unconfigured");
        return;
      }
      setMessage(payload.error ?? "L'envoi n'a pas fonctionné.");
      setStatus("error");
    } catch {
      setMessage("L'envoi n'a pas fonctionné. Vérifiez votre connexion.");
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
              On règle Luma avec vos vrais prix et votre façon de parler. Vous
              lui écrivez sur WhatsApp, comme un client. Si ça ne vous convainc
              pas, on en reste là.
            </p>

            <ul className="mt-9 space-y-3.5 border-t border-paper-line pt-8 text-sm">
              {[
                "La mise en place est gratuite",
                "C'est prêt en quelques jours",
                "Vous ne payez que l'utilisation",
                "Sans engagement, sans carte bancaire",
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
              Trois lignes. On vous répond sous 24 heures ouvrées.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
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

              {/* On demande la préférence avant la coordonnée : personne n'aime
                  donner son numéro sans savoir ce qu'on va en faire. */}
              <fieldset>
                <legend className="text-sm font-medium">
                  Comment préférez-vous qu&apos;on vous réponde ?
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(
                    [
                      { value: "whatsapp", label: "Sur WhatsApp" },
                      { value: "email", label: "Par e-mail" },
                    ] as const
                  ).map((option) => {
                    const active = canal === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`flex cursor-pointer items-center justify-center rounded-sm border-2 px-3 py-3.5 text-xs font-medium transition-colors duration-[120ms] has-[:focus-visible]:border-brass-deep ${
                          active
                            ? "border-ink-paper bg-ink-paper text-paper"
                            : "border-paper-line bg-paper text-ink-paper-muted hover:border-ink-paper/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contact"
                          value={option.value}
                          checked={active}
                          onChange={() => setCanal(option.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {canal === "whatsapp" ? (
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
              ) : (
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Votre adresse e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="camille@monetablissement.fr"
                    className={fieldClass}
                  />
                </div>
              )}

              {/* Champ-piège : caché aux humains, rempli par les robots. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

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
                    C&apos;est envoyé. On vous répond sous 24 heures ouvrées, sur
                    le canal que vous avez choisi.
                  </span>
                )}
                {status === "error" && (
                  <span>
                    {message} Vous pouvez aussi écrire directement à{" "}
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
                    Le formulaire n&apos;a pas encore de destination. Renseigner{" "}
                    <code className="font-mono">LEAD_WEBHOOK_URL</code> ou les
                    variables Resend côté serveur — voir CONTENT.md.
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
