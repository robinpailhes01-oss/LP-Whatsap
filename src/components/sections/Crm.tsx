import { SectionLabel } from "@/components/ui";

/* La fiche telle qu'elle existe le lendemain matin. Le carnet n'est pas un
   outil de plus : c'est ce que la conversation produit toute seule. */
const record = {
  name: "Camille Rousseau",
  tag: "3e séjour",
  fields: [
    { label: "Séjour", value: "12 → 13 mars · 1 nuit" },
    { label: "Chambre", value: "Jardin · 148 €" },
    { label: "Reçu par", value: "WhatsApp · 23h47" },
    { label: "Arrhes", value: "44,40 € · à recevoir" },
  ],
  notes: [
    "Voyage avec son chien — prévoir un panier en chambre.",
    "Arrive vers 22h, prévenir la veilleuse.",
    "Déjà venue en septembre 2024 et en juin 2025.",
  ],
  next: "Relance des arrhes prévue demain matin",
};

const pillars = [
  {
    title: "Les mots de votre métier",
    body: "Séjours, arrhes, options, couverts, annulations. Pas « prospects » ni « pipeline ».",
  },
  {
    title: "Vous vous souvenez de tout",
    body: "Il revient dans deux ans ? Vous savez qu'il voyage avec son chien et qu'il arrive tard.",
  },
  {
    title: "Les relances partent toutes seules",
    body: "Arrhes en attente, devis sans réponse, mot avant l'arrivée. Celles que personne n'a le temps de faire.",
  },
];

export function Crm() {
  return (
    <section
      id="carnet-clients"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Votre carnet de clients</SectionLabel>

        <h2 className="display-loud mt-8 max-w-[18ch] text-xl sm:text-2xl lg:text-3xl">
          Le lendemain matin,{" "}
          <span className="mark-brass">tout est déjà noté.</span>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <dl className="divide-y divide-paper-line border-t border-paper-line">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="py-8">
                <dt className="display-soft text-base sm:text-lg">
                  {pillar.title}
                </dt>
                <dd className="prose-read mt-3 text-xs text-ink-paper-muted">
                  {pillar.body}
                </dd>
              </div>
            ))}
          </dl>

          {/* La fiche produite par la conversation du hero — la boucle se ferme. */}
          <div className="rounded-card border border-paper-line bg-paper-alt/70 shadow-[0_1px_2px_rgb(18_24_21/0.05),0_14px_36px_-18px_rgb(18_24_21/0.2)]">
            <div className="flex items-center justify-between gap-4 border-b border-paper-line px-5 py-5 sm:px-6">
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brass/25 font-display text-sm font-semibold">
                  CR
                </span>
                <span>
                  <span className="block text-xs font-medium">{record.name}</span>
                  <span className="text-2xs text-ink-paper-muted">
                    {record.tag}
                  </span>
                </span>
              </span>
              <span className="rounded-pill bg-signal-deep/12 px-3 py-1.5 text-2xs font-medium text-signal-deep">
                Confirmée
              </span>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-paper-line">
              {record.fields.map((field) => (
                <div key={field.label} className="bg-paper-alt/70 px-5 py-4 sm:px-6">
                  <dt className="kicker text-ink-paper-muted">{field.label}</dt>
                  <dd className="mt-2 font-mono text-2xs tabular-nums">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-paper-line px-5 py-5 sm:px-6">
              <p className="kicker text-ink-paper-muted">Notes</p>
              <ul className="mt-3.5 space-y-2.5">
                {record.notes.map((note) => (
                  <li
                    key={note}
                    className="flex gap-3 text-2xs leading-relaxed text-ink-paper-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                      aria-hidden="true"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <p className="flex items-center gap-2 border-t border-paper-line px-5 py-4 text-2xs font-medium text-signal-deep sm:px-6">
              <span aria-hidden="true">↳</span>
              {record.next}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
