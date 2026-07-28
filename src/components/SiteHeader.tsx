"use client";

import { useEffect, useState } from "react";

type Surface = "night" | "dawn";

/**
 * L'heure de la scène courante. C'est la moitié de la signature de la page :
 * la nuit avance pendant qu'on lit, et l'en-tête bascule du nuit au jour avec
 * elle. Les sections déclarent leur heure via `data-scene-time`.
 */
function useScene() {
  const [scene, setScene] = useState<{ time: string; surface: Surface }>({
    time: "23:47",
    surface: "night",
  });

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene-time]"),
    );
    if (sections.length === 0) return;

    let frame = 0;
    const read = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section;
      }
      const time = current.dataset.sceneTime ?? "23:47";
      const surface = (current.dataset.sceneSurface as Surface) ?? "night";
      setScene((prev) =>
        prev.time === time && prev.surface === surface ? prev : { time, surface },
      );
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

  return scene;
}

export function SiteHeader() {
  const { time, surface } = useScene();
  const onDawn = surface === "dawn";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-500 ease-confident ${
        onDawn
          ? "border-dawn-line bg-dawn/85 text-ink-dawn"
          : "border-night-line bg-night/85 text-ink"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          Levo<span className="text-brass">.</span>
        </a>

        {/* L'horloge de la scène. Ce n'est pas l'heure du visiteur : c'est l'heure
            du récit, et elle avance au scroll. */}
        <p
          className="flex items-center gap-2 font-mono text-2xs tabular-nums"
          aria-live="polite"
          aria-label={`Scène : ${time}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              onDawn ? "bg-brass" : "bg-signal"
            }`}
            aria-hidden="true"
          />
          <span className={onDawn ? "text-ink-dawn-muted" : "text-ink-muted"}>{time}</span>
        </p>

        <a
          href="#demander-une-demo"
          className={`hidden rounded-pill px-4 py-2 text-2xs font-semibold transition-colors duration-[120ms] sm:inline-flex ${
            onDawn
              ? "bg-ink-dawn text-dawn hover:bg-ink-dawn/85"
              : "bg-brass text-night hover:bg-[#dcb332]"
          }`}
        >
          Tester sur mon établissement
        </a>
      </div>
    </header>
  );
}
