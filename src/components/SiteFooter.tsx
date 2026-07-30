import Link from "next/link";

const links = [
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#carnet-clients", label: "Carnet de clients" },
  { href: "/#le-prix", label: "Prix" },
  { href: "/#questions", label: "Questions" },
  { href: "/#qui-suis-je", label: "Qui est derrière" },
];

/* Obligatoires, et attendus là où on les cherche : en bas, tous ensemble. */
const legal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Données personnelles" },
  { href: "/cgv", label: "Conditions générales" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper-alt/60 text-ink-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-tight">
            Luma<span className="text-brass-deep">.</span>
          </p>
          <p className="mt-3 max-w-xs text-2xs leading-relaxed text-ink-paper-muted">
            Un assistant qui répond à vos clients sur WhatsApp, pour toutes les
            activités qui reçoivent beaucoup de demandes.
          </p>
        </div>

        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xs text-ink-paper-muted transition-colors duration-[120ms] hover:text-ink-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-paper-line px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-2xs text-ink-paper-muted">
          © {new Date().getFullYear()} Luma
        </p>
        <nav
          aria-label="Informations légales"
          className="flex flex-wrap gap-x-7 gap-y-2"
        >
          {legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xs text-ink-paper-muted transition-colors duration-[120ms] hover:text-ink-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
