"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel, CtaPrimary } from "@/components/ui";
import { ConversationExcerpt } from "@/components/ConversationExcerpt";
import { toneExcerpt } from "@/lib/conversations";
import { EASE } from "@/lib/motion";

/**
 * La section qui répond aux trois questions d'un visiteur qui débarque :
 * c'est quoi, c'est pour qui, comment ça marche. Dans cet ordre, et en aussi
 * peu de mots que possible.
 *
 * Elle est placée juste après le hero, avant toute preuve et tout argument :
 * personne ne se laisse convaincre par quelque chose qu'il n'a pas compris.
 */

/**
 * Ce qu'on prend en charge. Trois promesses qui répondent chacune à un frein
 * précis : le coût d'entrée, le délai, et la peur de sonner comme un robot.
 */
const priseEnCharge = [
  {
    titre: "La mise en place est gratuite",
    corps: "Vous ne payez que l'utilisation. Pas de frais d'installation, pas d'abonnement, pas d'engagement.",
  },
  {
    titre: "C'est prêt en quelques jours",
    corps: "On récupère vos prix, vos disponibilités et vos règles, on règle tout, et on reste joignables ensuite.",
  },
  {
    titre: "Luma parle comme vous",
    corps: "On reprend votre ton, vos formules, votre façon d'accueillir. Vos clients ne changent pas d'interlocuteur.",
    /* Cette promesse-là ne se croit pas sur parole : on la montre. */
    preuve: true,
  },
];

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
    body: "Avec vos prix et vos disponibilités — et dans votre façon de parler, pas celle d'un robot.",
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
            Vous n&apos;avez rien à apprendre :{" "}
            <span className="text-ink-paper-muted">
              vos échanges se lisent dans WhatsApp, comme aujourd&apos;hui.
            </span>
          </p>
        </div>

        {/* Ce qu'on prend en charge. Encadré à part : c'est l'argument qui lève
            le plus de freins d'un coup, il ne doit pas se fondre dans le texte. */}
        <div className="mt-14 rounded-card border border-paper-line bg-paper-alt/70 p-6 sm:p-9">
          <p className="kicker text-ink-paper-muted">Ce qu&apos;on fait pour vous</p>

          <dl className="mt-7 divide-y divide-paper-line">
            {priseEnCharge.map((item) => (
              <div
                key={item.titre}
                className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[16rem_1fr] sm:gap-8"
              >
                <dt className="display-soft text-base sm:text-lg">{item.titre}</dt>
                <dd>
                  <p className="prose-read text-xs text-ink-paper-muted">
                    {item.corps}
                  </p>
                  {item.preuve && (
                    <div className="mt-5 max-w-md">
                      <ConversationExcerpt
                        messages={toneExcerpt}
                        caption="Luma répond pour Harmonie Yacht, un soir à 20h01."
                      />
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <CtaPrimary href="#essai-gratuit" className="mt-9">
            Essayer gratuitement
          </CtaPrimary>
        </div>
      </div>
    </section>
  );
}
