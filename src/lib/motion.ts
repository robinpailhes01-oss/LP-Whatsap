import type { Transition, Variants } from "motion/react";

/** Easing standard de la page — ease-out confiant. Voir DESIGN.md § Motion. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  micro: 0.12,
  standard: 0.24,
  reveal: 0.5,
} as const;

export const revealTransition: Transition = {
  duration: DURATION.reveal,
  ease: EASE,
};

/** Séquence d'entrée : les enfants arrivent l'un après l'autre, jamais en bloc. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
