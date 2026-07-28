"use client";

import { useEffect, useState } from "react";

/**
 * L'en-tête suit la surface de la section traversée : claire sur la majeure
 * partie de la page, sombre au-dessus de la scène de nuit (hero et vidéo).
 *
 * Il porte une vraie navigation plutôt qu'un ornement. L'audience n'est pas à
 * l'aise avec les sites qui cachent leurs repères : trois liens explicites et
 * un bouton valent mieux qu'un effet.
 */
const links = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#le-prix", label: "Prix" },
  { href: "#questions", label: "Questions" },
];

export function SiteHeader() {
  const [onNight, setOnNight] = useState(true);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-surface]"),
    );
    if (sections.length === 0) return;

    let frame = 0;
    const read = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.2;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section;
      }
      const isNight = current.dataset.surface === "night";
      setOnNight((prev) => (prev === isNight ? prev : isNight));
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
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-500 ease-confident ${
        onNight
          ? "border-night-line bg-night/90 text-ink"
          : "border-paper-line bg-paper/90 text-ink-paper"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight"
        >
          Luma<span className={onNight ? "text-brass" : "text-brass-deep"}>.</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-2xs transition-colors duration-[120ms] ${
                onNight
                  ? "text-ink-muted hover:text-ink"
                  : "text-ink-paper-muted hover:text-ink-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#essai-gratuit"
          className={`hidden rounded-pill px-5 py-2.5 text-2xs font-semibold transition-colors duration-[120ms] sm:inline-flex ${
            onNight
              ? "bg-brass text-night hover:bg-[#dcb332]"
              : "bg-ink-paper text-paper hover:bg-[#243029]"
          }`}
        >
          Essayer gratuitement
        </a>
      </div>
    </header>
  );
}
