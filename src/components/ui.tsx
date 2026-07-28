import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * L'action principale prend toujours le contraste maximal disponible sur sa
 * surface : laiton sur la nuit, encre sur le papier. Une seule règle.
 *
 * Les boutons sont volontairement grands (padding généreux, texte à 19px) :
 * la page se lit majoritairement au téléphone, souvent d'une main.
 */
export function CtaPrimary({
  children,
  className = "",
  onNight = false,
  ...props
}: ComponentPropsWithoutRef<"a"> & { onNight?: boolean }) {
  const tone = onNight
    ? "bg-brass text-night hover:bg-[#dcb332]"
    : "bg-ink-paper text-paper hover:bg-[#243029]";
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-pill px-7 py-4 text-sm font-semibold transition-[transform,background-color] duration-[120ms] ease-confident active:scale-[0.98] ${tone} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function CtaSecondary({
  children,
  className = "",
  onNight = false,
  ...props
}: ComponentPropsWithoutRef<"a"> & { onNight?: boolean }) {
  const tone = onNight
    ? "border-night-line text-ink hover:border-ink-muted"
    : "border-paper-line text-ink-paper hover:border-ink-paper/50";
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-pill border-2 px-7 py-4 text-sm font-medium transition-colors duration-[120ms] ease-confident ${tone} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Libellé de section. Un simple repère de lecture — pas d'horodatage
 * décoratif : les heures ne figurent sur la page que là où elles sont vraies
 * (la conversation, les demandes reçues, le bilan de la nuit).
 */
export function SectionLabel({
  children,
  onNight = false,
}: {
  children: ReactNode;
  onNight?: boolean;
}) {
  return (
    <p className="flex items-center gap-3">
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${onNight ? "bg-brass" : "bg-brass"}`}
        aria-hidden="true"
      />
      <span className={`kicker ${onNight ? "text-ink-muted" : "text-ink-paper-muted"}`}>
        {children}
      </span>
    </p>
  );
}
