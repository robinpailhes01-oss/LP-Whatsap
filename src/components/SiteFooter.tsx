export function SiteFooter() {
  return (
    <footer className="border-t border-dawn-line bg-dawn-alt/50 text-ink-dawn">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-tight">
            Luma<span className="text-brass-dim">.</span>
          </p>
          <p className="mt-2 max-w-xs text-2xs leading-relaxed text-ink-dawn-muted">
            Agent WhatsApp et CRM pour les hôtels, hébergements et lieux de
            réception.
          </p>
        </div>

        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3">
          <a href="#la-demonstration" className="text-2xs text-ink-dawn-muted hover:text-ink-dawn">
            La démonstration
          </a>
          <a href="#comment-ca-marche" className="text-2xs text-ink-dawn-muted hover:text-ink-dawn">
            Comment ça marche
          </a>
          <a href="#le-crm" className="text-2xs text-ink-dawn-muted hover:text-ink-dawn">
            Le CRM
          </a>
          <a href="#le-modele" className="text-2xs text-ink-dawn-muted hover:text-ink-dawn">
            Tarifs
          </a>
          <a href="#objections" className="text-2xs text-ink-dawn-muted hover:text-ink-dawn">
            Questions
          </a>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl border-t border-dawn-line px-5 py-6 sm:px-8">
        <p className="font-mono text-2xs text-ink-dawn-muted">
          © {new Date().getFullYear()} Luma · Données hébergées dans l&apos;Union
          européenne
        </p>
      </div>
    </footer>
  );
}
