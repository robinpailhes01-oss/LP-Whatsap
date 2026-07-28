import { SectionLabel, CtaPrimary } from "@/components/ui";

/**
 * Pas une grille de trois formules avec le palier du milieu surligné : une
 * facture. C'est l'artefact que le gérant connaît, et c'est la seule forme qui
 * rend l'argument « vous ne payez que l'usage » vérifiable d'un coup d'œil.
 *
 * ⚠ Le tarif à la conversation est un PLACEHOLDER — voir CONTENT.md.
 */
const PRICE_PER_CONVERSATION = 0.4;
const CONVERSATIONS = 214;

const freeLines = [
  "Mise en place et configuration",
  "Connexion de votre numéro WhatsApp Business",
  "Reprise de vos tarifs, chambres et conditions",
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
      id="le-modele"
      data-scene-time="06:40"
      data-scene-surface="dawn"
      className="border-t border-dawn-line bg-dawn text-ink-dawn"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="06:40" onDawn>
          Le modèle
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[15ch] text-xl sm:text-2xl lg:text-3xl">
              On installe gratuitement. Vous payez{" "}
              <span className="text-brass-dim">ce que vous utilisez.</span>
            </h2>

            <p className="mt-7 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
              Facturer la mise en place reviendrait à vous faire payer un risque
              que nous devrions porter. Si l&apos;agent ne traite aucune
              conversation, il ne vous coûte rien — c&apos;est le seul engagement
              qui nous oblige vraiment à ce qu&apos;il fonctionne.
            </p>

            <dl className="mt-10 space-y-6 border-t border-dawn-line pt-8">
              <div>
                <dt className="display-soft text-base">Et si ça ne me va pas ?</dt>
                <dd className="mt-2 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
                  Vous coupez. Votre numéro WhatsApp reste le vôtre, vos données
                  clients vous sont rendues en export, et il n&apos;y a aucun
                  préavis à respecter.
                </dd>
              </div>
              <div>
                <dt className="display-soft text-base">Combien de temps avant que ça tourne ?</dt>
                <dd className="mt-2 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
                  Comptez une semaine : deux échanges pour reprendre vos tarifs
                  et vos règles, quelques jours de rodage où vous relisez chaque
                  réponse avant qu&apos;elle parte.
                </dd>
              </div>
            </dl>
          </div>

          {/* La facture. */}
          <div>
            <div className="rounded-card border border-dawn-line bg-dawn-alt/60 p-6 sm:p-8">
              <p className="flex items-baseline justify-between gap-4 border-b border-dawn-line pb-4">
                <span className="kicker text-ink-dawn-muted">
                  Votre première facture
                </span>
                <span className="font-mono text-2xs text-ink-dawn-muted">
                  mars
                </span>
              </p>

              <ul className="mt-5 space-y-3">
                {freeLines.map((line) => (
                  <li
                    key={line}
                    className="flex items-baseline justify-between gap-4 text-xs"
                  >
                    <span className="text-ink-dawn-muted">{line}</span>
                    {/* Pas de vert ici : le vert est réservé à l'agent en action
                        (DESIGN.md § règle d'encodage). Les zéros parlent seuls. */}
                    <span className="shrink-0 font-mono tabular-nums">0,00 €</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-dawn-line pt-5">
                <p className="flex items-baseline justify-between gap-4 text-xs">
                  <span>
                    Conversations traitées
                    <span
                      className="ml-2 font-mono text-2xs text-ink-dawn-muted"
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

              <p className="mt-6 flex items-baseline justify-between gap-4 border-t-2 border-ink-dawn/20 pt-5">
                <span className="display-soft text-base">Total du mois</span>
                <span className="font-mono text-lg tabular-nums text-brass-dim">
                  {euro(total)}
                </span>
              </p>

              <p className="mt-5 text-2xs leading-relaxed text-ink-dawn-muted">
                Une conversation traitée = un échange mené de bout en bout avec
                un client. Un message auquel l&apos;agent ne sait pas répondre et
                qu&apos;il vous transmet n&apos;est pas facturé.
              </p>
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-2xs text-ink-dawn-muted">
              <span>Pas de conversation, pas de facture.</span>
            </p>

            <CtaPrimary href="#demander-une-demo" onDawn className="mt-6">
              Faire installer l&apos;agent gratuitement
            </CtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
