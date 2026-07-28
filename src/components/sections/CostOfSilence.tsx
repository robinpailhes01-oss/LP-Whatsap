"use client";

import { useId, useState } from "react";
import { CtaPrimary, SectionLabel } from "@/components/ui";

/**
 * Plutôt que des statistiques invérifiables, le visiteur calcule avec ses
 * propres chiffres. Les trois curseurs sont formulés en langage de comptoir :
 * des messages, des euros, et « combien partent, sur 10 » — pas des taux de
 * conversion.
 *
 * Deux résultats, parce qu'il y a deux douleurs : ce qu'on perd, et le temps
 * qu'on y passe. La seconde est souvent celle qui décide.
 */

/** Durée moyenne d'une demande, aller-retour compris. Hypothèse affichée. */
const MINUTES_PAR_DEMANDE = 4;

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

  const demandesParMois = messages * 4.33;
  const lostPerMonth = Math.round(demandesParMois * (lostOfTen / 10) * basket);
  const heuresParMois = Math.round((demandesParMois * MINUTES_PAR_DEMANDE) / 60);

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
              Un message sans réponse, c&apos;est un{" "}
              <span className="mark-brass">client qui va chez le voisin</span>.
            </h2>

            <p className="prose-read mt-7 text-sm text-ink-paper-muted">
              Il écrit à trois endroits en même temps. Il réserve chez celui qui
              répond le premier. Et les demandes auxquelles vous répondez, vous
              y passez vos soirées.
            </p>

            {/* Le visiteur vient de chiffrer sa perte : c'est le moment de
                l'action, pas trois sections plus bas. */}
            <div className="mt-10 border-t border-paper-line pt-8">
              <p className="text-sm font-medium">
                C&apos;est exactement ce que Luma vous rend.
              </p>
              <CtaPrimary href="#essai-gratuit" className="mt-5">
                Essayer gratuitement
              </CtaPrimary>
              <p className="mt-4 text-2xs text-ink-paper-muted">
                Gratuit · sans engagement · sans carte bancaire
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

            <dl className="mt-9 grid gap-6 border-t border-paper-line pt-7 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-ink-paper-muted">
                  Ce que vous laissez partir
                </dt>
                <dd className="mt-3">
                  <span className="mark-brass font-mono text-2xl font-medium tabular-nums">
                    {euro.format(lostPerMonth)}
                  </span>
                  <span className="mt-1.5 block text-2xs text-ink-paper-muted">
                    par mois
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-ink-paper-muted">
                  Le temps que ça vous prend
                </dt>
                <dd className="mt-3">
                  <span className="mark-brass font-mono text-2xl font-medium tabular-nums">
                    {heuresParMois} h
                  </span>
                  <span className="mt-1.5 block text-2xs text-ink-paper-muted">
                    par mois, à répondre
                  </span>
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-2xs leading-relaxed text-ink-paper-muted">
              Les trois curseurs sont à vous : c&apos;est votre estimation, pas
              la nôtre. Le temps est compté sur la base de{" "}
              {MINUTES_PAR_DEMANDE} minutes par demande, aller-retour compris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
