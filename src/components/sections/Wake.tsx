"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { EASE } from "@/lib/motion";

/** Le rapport de la nuit — la boucle narrative se referme sur le réveil du gérant. */
const nightReport = [
  { value: "6", label: "demandes traitées" },
  { value: "2", label: "réservations confirmées" },
  { value: "1", label: "devis séminaire envoyé" },
  { value: "0", label: "appel manqué" },
];

const venueTypes = [
  "Hôtel",
  "Maison d'hôtes / chambres d'hôtes",
  "Gîte / location saisonnière",
  "Salle ou domaine de réception",
  "Camping / village vacances",
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

  const fieldClass =
    "mt-2 w-full rounded-sm border border-dawn-line bg-dawn px-3.5 py-3 text-xs text-ink-dawn placeholder:text-ink-dawn-muted/70 transition-colors duration-[120ms] focus:border-brass-dim focus:outline-none";

  return (
    <section
      id="demander-une-demo"
      data-scene-time="07:12"
      data-scene-surface="dawn"
      className="border-t border-dawn-line bg-dawn text-ink-dawn"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="07:12" onDawn>
          Le réveil
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[14ch] text-xl sm:text-2xl lg:text-3xl">
              Vous ouvrez votre téléphone.{" "}
              <span className="text-brass-dim">La nuit a été productive.</span>
            </h2>

            <motion.dl
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-12 grid grid-cols-2 gap-px border border-dawn-line bg-dawn-line"
            >
              {nightReport.map((entry) => (
                <div key={entry.label} className="bg-dawn px-5 py-6">
                  <dt className="font-mono text-2xl tabular-nums text-brass-dim">
                    {entry.value}
                  </dt>
                  <dd className="mt-1.5 text-2xs text-ink-dawn-muted">
                    {entry.label}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <p className="mt-8 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
              Vous n&apos;avez pas rattrapé un retard : vous commencez la journée
              à jour. Les fiches sont remplies, les arrhes sont demandées, les
              relances sont programmées.
            </p>
          </div>

          {/* Formulaire : trois champs. Chaque champ en plus est une réservation
              de démo en moins. */}
          <div className="rounded-card border border-dawn-line bg-dawn-alt/60 p-6 sm:p-8">
            <h3 className="display-soft text-lg">
              Faites-le tourner sur votre établissement
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-ink-dawn-muted">
              On configure l&apos;agent avec vos vraies chambres et vos vrais
              tarifs, et vous lui écrivez vous-même sur WhatsApp pour voir ce
              qu&apos;il répond. Gratuit, et sans suite obligatoire.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
              <div>
                <label htmlFor="name" className="text-2xs text-ink-dawn-muted">
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
                <label htmlFor="venue" className="text-2xs text-ink-dawn-muted">
                  Votre établissement
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
                <label htmlFor="venueType" className="text-2xs text-ink-dawn-muted">
                  Type d&apos;établissement
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
                <label htmlFor="phone" className="text-2xs text-ink-dawn-muted">
                  Numéro WhatsApp
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
                className="w-full rounded-pill bg-ink-dawn px-6 py-3.5 text-xs font-semibold text-dawn transition-[transform,opacity] duration-[120ms] ease-confident hover:opacity-90 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Envoi en cours…"
                  : "Demander l'installation gratuite"}
              </button>

              {/* Chaque état est dessiné : rien ne renvoie au défaut du navigateur. */}
              <p
                className="min-h-[2.5rem] text-2xs leading-relaxed"
                role="status"
                aria-live="polite"
              >
                {status === "idle" && (
                  <span className="text-ink-dawn-muted">
                    Nous vous écrivons sur WhatsApp sous 24 h ouvrées. Pas
                    d&apos;appel commercial non sollicité.
                  </span>
                )}
                {status === "success" && (
                  <span className="text-signal-dim">
                    C&apos;est envoyé. Vous recevez un message WhatsApp de notre
                    part sous 24 h ouvrées — pensez à vérifier vos demandes de
                    message.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-ink-dawn">
                    L&apos;envoi a échoué. Réessayez, ou écrivez-nous directement
                    à{" "}
                    <a href="mailto:contact@luma-agence.fr" className="underline">
                      contact@luma-agence.fr
                    </a>
                    .
                  </span>
                )}
                {status === "unconfigured" && (
                  <span className="text-ink-dawn">
                    Le formulaire n&apos;est pas encore relié à sa destination
                    (variable <code className="font-mono">
                      NEXT_PUBLIC_FORM_ENDPOINT
                    </code>{" "}
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
