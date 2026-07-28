import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * L'action principale prend toujours le contraste maximal disponible sur sa
 * surface : laiton sur la nuit, encre sur le jour. Une seule règle, pas deux
 * traitements concurrents sur la même page.
 */
export function CtaPrimary({
  children,
  className = "",
  onDawn = false,
  ...props
}: ComponentPropsWithoutRef<"a"> & { onDawn?: boolean }) {
  const tone = onDawn
    ? "bg-ink-dawn text-dawn hover:opacity-90"
    : "bg-brass text-night hover:bg-[#dcb332]";
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 text-xs font-semibold transition-[transform,background-color,opacity] duration-[120ms] ease-confident active:scale-[0.98] ${tone} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function CtaSecondary({
  children,
  className = "",
  onDawn = false,
  ...props
}: ComponentPropsWithoutRef<"a"> & { onDawn?: boolean }) {
  const tone = onDawn
    ? "border-dawn-line text-ink-dawn hover:border-ink-dawn/40"
    : "border-night-line text-ink hover:border-ink-muted";
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-pill border px-6 py-3.5 text-xs font-medium transition-colors duration-[120ms] ease-confident ${tone} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Kicker de section. `time` n'est pas décoratif : c'est l'heure de la scène dans
 * la nuit que raconte la page, et l'ordre porte de l'information.
 */
export function SectionLabel({
  time,
  children,
  onDawn = false,
}: {
  time: string;
  children: ReactNode;
  onDawn?: boolean;
}) {
  return (
    <p className="flex items-center gap-3">
      <span className="kicker text-brass">{time}</span>
      <span
        className={`h-px w-6 ${onDawn ? "bg-dawn-line" : "bg-night-line"}`}
        aria-hidden="true"
      />
      <span className={`kicker ${onDawn ? "text-ink-dawn-muted" : "text-ink-muted"}`}>
        {children}
      </span>
    </p>
  );
}
