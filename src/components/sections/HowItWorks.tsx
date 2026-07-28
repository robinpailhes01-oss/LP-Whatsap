"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel, CtaPrimary } from "@/components/ui";
import { EASE } from "@/lib/motion";

/**
 * La section qui répond aux trois questions d'un visiteur qui débarque :
 * c'est quoi, c'est pour qui, comment ça marche. Dans cet ordre, et en aussi
 * peu de mots que possible.
 *
 * Elle est placée juste après le hero, avant toute preuve et tout argument :
 * personne ne se laisse convaincre par quelque chose qu'il n'a pas compris.
 */

/** La liste répond à « est-ce que c'est pour moi ? » mieux qu'une phrase. */
const activites = [
  "Hôtels",
  "Chambres d'hôtes",
  "Gîtes",
  "Campings",
  "Restaurants",
  "Salles de réception",
  "Domaines",
  "Locations de bateaux",
  "Locations de voitures",
  "Spas et instituts",
];

const steps = [
  {
    n: "1",
    title: "Votre client écrit sur WhatsApp",
    body: "Sur votre numéro habituel. Rien à installer, ni pour vous, ni pour lui.",
  },
  {
    n: "2",
    title: "Luma répond à votre place",
    body: "Avec vos prix, vos disponibilités et vos règles. En quelques secondes.",
  },
  {
    n: "3",
    title: "Vous retrouvez tout, déjà noté",
    body: "Le nom, les dates, le montant. Vous n'avez plus qu'à valider.",
  },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="comment-ca-marche"
      data-surface="paper"
      className="bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>C&apos;est quoi, exactement</SectionLabel>

        {/* Une phrase. Si elle ne suffit pas, c'est qu'elle est mal écrite. */}
        <h2 className="display-loud mt-8 max-w-[20ch] text-xl sm:text-2xl lg:text-3xl">
          Un assistant qui répond à vos clients sur WhatsApp,{" "}
          <span className="mark-brass">à votre place.</span>
        </h2>

        {/* Pour qui — une liste vaut mieux qu'une phrase : le lecteur y cherche
            son métier et se répond tout seul. */}
        <div className="mt-14 border-t border-paper-line pt-10">
          <p className="kicker text-ink-paper-muted">Pour qui</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {activites.map((activite) => (
              <li
                key={activite}
                className="rounded-pill border border-paper-line bg-paper-alt/60 px-4 py-2 text-xs"
              >
                {activite}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium">
            Si vos clients vous écrivent sur WhatsApp, c&apos;est pour vous.
          </p>
        </div>

        {/* Comment — trois étapes, une ligne chacune. */}
        <div className="mt-14 border-t border-paper-line pt-10">
          <p className="kicker text-ink-paper-muted">Comment ça marche</p>

          <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, index) => (
              <motion.li
                key={step.n}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              >
                <p
                  className="font-display text-2xl font-semibold text-brass-deep"
                  aria-hidden="true"
                >
                  {step.n}
                </p>
                <h3 className="display-soft mt-2 text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-ink-paper-muted">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>

          <p className="mt-10 text-sm">
            C&apos;est nous qui installons tout.{" "}
            <span className="text-ink-paper-muted">
              Vous n&apos;avez rien à apprendre : vos échanges se lisent dans
              WhatsApp, comme aujourd&apos;hui.
            </span>
          </p>

          <CtaPrimary href="#essai-gratuit" className="mt-8">
            Essayer gratuitement
          </CtaPrimary>
        </div>
      </div>
    </section>
  );
}
