"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

/**
 * Sur mobile, l'en-tête n'a pas la place d'afficher le CTA. Sans cette barre,
 * le visiteur qui lit la page en entier doit remonter pour agir.
 * Elle n'apparaît qu'une fois le hero dépassé — tant que le CTA du hero est à
 * l'écran, la doubler n'apporterait rien.
 */
export function MobileCta() {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("demander-une-demo");
    let frame = 0;

    const read = () => {
      frame = 0;
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      /* Inutile de flotter au-dessus du formulaire lui-même. */
      const formInView = target
        ? target.getBoundingClientRect().top < window.innerHeight * 0.8
        : false;
      setVisible(pastHero && !formInView);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReduced ? false : { y: "110%" }}
          animate={{ y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { y: "110%" }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-night-line bg-night/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden"
        >
          <a
            href="#demander-une-demo"
            className="flex w-full items-center justify-center rounded-pill bg-brass px-6 py-3.5 text-xs font-semibold text-night"
          >
            Tester l&apos;agent gratuitement
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
