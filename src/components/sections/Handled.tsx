"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { handledRequests } from "@/lib/conversations";
import { EASE } from "@/lib/motion";

/**
 * Pas une grille de cartes à icônes : les vraies demandes, écrites comme les
 * clients les écrivent. C'est ce que le visiteur vient vérifier — « est-ce que
 * ça saurait répondre à ça, chez moi ? »
 *
 * Les heures affichées sont réelles au sens où elles décrivent une nuit type,
 * de la fin du service au petit matin. C'est le seul endroit, avec la
 * conversation et le bilan, où la page affiche une heure.
 */
export function Handled() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="ce-quil-traite"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Les demandes qu&apos;il traite</SectionLabel>

        <h2 className="display-loud mt-8 max-w-[18ch] text-xl sm:text-2xl lg:text-3xl">
          Vos clients écrivent n&apos;importe comment, à n&apos;importe quelle
          heure.
        </h2>

        <ul className="mt-12 border-t border-paper-line">
          {handledRequests.map((request, index) => (
            <motion.li
              key={request.id}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: EASE, delay: (index % 3) * 0.07 }}
              className="grid gap-4 border-b border-paper-line py-8 sm:grid-cols-[4.5rem_1fr_1fr] sm:gap-8"
            >
              <p className="font-mono text-2xs tabular-nums text-ink-paper-muted">
                {request.time}
              </p>

              <p className="rounded-bubble rounded-bl-sm bg-paper-alt px-4 py-3.5 text-xs leading-relaxed">
                {request.ask}
              </p>

              <p className="self-center text-xs leading-relaxed text-ink-paper-muted">
                <span className="mr-2 font-medium text-signal-deep" aria-hidden="true">
                  ↳
                </span>
                {request.does}
              </p>
            </motion.li>
          ))}
        </ul>

        <p className="prose-read mt-9 text-sm text-ink-paper-muted">
          Une réclamation, une négociation, un cas particulier ? Luma ne bricole
          pas : il vous passe la main.
        </p>
      </div>
    </section>
  );
}
