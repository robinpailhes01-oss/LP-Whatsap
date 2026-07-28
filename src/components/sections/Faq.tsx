import { SectionLabel } from "@/components/ui";

/**
 * Les questions telles qu'un gérant les pose vraiment, pas celles qu'on
 * aimerait qu'il pose. Tout est visible d'emblée : un accordéon cacherait
 * précisément ce que le visiteur méfiant est venu lire.
 */
const questions = [
  {
    q: "Est-ce que ça remplace ma réceptionniste ?",
    a: "Non. Luma prend les messages quand il n'y a personne — la nuit, le dimanche, pendant le service. Votre équipe garde ce qu'elle fait le mieux : accueillir les gens qui sont devant elle. Elle arrête simplement de répéter vingt fois par jour le code du wifi et l'heure du petit-déjeuner.",
  },
  {
    q: "Et s'il raconte n'importe quoi à un client ?",
    a: "Luma ne répond que sur ce que vous lui avez donné. En dehors, il ne devine pas : il dit qu'il transmet et vous prévient. Les premiers jours, vous relisez chaque réponse avant qu'elle parte — c'est vous qui décidez quand vous lui faites confiance.",
  },
  {
    q: "Mes clients vont s'apercevoir que ce n'est pas moi ?",
    a: "Luma le dit dès le premier message, et nous vous conseillons de le laisser le dire. Un client à qui on répond à minuit préfère largement une réponse annoncée comme automatique à un silence jusqu'au lendemain.",
  },
  {
    q: "Je ne suis pas à l'aise avec l'informatique.",
    a: "Il n'y a rien à apprendre. C'est nous qui installons et qui réglons tout. Ensuite, les échanges se lisent dans WhatsApp comme d'habitude, et le carnet de clients tient sur un seul écran. Si vous savez tenir un cahier de réservations, vous saurez vous en servir.",
  },
  {
    q: "Qu'est-ce que vous faites des données de mes clients ?",
    a: "Elles restent les vôtres. Elles sont conservées en Europe et ne servent jamais à entraîner un programme. Vous pouvez les récupérer quand vous voulez, et elles sont supprimées sous trente jours si vous partez.",
  },
  {
    q: "J'ai déjà un logiciel de réservation.",
    a: "Luma se branche dessus, il ne le remplace pas. Il lit vos disponibilités et y inscrit les réservations. Si votre logiciel ne fait pas encore partie de ceux que nous connaissons, on vous le dit avant de commencer, pas après.",
  },
];

export function Faq() {
  return (
    <section
      id="questions"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Les questions qu&apos;on nous pose</SectionLabel>

        <dl className="mt-12 grid gap-x-16 gap-y-12 border-t border-paper-line pt-12 md:grid-cols-2">
          {questions.map((item) => (
            <div key={item.q}>
              <dt className="display-soft max-w-[24ch] text-base sm:text-lg">
                {item.q}
              </dt>
              <dd className="prose-read mt-3.5 text-xs text-ink-paper-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
