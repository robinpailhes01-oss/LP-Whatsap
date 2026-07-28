"use client";

import { motion, useReducedMotion } from "motion/react";
import { Conversation } from "@/components/Conversation";
import { heroConversation } from "@/lib/conversations";
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
            Hôtels · chambres d&apos;hôtes · gîtes · salles de réception
          </motion.p>

          <motion.h1
            {...childProps}
            className="display-loud mt-5 max-w-[16ch] text-[1.9rem] sm:text-2xl lg:text-3xl"
          >
            Il est 23h47. Un client demande une chambre. Vous dormez.
            <span className="display-soft mt-4 block text-[0.86em] text-brass">
              Luma répond à votre place.
            </span>
          </motion.h1>

          <motion.p
            {...childProps}
            className="prose-read mt-6 text-sm text-ink-muted sm:mt-8"
          >
            Luma répond à vos clients sur WhatsApp, jour et nuit, avec vos vrais
            tarifs et vos vraies disponibilités. Vous ne perdez plus de
            réservation parce qu&apos;il n&apos;y avait personne pour répondre.
          </motion.p>

          <motion.div {...childProps} className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <CtaPrimary href="#essai-gratuit" onNight>
              Essayer gratuitement
            </CtaPrimary>
            <CtaSecondary href="#comment-ca-marche" onNight>
              Voir comment ça marche
            </CtaSecondary>
          </motion.div>

          {/* La levée de risque, dès le premier écran, en mots simples. */}
          <motion.ul
            {...childProps}
            className="mt-9 grid grid-cols-2 gap-x-5 gap-y-2.5 border-t border-night-line pt-6 text-2xs text-ink-muted sm:flex sm:flex-wrap sm:gap-x-7"
          >
            <li>Installation gratuite</li>
            <li>0 € par mois</li>
            <li>Sans engagement</li>
            <li className="text-signal">Vous payez seulement à l&apos;usage</li>
          </motion.ul>
        </div>

        {/* La preuve, pas l'illustration : un échange complet, lisible en entier. */}
        <motion.div {...childProps} className="lg:pl-4">
          <Conversation data={heroConversation} />
          <p className="mt-3 text-center text-2xs text-ink-muted">
            Exemple d&apos;échange, rejoué en direct.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
