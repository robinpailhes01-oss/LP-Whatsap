import { SectionLabel } from "@/components/ui";

/**
 * Les vraies objections d'un gérant, pas les questions qu'on aimerait qu'il pose.
 * Tout est visible d'emblée : un accordéon cacherait précisément ce que le
 * visiteur méfiant est venu lire.
 */
const questions = [
  {
    q: "Et s'il dit une bêtise à un client ?",
    a: "L'agent ne répond que dans le périmètre que vous lui donnez. Hors de ce périmètre, il ne devine pas : il dit qu'il transmet et vous alerte. Pendant les premiers jours, vous pouvez relire chaque réponse avant qu'elle parte — c'est vous qui décidez quand lâcher la main.",
  },
  {
    q: "Mes clients vont savoir qu'ils parlent à une machine ?",
    a: "Nous vous recommandons de le dire, et l'agent l'annonce par défaut dès le premier message. Ce n'est pas une contrainte : un client à qui l'on répond à 23h47 préfère largement une réponse assumée comme automatique à un silence jusqu'au lendemain.",
  },
  {
    q: "Que deviennent les données de mes clients ?",
    a: "Elles restent les vôtres, hébergées dans l'Union européenne, et ne servent jamais à entraîner de modèle. Vous pouvez les exporter à tout moment, et leur suppression est effective sous 30 jours si vous partez.",
  },
  {
    q: "J'ai déjà un PMS et un channel manager.",
    a: "L'agent se branche dessus plutôt que de les remplacer : il lit vos disponibilités et y écrit les réservations. S'il ne connaît pas encore votre outil, on vous le dit avant de commencer, pas après.",
  },
  {
    q: "Je n'ai pas de compte WhatsApp Business.",
    a: "C'est nous qui l'ouvrons et le vérifions, avec votre numéro existant ou un nouveau, selon ce que vous préférez. C'est compris dans la mise en place — donc gratuit.",
  },
  {
    q: "Mon équipe n'est pas à l'aise avec les outils informatiques.",
    a: "Il n'y a rien à apprendre côté réception : les échanges se lisent dans WhatsApp, comme d'habitude. Le CRM tient en un écran, et une personne qui sait remplir un cahier de réservations sait s'en servir.",
  },
];

export function Faq() {
  return (
    <section
      id="objections"
      data-scene-time="06:55"
      data-scene-surface="dawn"
      className="border-t border-dawn-line bg-dawn text-ink-dawn"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="06:55" onDawn>
          Ce que vous alliez demander
        </SectionLabel>

        <dl className="mt-12 grid gap-x-16 gap-y-10 border-t border-dawn-line pt-12 md:grid-cols-2">
          {questions.map((item) => (
            <div key={item.q}>
              <dt className="display-soft max-w-[26ch] text-base">{item.q}</dt>
              <dd className="mt-3 max-w-md text-xs leading-relaxed text-ink-dawn-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
