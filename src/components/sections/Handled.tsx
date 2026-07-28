"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui";
import { handledRequests } from "@/lib/conversations";
import { EASE } from "@/lib/motion";

/**
 * Pas une grille de cartes à icônes : les vraies demandes, écrites comme les
 * clients les écrivent. C'est ce que le visiteur vient vérifier — « est-ce que
 * ça saurait répondre à ça, chez moi ? »
 */
export function Handled() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="ce-quil-traite"
      data-scene-time="04:30"
      data-scene-surface="night"
      className="border-t border-night-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="04:30">Ce qui est arrivé cette nuit</SectionLabel>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-loud max-w-[17ch] text-2xl sm:text-3xl">
            Les demandes ne ressemblent jamais à un menu de chatbot.
          </h2>
          <p className="max-w-sm text-xs leading-relaxed text-ink-muted">
            Elles arrivent mal écrites, en anglais, à des heures impossibles, et
            elles mélangent deux sujets. L&apos;agent est configuré sur votre
            établissement : vos tarifs, vos règles, vos disponibilités.
          </p>
        </div>

        <ul className="mt-14 border-t border-night-line">
          {handledRequests.map((request, index) => (
            <motion.li
              key={request.id}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: EASE, delay: (index % 3) * 0.07 }}
              className="grid gap-4 border-b border-night-line py-7 sm:grid-cols-[4.5rem_1fr_1fr] sm:gap-8"
            >
              <p className="font-mono text-2xs tabular-nums text-ink-muted">
                {request.time}
              </p>

              <p className="rounded-bubble rounded-bl-sm bg-night-alt px-4 py-3 text-xs leading-relaxed text-ink/90">
                {request.ask}
              </p>

              <p className="self-center text-xs leading-relaxed text-ink-muted">
                <span className="mr-2 text-signal" aria-hidden="true">
                  ↳
                </span>
                {request.does}
              </p>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-2xs leading-relaxed text-ink-muted">
          Quand une demande sort de son périmètre — une réclamation, une
          négociation, un cas particulier — l&apos;agent ne bricole pas une
          réponse. Il vous la transmet, avec le contexte, et prévient le client
          qu&apos;un humain reprend la main.
        </p>
      </div>

      {/* Le jour se lève : transition de surface, pas un simple séparateur. */}
      <div
        className="h-32 bg-gradient-to-b from-night to-dawn sm:h-40"
        aria-hidden="true"
      />
    </section>
  );
}
