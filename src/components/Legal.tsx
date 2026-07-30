import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * Coquille commune aux trois pages légales.
 *
 * Ces pages ne se lisent pas comme le reste du site : personne n'y arrive par
 * curiosité. On garde donc les mêmes couleurs et la même échelle de texte —
 * 17px de corps, encre sur papier — mais on retire toute mise en scène :
 * une colonne, des titres, rien qui bouge.
 *
 * ⚠ Le contenu de ces pages est une base de travail rédigée à partir des
 * obligations françaises et européennes courantes (LCEN, RGPD, Code de
 * commerce). Ce n'est pas un conseil juridique : elle doit être relue par un
 * professionnel avant diffusion, et tous les repères « à compléter » doivent
 * être remplis. Voir CONTENT.md, section 8.
 */

export const MISE_A_JOUR = "30 juillet 2026";

export { CONTACT_EMAIL as CONTACT } from "@/lib/site";

/**
 * Repère volontairement voyant. Tant qu'il reste un de ces blocs sur la page,
 * elle n'est pas publiable — c'est le but : on ne peut pas l'oublier.
 */
export function ARemplir({ children }: { children: ReactNode }) {
  return (
    <span className="mx-0.5 inline-block rounded-sm bg-brass/50 px-1.5 py-px font-mono text-2xs tracking-tight text-ink-paper">
      à compléter — {children}
    </span>
  );
}

/** Un article. Le titre porte l'ancre, pour pouvoir citer un paragraphe précis. */
export function Article({
  id,
  titre,
  children,
}: {
  id: string;
  titre: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-paper-line pt-9 first:border-t-0 first:pt-0"
    >
      <h2 className="display-soft text-base sm:text-lg">{titre}</h2>
      <div className="mt-4 space-y-4 text-xs leading-relaxed text-ink-paper-muted [&_a]:text-ink-paper [&_a]:underline [&_strong]:font-medium [&_strong]:text-ink-paper">
        {children}
      </div>
    </section>
  );
}

/** Liste à puces, au même pas que le reste du texte. */
export function Liste({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {children}
    </ul>
  );
}

export function Item({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span
        className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15em] rounded-full bg-brass"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

export function LegalPage({
  titre,
  chapeau,
  children,
}: {
  titre: string;
  chapeau?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="bg-paper text-ink-paper">
      <header className="border-b border-paper-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight"
          >
            Luma<span className="text-brass-deep">.</span>
          </Link>
          <Link
            href="/"
            className="text-2xs text-ink-paper-muted transition-colors duration-[120ms] hover:text-ink-paper"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="kicker text-ink-paper-muted">
          Mis à jour le {MISE_A_JOUR}
        </p>
        <h1 className="display-loud mt-5 max-w-[18ch] text-2xl sm:text-3xl">
          {titre}
        </h1>
        {chapeau ? (
          <p className="prose-read mt-7 text-sm text-ink-paper-muted">
            {chapeau}
          </p>
        ) : null}

        <div className="mt-14 space-y-9">{children}</div>

        <nav
          aria-label="Autres pages légales"
          className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-paper-line pt-8"
        >
          {[
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/confidentialite", label: "Données personnelles" },
            { href: "/cgv", label: "Conditions générales" },
          ].map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="text-2xs text-ink-paper-muted transition-colors duration-[120ms] hover:text-ink-paper"
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
