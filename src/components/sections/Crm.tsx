import { SectionLabel } from "@/components/ui";

/* La fiche telle qu'elle existe le lendemain matin. Le CRM n'est pas un onglet
   de plus : c'est ce que la conversation produit automatiquement. */
const record = {
  name: "Camille Rousseau",
  tag: "3e séjour",
  fields: [
    { label: "Séjour", value: "12 → 13 mars · 1 nuit" },
    { label: "Chambre", value: "Jardin · 148 €" },
    { label: "Canal", value: "WhatsApp · 23:47" },
    { label: "Arrhes", value: "44,40 € · en attente" },
  ],
  notes: [
    "Voyage avec un chien — panier à prévoir en chambre.",
    "Arrivée annoncée vers 22h, prévenir la veilleuse.",
    "A déjà séjourné en sept. 2024 et juin 2025.",
  ],
  next: "Relance automatique des arrhes dans 22 h",
};

const pillars = [
  {
    title: "Fait pour votre métier, pas adapté à lui",
    body: "Séjours, arrhes, options, couverts, conditions d'annulation, saisons. Les champs sont ceux que vous utilisez déjà — vous ne rangez pas un hôtel dans un CRM de commerciaux.",
  },
  {
    title: "L'historique complet, pas le dernier message",
    body: "Chaque échange, chaque séjour, chaque préférence reste attaché au client. Quand il revient dans deux ans, vous savez qu'il voyage avec un chien.",
  },
  {
    title: "Les relances partent toutes seules",
    body: "Arrhes non réglées, devis sans réponse, séjour à venir, mot après le départ. Ce sont ces relances-là que personne n'a jamais le temps de faire.",
  },
];

export function Crm() {
  return (
    <section
      id="le-crm"
      data-scene-time="06:04"
      data-scene-surface="dawn"
      className="bg-dawn text-ink-dawn"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="06:04" onDawn>
          Le CRM
        </SectionLabel>

        <h2 className="display-loud mt-10 max-w-[19ch] text-2xl sm:text-3xl">
          Une conversation, ça se perd. Une fiche,{" "}
          <span className="text-brass-dim">ça se travaille.</span>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <dl className="divide-y divide-dawn-line border-t border-dawn-line">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="py-7">
                <dt className="display-soft text-base">{pillar.title}</dt>
                <dd className="mt-2.5 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
                  {pillar.body}
                </dd>
              </div>
            ))}
          </dl>

          {/* La fiche produite par la conversation du hero — la boucle se ferme. */}
          <div className="rounded-card border border-dawn-line bg-dawn-alt/60 shadow-[0_1px_2px_rgb(16_26_22/0.06),0_12px_32px_-16px_rgb(16_26_22/0.18)]">
            <div className="flex items-center justify-between gap-4 border-b border-dawn-line px-5 py-4 sm:px-6">
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brass/20 font-display text-sm text-brass-dim">
                  CR
                </span>
                <span>
                  <span className="block text-sm font-medium">{record.name}</span>
                  <span className="font-mono text-2xs text-ink-dawn-muted">
                    {record.tag}
                  </span>
                </span>
              </span>
              <span className="rounded-pill bg-signal-dim/15 px-3 py-1 font-mono text-2xs text-signal-dim">
                confirmée
              </span>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-dawn-line">
              {record.fields.map((field) => (
                <div key={field.label} className="bg-dawn-alt/60 px-5 py-4 sm:px-6">
                  <dt className="kicker text-ink-dawn-muted">{field.label}</dt>
                  <dd className="mt-1.5 font-mono text-xs tabular-nums">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-dawn-line px-5 py-5 sm:px-6">
              <p className="kicker text-ink-dawn-muted">Notes</p>
              <ul className="mt-3 space-y-2">
                {record.notes.map((note) => (
                  <li
                    key={note}
                    className="flex gap-2.5 text-xs leading-relaxed text-ink-dawn-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <p className="flex items-center gap-2 border-t border-dawn-line px-5 py-4 font-mono text-2xs text-signal-dim sm:px-6">
              <span aria-hidden="true">↳</span>
              {record.next}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
