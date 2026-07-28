import { SectionLabel, CtaPrimary } from "@/components/ui";

/**
 * Pas une grille de trois formules avec le palier du milieu surligné : une
 * facture. C'est l'artefact que le gérant connaît, et c'est la seule forme qui
 * rend « vous payez seulement à l'usage » vérifiable d'un coup d'œil.
 *
 * ⚠ Le tarif à la conversation est un PLACEHOLDER — voir CONTENT.md.
 */
const PRICE_PER_CONVERSATION = 0.4;
const CONVERSATIONS = 214;

const freeLines = [
  "Installation et réglages",
  "Mise en place de votre WhatsApp",
  "Reprise de vos prix, de vos prestations et de votre ton",
  "Formation de votre équipe",
  "Abonnement mensuel",
];

const euro = (value: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);

export function Pricing() {
  const total = PRICE_PER_CONVERSATION * CONVERSATIONS;

  return (
    <section
      id="le-prix"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Le prix</SectionLabel>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[16ch] text-xl sm:text-2xl lg:text-3xl">
              L&apos;installation est gratuite. Vous payez{" "}
              <span className="mark-brass">seulement quand ça sert.</span>
            </h2>

            <p className="prose-read mt-7 text-sm text-ink-paper-muted">
              Vous ne payez pas avant d&apos;avoir vu si ça marche chez vous. Si
              Luma ne répond à personne ce mois-ci, votre facture est à zéro.
            </p>

            <dl className="mt-10 space-y-8 border-t border-paper-line pt-9">
              <div>
                <dt className="display-soft text-base sm:text-lg">
                  Et si je veux arrêter ?
                </dt>
                <dd className="prose-read mt-3 text-xs text-ink-paper-muted">
                  Vous arrêtez. Votre numéro reste le vôtre, on vous rend vos
                  fiches, pas de préavis.
                </dd>
              </div>
              <div>
                <dt className="display-soft text-base sm:text-lg">
                  Combien de temps avant que ça tourne ?
                </dt>
                <dd className="prose-read mt-3 text-xs text-ink-paper-muted">
                  Quelques jours. Deux échanges pour reprendre vos prix, vos
                  règles et votre façon de parler, puis on met tout en place.
                </dd>
              </div>
            </dl>
          </div>

          {/* La facture. */}
          <div>
            <div className="rounded-card border border-paper-line bg-paper-alt/70 p-6 sm:p-8">
              <p className="flex items-baseline justify-between gap-4 border-b border-paper-line pb-4">
                <span className="kicker text-ink-paper-muted">
                  Exemple de facture
                </span>
                <span className="font-mono text-2xs text-ink-paper-muted">
                  mars
                </span>
              </p>

              <ul className="mt-6 space-y-3.5">
                {freeLines.map((line) => (
                  <li
                    key={line}
                    className="flex items-baseline justify-between gap-4 text-xs"
                  >
                    <span className="text-ink-paper-muted">{line}</span>
                    <span className="shrink-0 font-mono tabular-nums">0,00 €</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-paper-line pt-5">
                <p className="flex items-baseline justify-between gap-4 text-xs">
                  <span>
                    Conversations traitées
                    <span
                      className="ml-2 font-mono text-2xs text-ink-paper-muted"
                      data-placeholder="tarif"
                    >
                      {CONVERSATIONS} × {euro(PRICE_PER_CONVERSATION)}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono tabular-nums">
                    {euro(total)}
                  </span>
                </p>
              </div>

              <p className="mt-6 flex items-baseline justify-between gap-4 border-t-2 border-ink-paper/25 pt-5">
                <span className="display-soft text-base sm:text-lg">
                  Total du mois
                </span>
                <span className="font-mono text-lg font-medium tabular-nums">
                  {euro(total)}
                </span>
              </p>

              <p className="mt-6 text-2xs leading-relaxed text-ink-paper-muted">
                Une conversation traitée = un échange mené jusqu&apos;au bout. Si
                Luma vous passe la main, ce n&apos;est pas facturé.
              </p>
            </div>

            <p className="mt-7 text-sm font-medium">
              Pas de conversation, pas de facture.
            </p>

            <CtaPrimary href="#essai-gratuit" className="mt-5">
              Essayer gratuitement
            </CtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
