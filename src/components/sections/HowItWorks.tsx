"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { EASE } from "@/lib/motion";

/**
 * Trois étapes d'une vraie séquence : l'ordre porte de l'information, donc la
 * numérotation est justifiée. Chaque « rassurance » répond à une peur précise
 * du lecteur, pas à un argument de vente.
 */
const steps = [
  {
    n: "1",
    title: "Votre client écrit sur WhatsApp",
    body: "Sur votre numéro habituel. Il n'a rien à télécharger : pour lui, c'est un message comme un autre.",
    aside: "Rien ne change pour vos clients",
  },
  {
    n: "2",
    title: "Luma répond, avec vos informations",
    body: "Vos prestations, vos prix, vos règles. Ce qu'il ne sait pas, il ne l'invente pas : il vous passe la main.",
    aside: "Vous relisez ses réponses aussi longtemps que vous voulez",
  },
  {
    n: "3",
    title: "Vous retrouvez tout, déjà noté",
    body: "Le nom, les dates, le montant. Le matin, vous ouvrez un dossier complet, pas une conversation.",
    aside: "Rien à ressaisir",
  },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="comment-ca-marche"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Comment ça marche</SectionLabel>

        <h2 className="display-loud mt-8 max-w-[17ch] text-xl sm:text-2xl lg:text-3xl">
          Trois étapes. <span className="mark-brass">Vous n&apos;avez rien à installer.</span>
        </h2>

        <ol className="mt-14 border-t border-paper-line">
          {steps.map((step, index) => (
            <motion.li
              key={step.n}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              className="grid gap-4 border-b border-paper-line py-9 sm:grid-cols-[3.5rem_1fr] sm:gap-8 lg:grid-cols-[3.5rem_1fr_14rem] lg:py-11"
            >
              <p
                className="font-display text-lg font-semibold text-brass-deep"
                aria-hidden="true"
              >
                {step.n}
              </p>

              <div>
                <h3 className="display-soft text-base sm:text-lg">{step.title}</h3>
                <p className="prose-read mt-3 text-xs text-ink-paper-muted">
                  {step.body}
                </p>
              </div>

              <p className="text-2xs leading-relaxed text-signal-deep lg:text-right">
                {step.aside}
              </p>
            </motion.li>
          ))}
        </ol>

        <p className="prose-read mt-10 text-sm text-ink-paper-muted">
          Vous n&apos;êtes pas à l&apos;aise avec l&apos;informatique ? C&apos;est
          nous qui installons tout. Vous, vous lisez WhatsApp comme aujourd&apos;hui.
        </p>
      </div>
    </section>
  );
}
