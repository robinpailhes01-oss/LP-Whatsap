"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { EASE } from "@/lib/motion";

/** Le bilan d'une nuit type — la boucle ouverte par le hero se referme ici. */
const nightReport = [
  { value: "6", label: "demandes traitées" },
  { value: "2", label: "réservations confirmées" },
  { value: "1", label: "devis envoyé" },
  { value: "0", label: "appel manqué" },
];

const venueTypes = [
  "Hôtel",
  "Chambres d'hôtes",
  "Gîte ou location saisonnière",
  "Salle ou domaine de réception",
  "Camping ou village vacances",
  "Autre",
];

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function Wake() {
  const prefersReduced = useReducedMotion();
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
    "mt-2.5 w-full rounded-sm border-2 border-paper-line bg-paper px-4 py-3.5 text-xs text-ink-paper placeholder:text-ink-paper-muted/60 transition-colors duration-[120ms] focus:border-brass-deep focus:outline-none";

  return (
    <section
      id="essai-gratuit"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>L&apos;essai gratuit</SectionLabel>

        <div className="mt-8 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[16ch] text-xl sm:text-2xl lg:text-3xl">
              Essayez-le chez vous.{" "}
              <span className="mark-brass">Ça ne vous engage à rien.</span>
            </h2>

            <p className="prose-read mt-7 text-xs text-ink-paper-muted">
              On règle Luma avec vos vraies chambres et vos vrais prix. Ensuite,
              vous lui écrivez vous-même sur WhatsApp, comme le ferait un client,
              et vous jugez sur pièces. Si ça ne vous convainc pas, on en reste
              là.
            </p>

            <p className="kicker mt-12 text-ink-paper-muted">
              Une nuit ordinaire avec Luma
            </p>
            <motion.dl
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-5 grid grid-cols-2 gap-px border border-paper-line bg-paper-line"
            >
              {nightReport.map((entry) => (
                <div key={entry.label} className="bg-paper px-5 py-7">
                  <dt className="font-mono text-2xl font-medium tabular-nums">
                    {entry.value}
                  </dt>
                  <dd className="mt-2 text-2xs text-ink-paper-muted">
                    {entry.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Quatre champs. Chaque champ en plus est un essai en moins. */}
          <div className="rounded-card border border-paper-line bg-paper-alt/70 p-6 sm:p-8">
            <h3 className="display-soft text-lg sm:text-xl">
              Demander mon essai gratuit
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-ink-paper-muted">
              Remplissez ces quatre lignes. On s&apos;occupe du reste.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-xs font-medium">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Camille Rousseau"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="venue" className="text-xs font-medium">
                  Le nom de votre établissement
                </label>
                <input
                  id="venue"
                  name="venue"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Domaine des Ormes"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="venueType" className="text-xs font-medium">
                  De quel type ?
                </label>
                <select
                  id="venueType"
                  name="venueType"
                  required
                  defaultValue=""
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Choisir…
                  </option>
                  {venueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="text-xs font-medium">
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
                    On vous écrit sur WhatsApp sous 24 heures ouvrées. Pas
                    d&apos;appel commercial, pas de carte bancaire.
                  </span>
                )}
                {status === "success" && (
                  <span className="font-medium text-signal-deep">
                    C&apos;est envoyé. Vous allez recevoir un message WhatsApp de
                    notre part sous 24 heures ouvrées — pensez à regarder vos
                    demandes de message.
                  </span>
                )}
                {status === "error" && (
                  <span>
                    L&apos;envoi n&apos;a pas fonctionné. Réessayez, ou
                    écrivez-nous directement à{" "}
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
