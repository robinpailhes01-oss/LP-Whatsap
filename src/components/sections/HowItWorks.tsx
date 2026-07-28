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
    title: "Votre client vous écrit sur WhatsApp",
    body: "Sur votre numéro habituel, celui qui est déjà sur votre site et sur vos confirmations. Votre client n'a rien à télécharger et rien à créer. Pour lui, c'est un message comme un autre.",
    aside: "Rien ne change pour vos clients",
  },
  {
    n: "2",
    title: "Luma répond, avec vos informations",
    body: "On lui a donné vos chambres, vos prix, vos horaires et vos règles de la maison. Il répond dans le même ton que vous. Ce qu'il ne sait pas, il ne l'invente pas : il vous prévient et laisse la main.",
    aside: "Vous relisez ses réponses aussi longtemps que vous voulez",
  },
  {
    n: "3",
    title: "Vous retrouvez tout, déjà rangé",
    body: "Le nom du client, ses dates, le montant, ce qu'il a demandé. Le lendemain matin, vous n'avez pas à relire la conversation : l'essentiel est déjà noté.",
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

        <p className="prose-read mt-10 text-xs text-ink-paper-muted">
          Vous n&apos;êtes pas à l&apos;aise avec l&apos;informatique ? Ce
          n&apos;est pas un problème. C&apos;est nous qui installons tout, et
          côté réception, vos échanges se lisent dans WhatsApp, exactement comme
          aujourd&apos;hui.
        </p>
      </div>
    </section>
  );
}
