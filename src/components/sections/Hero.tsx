"use client";

import { motion, useReducedMotion } from "motion/react";
import { ConversationSwitcher } from "@/components/ConversationSwitcher";
import { CtaPrimary, CtaSecondary } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Registre d'écriture de toute la page : phrases courtes, mots du quotidien,
 * aucun terme technique. Le lecteur type gère un hôtel, pas un logiciel.
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const motionProps = prefersReduced
    ? {}
    : {
        variants: staggerContainer,
        initial: "hidden" as const,
        animate: "show" as const,
      };
  const childProps = prefersReduced ? {} : { variants: staggerItem };

  return (
    <section
      id="top"
      data-surface="night"
      className="lamp-glow relative bg-night text-ink"
    >
      <motion.div
        {...motionProps}
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-11 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-28"
      >
        <div>
          <motion.p {...childProps} className="kicker text-ink-muted">
            Pour tous ceux qui reçoivent trop de demandes sur WhatsApp
          </motion.p>

          <motion.h1
            {...childProps}
            className="display-loud mt-5 max-w-[16ch] text-[1.9rem] sm:text-2xl lg:text-3xl"
          >
            Vos clients vous écrivent sur WhatsApp.
            <span className="display-soft mt-4 block text-[0.86em] text-brass">
              Luma leur répond à votre place.
            </span>
          </motion.h1>

          <motion.p
            {...childProps}
            className="prose-read mt-6 text-sm text-ink-muted sm:mt-8"
          >
            Jour et nuit, avec vos tarifs et vos disponibilités. Même à 23h47,
            quand vous dormez.
          </motion.p>

          <motion.div {...childProps} className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <CtaPrimary href="#essai-gratuit" onNight>
              Essayer gratuitement
            </CtaPrimary>
            <CtaSecondary href="#comment-ca-marche" onNight>
              Voir comment ça marche
            </CtaSecondary>
          </motion.div>

          {/* La levée de risque, dès le premier écran. Elle était réduite à une
              ligne de mentions à 13 px : c'est la promesse la plus forte de
              l'offre, elle se lit maintenant à la taille du texte courant. */}
          <motion.div
            {...childProps}
            className="mt-9 border-t border-night-line pt-7"
          >
            <p className="text-sm font-medium">
              La mise en place est gratuite.{" "}
              <span className="text-brass">
                Vous ne payez que l&apos;utilisation.
              </span>
            </p>
            <p className="mt-2.5 text-xs text-ink-muted">
              On s&apos;occupe de tout, en quelques jours. Sans abonnement, sans
              engagement.
            </p>
          </motion.div>
        </div>

        {/* La preuve, pas l'illustration : un échange complet, lisible en
            entier, dans l'activité du visiteur. */}
        <motion.div {...childProps} className="lg:pl-4">
          <ConversationSwitcher />
        </motion.div>
      </motion.div>
    </section>
  );
}
