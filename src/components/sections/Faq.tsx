import { SectionLabel } from "@/components/ui";

/**
 * Les questions telles qu'un gérant les pose vraiment, pas celles qu'on
 * aimerait qu'il pose. Tout est visible d'emblée : un accordéon cacherait
 * précisément ce que le visiteur méfiant est venu lire.
 */
const questions = [
  {
    q: "Est-ce que ça remplace quelqu'un de mon équipe ?",
    a: "Non. Luma prend les messages quand il n'y a personne : la nuit, le dimanche, en plein coup de feu. Votre équipe garde l'accueil et arrête de répéter le code du wifi vingt fois par jour.",
  },
  {
    q: "Et s'il raconte n'importe quoi à un client ?",
    a: "Il ne répond que sur ce que vous lui avez donné. En dehors, il ne devine pas : il vous passe la main. Les premiers jours, vous relisez tout avant que ça parte.",
  },
  {
    q: "Mes clients vont voir que ce n'est pas moi ?",
    a: "Luma le dit dès le premier message. Un client à qui on répond à minuit préfère ça à un silence jusqu'au lendemain.",
  },
  {
    q: "Je ne suis pas à l'aise avec l'informatique.",
    a: "Il n'y a rien à apprendre. On installe et on règle tout. Ensuite, vous lisez WhatsApp comme d'habitude.",
  },
  {
    q: "Qu'est-ce que vous faites de mes données ?",
    a: "Elles restent les vôtres, conservées en Europe, et ne servent jamais à entraîner un programme. Vous les récupérez quand vous voulez.",
  },
  {
    q: "J'ai déjà un logiciel de réservation ou un planning.",
    a: "Luma se branche dessus, il ne le remplace pas. Si le vôtre n'en fait pas encore partie, on vous le dit avant de commencer.",
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
