import { SectionLabel } from "@/components/ui";

/* La fiche telle qu'elle existe le lendemain matin. Le carnet n'est pas un
   outil de plus : c'est ce que la conversation produit toute seule.

   L'exemple est volontairement une salle de réception, et non un hôtel : les
   libellés sont ceux de n'importe quelle activité qui prend des réservations. */
const record = {
  name: "Camille Rousseau",
  tag: "3e demande",
  fields: [
    { label: "Prestation", value: "Mariage · 90 couverts" },
    { label: "Date", value: "Samedi 21 juin" },
    { label: "Reçu par", value: "WhatsApp · 22h19" },
    { label: "Acompte", value: "720 € · à recevoir" },
  ],
  notes: [
    "Traiteur libre, souhaite la liste des prestataires habituels.",
    "Visite proposée samedi 11h, en attente de confirmation.",
    "Avait déjà demandé un devis en mars pour un anniversaire.",
  ],
  next: "Relance du devis prévue lundi matin",
};

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

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="prose-read text-sm text-ink-paper-muted">
              Pendant que Luma discute, il remplit une fiche. Les relances
              partent toutes seules : acompte en attente, devis sans réponse,
              mot avant l&apos;arrivée.
            </p>
            <p className="mt-6 text-sm font-medium">
              Vous n&apos;ouvrez plus une conversation. Vous ouvrez un dossier.
            </p>
          </div>

          {/* La fiche explique mieux que trois paragraphes ne le feraient. */}
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
