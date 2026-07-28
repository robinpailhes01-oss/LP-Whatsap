import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Le laiton désigne toujours la maison : il est réservé à l'action principale. */
export function CtaPrimary({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-pill bg-brass px-6 py-3.5 text-xs font-semibold text-night transition-[transform,background-color] duration-[120ms] ease-confident hover:bg-[#dcb332] active:scale-[0.98] ${className}`}
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
