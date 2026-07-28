"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import type { Transition } from "motion/react";
import type { Conversation as ConversationData } from "@/lib/conversations";
import { EASE } from "@/lib/motion";

/* Ressort dédié à l'arrivée d'un message : une bulle doit atterrir, pas glisser. */
const bubbleSpring: Transition = { type: "spring", stiffness: 260, damping: 22 };

/** Accusé de lecture. Vert = l'agent a fait son travail (règle d'encodage couleur). */
function ReadReceipt({ read }: { read: boolean }) {
  return (
    <svg
      viewBox="0 0 18 12"
      className="h-3 w-[18px] shrink-0"
      aria-hidden="true"
      fill="none"
      stroke={read ? "var(--color-signal)" : "var(--color-ink-muted)"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6.5 4.2 9.8 10.2 2.2" />
      <path
        d="M7.6 6.5 10.8 9.8 16.8 2.2"
        style={{
          opacity: read ? 1 : 0,
          transition: "opacity 240ms var(--ease-confident)",
        }}
      />
    </svg>
  );
}

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1" aria-label="en train d'écrire">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-1.5 w-1.5 rounded-full bg-ink-muted"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.18,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

type Props = {
  data: ConversationData;
  /** Rejoue la séquence en boucle tant que le composant reste visible. */
  loop?: boolean;
  className?: string;
};

export function Conversation({ data, loop = true, className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: false, margin: "-15% 0px -15% 0px" });
  const prefersReduced = useReducedMotion();

  const total = data.messages.length;
  const [revealed, setRevealed] = useState(0);
  const [typing, setTyping] = useState(false);
  const [readIds, setReadIds] = useState<string[]>([]);
  const [showOutcome, setShowOutcome] = useState(false);

  useEffect(() => {
    if (prefersReduced || !inView) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    async function play() {
      do {
        setRevealed(0);
        setReadIds([]);
        setShowOutcome(false);
        await wait(500);
        if (cancelled) return;

        for (let i = 0; i < total; i += 1) {
          const message = data.messages[i];
          await wait(message.delayMs);
          if (cancelled) return;

          if (message.typingMs) {
            setTyping(true);
            await wait(message.typingMs);
            if (cancelled) return;
            setTyping(false);
          }

          setRevealed(i + 1);

          if (message.from === "agent") {
            timers.push(
              setTimeout(() => {
                if (!cancelled) setReadIds((prev) => [...prev, message.id]);
              }, 1400),
            );
          }
        }

        await wait(900);
        if (cancelled) return;
        setShowOutcome(true);

        if (!loop) return;
        await wait(6000);
      } while (!cancelled);
    }

    void play();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, prefersReduced, loop, total, data.messages]);

  /* Sans animation, la conversation existe quand même — en entier, tout de suite.
     Aucun contenu n'est réservé à ceux qui acceptent le mouvement. L'état est
     dérivé plutôt que poussé : la séquence ne démarre simplement jamais. */
  const showAll = prefersReduced === true;
  const visible = showAll ? data.messages : data.messages.slice(0, revealed);
  const outcomeVisible = showAll || showOutcome;
  const typingVisible = !showAll && typing;
  const isRead = (id: string) => showAll || readIds.includes(id);

  return (
    <div
      ref={rootRef}
      className={`overflow-hidden rounded-card border border-night-line bg-night-alt ${className}`}
    >
      {/* En-tête du fil — ce que le client voit dans son WhatsApp. */}
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-night-line px-4 py-3.5 sm:px-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass/15 font-display text-sm text-brass">
          {data.venue.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium">{data.venue}</span>
          <span className="flex items-center gap-1.5 text-2xs text-ink-muted">
            <span className="relative flex h-1.5 w-1.5">
              {!prefersReduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {data.venueMeta}
          </span>
        </span>
      </div>

      {/* Transcription complète pour les technologies d'assistance. Le fil animé
          boucle : l'annoncer message par message en aria-live serait intenable.
          Il est donc masqué aux lecteurs d'écran, qui lisent ce bloc à la place. */}
      <p className="sr-only">
        Conversation entre un client et {data.venue} :{" "}
        {data.messages
          .map(
            (message) =>
              `${message.from === "agent" ? "L'établissement" : "Le client"} à ${
                message.time
              } : ${message.text}`,
          )
          .join(" ")}{" "}
        Résultat : {data.outcome.label}. {data.outcome.detail}.
      </p>

      {/* Hauteur fixe : la carte ne change pas de taille d'une activité à
          l'autre, et les échanges les plus longs débordent par le haut comme
          dans une vraie discussion. Le dégradé rend la coupe intentionnelle. */}
      <ol
        aria-hidden="true"
        className="flex h-[470px] flex-col justify-end gap-2.5 overflow-hidden p-4 sm:h-[500px] sm:p-5 [mask-image:linear-gradient(to_bottom,transparent,black_56px)]"
      >
        {visible.map((message) => {
          const isAgent = message.from === "agent";
          return (
            <motion.li
              key={message.id}
              initial={prefersReduced ? false : { opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={prefersReduced ? { duration: 0 } : bubbleSpring}
              className={`flex max-w-[86%] flex-col ${
                isAgent ? "items-end self-end" : "items-start self-start"
              }`}
            >
              <span
                className={`rounded-bubble px-3.5 py-2.5 text-xs leading-relaxed ${
                  isAgent
                    ? "rounded-br-sm bg-brass/12 text-ink"
                    : "rounded-bl-sm bg-night text-ink/90"
                }`}
              >
                {message.text}
              </span>
              <span className="mt-1 flex items-center gap-1.5 px-1 font-mono text-2xs text-ink-muted">
                {message.time}
                {isAgent && <ReadReceipt read={isRead(message.id)} />}
              </span>
            </motion.li>
          );
        })}

        <AnimatePresence>
          {typingVisible && (
            <motion.li
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="self-end rounded-bubble rounded-br-sm bg-brass/12 px-3.5 py-3"
            >
              <TypingDots />
            </motion.li>
          )}
        </AnimatePresence>
      </ol>

      {/* Résultat : la conversation ne s'arrête pas à la réponse, elle produit une fiche. */}
      <div aria-hidden="true" className="border-t border-night-line px-4 py-3 sm:px-5">
        <AnimatePresence mode="wait">
          {outcomeVisible ? (
            <motion.p
              key="outcome"
              initial={prefersReduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
            >
              <span className="kicker text-signal">↳ {data.outcome.label}</span>
              <span className="font-mono text-2xs text-ink-muted">
                {data.outcome.detail}
              </span>
            </motion.p>
          ) : (
            <p key="idle" className="kicker text-ink-muted/50">
              ↳ en attente
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
