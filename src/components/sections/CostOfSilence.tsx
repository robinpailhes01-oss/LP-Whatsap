"use client";

import { useId, useState } from "react";
import { CtaPrimary, SectionLabel } from "@/components/ui";

/**
 * Plutôt que des statistiques sectorielles invérifiables, le visiteur calcule
 * avec ses propres chiffres. Les trois curseurs sont formulés en langage de
 * comptoir : des messages, des euros, et « combien partent, sur 10 » — pas des
 * taux de conversion.
 */

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-4">
        <span className="text-xs text-ink-paper-muted">{label}</span>
        <span className="shrink-0 font-mono text-sm font-medium tabular-nums">
          {display}
        </span>
      </label>
      {/* Piste épaisse et zone tactile généreuse : le curseur se règle au
          pouce, sur un téléphone, sans viser. */}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-pill bg-paper-line accent-brass-deep"
      />
    </div>
  );
}

export function CostOfSilence() {
  const [messages, setMessages] = useState(25);
  const [basket, setBasket] = useState(180);
  const [lostOfTen, setLostOfTen] = useState(3);

  const lostPerMonth = Math.round(messages * 4.33 * (lostOfTen / 10) * basket);

  return (
    <section
      id="ce-que-ca-coute"
      data-surface="paper"
      className="bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Ce que ça vous coûte</SectionLabel>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[17ch] text-xl sm:text-2xl lg:text-3xl">
              Un message sans réponse, c&apos;est une{" "}
              <span className="mark-brass">réservation chez le voisin</span>.
            </h2>

            <p className="prose-read mt-7 text-xs text-ink-paper-muted">
              Quand quelqu&apos;un cherche une chambre, il écrit à trois
              établissements en même temps. Il réserve chez celui qui répond le
              premier. Si vous répondez le lendemain matin, c&apos;est déjà pris
              ailleurs.
            </p>

            <p className="prose-read mt-5 text-xs text-ink-paper-muted">
              Ce n&apos;est pas un problème de sérieux. C&apos;est un problème
              d&apos;heures : personne ne peut rester derrière un téléphone
              24 heures sur 24.
            </p>

            {/* Le visiteur vient de chiffrer sa perte : c'est le moment de
                l'action, pas trois sections plus bas. */}
            <div className="mt-10 border-t border-paper-line pt-8">
              <p className="text-sm font-medium">
                C&apos;est exactement ce que Luma récupère.
              </p>
              <CtaPrimary href="#essai-gratuit" className="mt-5">
                Essayer gratuitement
              </CtaPrimary>
              <p className="mt-4 text-2xs text-ink-paper-muted">
                Installation gratuite · sans engagement · sans carte bancaire
              </p>
            </div>
          </div>

          {/* Le calcul se fait avec les chiffres du visiteur, pas les nôtres. */}
          <div className="rounded-card border border-paper-line bg-paper-alt/70 p-6 sm:p-8">
            <p className="kicker text-ink-paper-muted">
              Faites le calcul avec vos chiffres
            </p>

            <div className="mt-8 space-y-7">
              <Slider
                label="Messages reçus quand personne n'est là pour répondre"
                value={messages}
                display={`${messages} / semaine`}
                min={5}
                max={150}
                step={5}
                onChange={setMessages}
              />
              <Slider
                label="Prix moyen d'une réservation chez vous"
                value={basket}
                display={`${basket} €`}
                min={50}
                max={2000}
                step={10}
                onChange={setBasket}
              />
              <Slider
                label="Sur 10 clients qui n'ont pas de réponse rapide, combien réservent ailleurs ?"
                value={lostOfTen}
                display={`${lostOfTen} sur 10`}
                min={1}
                max={8}
                step={1}
                onChange={setLostOfTen}
              />
            </div>

            <div className="mt-9 border-t border-paper-line pt-7">
              <p className="text-xs text-ink-paper-muted">
                Ce que vous laissez partir, chaque mois
              </p>
              <p className="mt-3">
                <span className="mark-brass font-mono text-2xl font-medium tabular-nums">
                  {euro.format(lostPerMonth)}
                </span>
              </p>
              <p className="mt-5 text-2xs leading-relaxed text-ink-paper-muted">
                Le calcul : vos messages par semaine, multipliés par 4,33
                semaines, par la part qui part ailleurs, par votre prix moyen.
                Les trois curseurs sont à vous — c&apos;est votre estimation, pas
                la nôtre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
