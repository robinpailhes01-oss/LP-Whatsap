"use client";

import { useId, useState } from "react";
import { SectionLabel } from "@/components/ui";

/**
 * Plutôt que des statistiques sectorielles invérifiables, le visiteur calcule
 * avec ses propres chiffres. L'hypothèse de perte est affichée et réglable :
 * l'audience est méfiante, on montre le calcul au lieu de l'asséner.
 */

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function Slider({
  label,
  suffix,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-4">
        <span className="text-xs text-ink-muted">{label}</span>
        <span className="font-mono text-sm tabular-nums text-ink">
          {value}
          <span className="ml-1 text-2xs text-ink-muted">{suffix}</span>
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-pill bg-night-line accent-brass"
      />
    </div>
  );
}

export function CostOfSilence() {
  const [requests, setRequests] = useState(25);
  const [basket, setBasket] = useState(180);
  const [lossRate, setLossRate] = useState(25);

  const lostPerMonth = Math.round(
    requests * 4.33 * (lossRate / 100) * basket,
  );

  return (
    <section
      id="le-cout-du-silence"
      data-scene-time="23:51"
      data-scene-surface="night"
      className="border-t border-night-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel time="23:51">Le coût du silence</SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-loud max-w-[16ch] text-2xl sm:text-3xl">
              Une demande sans réponse ne vous attend pas.{" "}
              <span className="text-brass">Elle réserve ailleurs.</span>
            </h2>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-ink-muted">
              Le client qui écrit à 23h47 n&apos;écrit pas qu&apos;à vous. Il
              envoie le même message à trois établissements et retient celui qui
              répond le premier. Le lendemain matin, votre réponse est déjà en
              retard de neuf heures.
            </p>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-ink-muted">
              Ce n&apos;est pas un problème de service. C&apos;est un problème
              d&apos;horaires : personne ne peut tenir un comptoir 24h/24.
            </p>
          </div>

          {/* Le calcul se fait avec les chiffres du visiteur, pas les nôtres. */}
          <div className="rounded-card border border-night-line bg-night-alt p-6 sm:p-8">
            <p className="kicker text-ink-muted">Faites le calcul</p>

            <div className="mt-7 space-y-6">
              <Slider
                label="Demandes reçues hors présence au comptoir"
                suffix="/ semaine"
                value={requests}
                min={5}
                max={150}
                step={5}
                onChange={setRequests}
              />
              <Slider
                label="Panier moyen d'une réservation"
                suffix="€"
                value={basket}
                min={50}
                max={2000}
                step={10}
                onChange={setBasket}
              />
              <Slider
                label="Part qui part ailleurs faute de réponse rapide"
                suffix="%"
                value={lossRate}
                min={5}
                max={60}
                step={5}
                onChange={setLossRate}
              />
            </div>

            <div className="mt-8 border-t border-night-line pt-6">
              <p className="text-2xs text-ink-muted">
                Chiffre d&apos;affaires qui sort par la porte de derrière
              </p>
              <p className="mt-2 font-mono text-2xl tabular-nums text-brass">
                {euro.format(lostPerMonth)}
                <span className="ml-2 font-sans text-sm text-ink-muted">
                  / mois
                </span>
              </p>
              <p className="mt-4 text-2xs leading-relaxed text-ink-muted">
                Calcul : demandes × 4,33 semaines × part perdue × panier moyen.
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
