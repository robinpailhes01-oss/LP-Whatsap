"use client";

import { motion, useReducedMotion } from "motion/react";
import { Conversation } from "@/components/Conversation";
import { heroConversation } from "@/lib/conversations";
import { CtaPrimary, CtaSecondary } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  /* Séquence d'ouverture : structure, puis titre, puis la conversation. */
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
      data-scene-time="23:47"
      data-scene-surface="night"
      className="lamp-glow relative"
    >
      <motion.div
        {...motionProps}
        className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-28"
      >
        <div>
          <motion.p {...childProps} className="kicker text-ink-muted">
            Agent WhatsApp &amp; CRM · hôtellerie et lieux de réception
          </motion.p>

          <motion.h1
            {...childProps}
            className="display-loud mt-6 max-w-[13ch] text-3xl sm:text-4xl"
          >
            Il est{" "}
            <span className="font-mono text-[0.78em] font-medium tracking-tighter tabular-nums text-brass">
              23:47
            </span>
            . Votre client cherche une chambre.{" "}
            <span className="display-soft block italic text-ink-muted">
              Vous dormez.
            </span>
          </motion.h1>

          <motion.p
            {...childProps}
            className="mt-7 max-w-xl text-sm leading-relaxed text-ink-muted"
          >
            Levo répond à sa place, dans le ton de votre maison, en quelques
            secondes — puis transforme la demande en fiche client dans un CRM fait
            pour votre métier. Il travaille les nuits, les dimanches et les coups de
            feu du service.
          </motion.p>

          <motion.div {...childProps} className="mt-9 flex flex-wrap items-center gap-3">
            <CtaPrimary href="#demander-une-demo">
              Tester l&apos;agent sur mon établissement
            </CtaPrimary>
            <CtaSecondary href="#ce-quil-traite">
              Voir ce qu&apos;il répond
            </CtaSecondary>
          </motion.div>

          {/* La levée de risque, dès le premier écran. Formulée à la négative :
              ce que le visiteur ne paiera pas. */}
          <motion.ul
            {...childProps}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-night-line pt-5 font-mono text-2xs text-ink-muted [&>li+li]:before:mr-6 [&>li+li]:before:text-night-line [&>li+li]:before:content-['·']"
          >
            <li>0 € de mise en place</li>
            <li>0 € d&apos;abonnement</li>
            <li>0 engagement</li>
            <li className="text-signal">vous ne payez que l&apos;usage</li>
          </motion.ul>
        </div>

        {/* La preuve, pas l'illustration : une vraie conversation, lisible en entier. */}
        <motion.div {...childProps} className="lg:pl-4">
          <Conversation data={heroConversation} />
          <p className="mt-3 text-center font-mono text-2xs text-ink-muted/70">
            Conversation réelle, rejouée à l&apos;identique.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
