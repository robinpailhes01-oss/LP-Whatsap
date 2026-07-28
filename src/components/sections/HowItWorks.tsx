"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { EASE } from "@/lib/motion";

/**
 * Trois moments d'une seule séquence réelle, horodatés à la seconde.
 * L'ordre porte de l'information (c'est une chronologie), donc le rail vertical
 * et les horodatages sont justifiés — ce n'est pas un « 01 / 02 / 03 » décoratif.
 */
const steps = [
  {
    time: "02:13:04",
    title: "Le message arrive",
    body: "Sur votre numéro WhatsApp habituel, celui qui est déjà sur votre fiche Google et vos confirmations. Le client n'installe rien, ne crée aucun compte, ne remplit aucun formulaire.",
    aside: "Aucun changement pour vos clients",
  },
  {
    time: "02:13:07",
    title: "L'agent répond",
    body: "Il connaît vos chambres, vos tarifs par saison, vos conditions d'annulation, vos règles maison — et il écrit dans votre ton. Ce qu'il ne sait pas, il ne l'invente pas : il le dit et vous le fait remonter.",
    aside: "3 secondes, en moyenne",
  },
  {
    time: "02:13:09",
    title: "La demande devient une fiche",
    body: "Client, dates, montant, canal d'origine, relance programmée. Le lendemain matin, vous ne lisez pas une conversation : vous ouvrez un dossier déjà rempli.",
    aside: "Rien à ressaisir",
  },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="comment-ca-marche"
      data-scene-time="02:13"
      data-scene-surface="night"
      className="border-t border-night-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="02:13">La séquence, de bout en bout</SectionLabel>

        <h2 className="display-loud mt-10 max-w-[18ch] text-xl sm:text-2xl lg:text-3xl">
          Cinq secondes entre la question d&apos;un client et une fiche remplie
          dans votre CRM.
        </h2>

        <ol className="mt-16 border-t border-night-line">
          {steps.map((step, index) => (
            <motion.li
              key={step.time}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              className="grid gap-4 border-b border-night-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8 lg:grid-cols-[10rem_1fr_12rem] lg:py-10"
            >
              <p className="flex items-start gap-3 font-mono text-2xs tabular-nums text-brass">
                <span
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                  aria-hidden="true"
                />
                {step.time}
              </p>

              <div>
                <h3 className="display-soft text-base">{step.title}</h3>
                <p className="mt-3 max-w-xl text-xs leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </div>

              <p className="font-mono text-2xs text-signal lg:text-right">
                {step.aside}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
