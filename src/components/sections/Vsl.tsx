"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui";
import { embedUrl, vsl } from "@/lib/vsl";

/**
 * Sur papier, comme tout le corps de la page : le hero est désormais la seule
 * section sombre. Le contraste vient du lecteur lui-même, qui est noir.
 *
 * Le lecteur n'est chargé qu'au clic. Une iframe YouTube pèse plusieurs
 * centaines de kilo-octets et pose des cookies tiers — les faire porter à tous
 * les visiteurs, y compris ceux qui ne regarderont jamais la vidéo,
 * contredirait ce que la page promet plus bas sur les données.
 */
export function Vsl() {
  const [startAt, setStartAt] = useState<number | null>(null);
  const configured = vsl.provider !== null && vsl.source !== "";
  const playing = startAt !== null;

  return (
    <section
      id="la-video"
      data-surface="paper"
      className="border-t border-paper-line bg-paper text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionLabel>En vidéo</SectionLabel>

        <h2 className="display-loud mt-8 max-w-[16ch] text-xl sm:text-2xl lg:text-3xl">
          Regardez Luma travailler. Quatre minutes, sans jargon.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="overflow-hidden rounded-card border border-paper-line bg-night">
            <div className="relative aspect-video">
              {playing && configured ? (
                vsl.provider === "file" ? (
                  <video
                    src={embedUrl(vsl, startAt)}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full"
                    title={vsl.title}
                  >
                    {vsl.captions && (
                      <track
                        kind="captions"
                        src={vsl.captions}
                        srcLang="fr"
                        label="Français"
                        default
                      />
                    )}
                  </video>
                ) : (
                  <iframe
                    src={embedUrl(vsl, startAt)}
                    title={vsl.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                )
              ) : (
                <PlayFacade configured={configured} onPlay={() => setStartAt(0)} />
              )}
            </div>

            <p className="flex flex-col gap-1 border-t border-night-line/60 px-4 py-3 text-2xs text-ink-muted sm:flex-row sm:items-center sm:gap-3 sm:px-5">
              <span>
                <span className="mr-2 text-signal">▸</span>
                {vsl.duration}
              </span>
              <span aria-hidden="true" className="hidden text-night-line sm:inline">
                ·
              </span>
              <span>Pas de formulaire à remplir pour la regarder</span>
            </p>
          </div>

          <div>
            <p className="kicker text-ink-paper-muted">Ce que vous allez voir</p>
            <ol className="mt-5 border-t border-paper-line">
              {vsl.chapters.map((chapter) => (
                <li key={chapter.at} className="border-b border-paper-line">
                  <button
                    type="button"
                    disabled={!configured}
                    onClick={() => setStartAt(chapter.at)}
                    className="group flex w-full items-baseline gap-4 py-4 text-left disabled:cursor-default"
                  >
                    <span className="font-mono text-2xs tabular-nums text-brass-deep">
                      {chapter.label}
                    </span>
                    <span className="text-xs leading-relaxed text-ink-paper-muted transition-colors duration-[120ms] group-enabled:group-hover:text-ink-paper">
                      {chapter.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-2xs leading-relaxed text-ink-paper-muted">
              {configured
                ? "Cliquez une ligne pour démarrer la vidéo à cet endroit."
                : "Ces repères seront cliquables une fois la vidéo en ligne."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Façade de lecture, et cadre d'attente tant qu'aucune vidéo n'est renseignée. */
function PlayFacade({
  configured,
  onPlay,
}: {
  configured: boolean;
  onPlay: () => void;
}) {
  if (!configured) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-night px-6 text-center">
        <span
          className="grid h-14 w-14 place-items-center rounded-full border border-night-line"
          aria-hidden="true"
        >
          <PlayGlyph className="h-5 w-5 translate-x-[1px] fill-ink-muted" />
        </span>
        <p className="kicker text-ink-muted">Emplacement de la vidéo</p>
        <p className="max-w-sm font-mono text-2xs leading-relaxed text-ink-muted/70">
          Renseigner <code>provider</code> et <code>source</code> dans{" "}
          <code>src/lib/vsl.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <>
      {vsl.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={vsl.poster}
          alt={vsl.posterAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 bg-night" aria-hidden="true" />
      )}

      <button
        type="button"
        onClick={onPlay}
        className="group absolute inset-0 grid place-items-center bg-night/45 transition-colors duration-[240ms] hover:bg-night/25"
      >
        <span className="grid h-20 w-20 place-items-center rounded-full bg-brass transition-transform duration-[120ms] ease-confident group-hover:scale-105 group-active:scale-95">
          <PlayGlyph className="h-7 w-7 translate-x-[2px] fill-night" />
        </span>
        <span className="sr-only">
          Lire la vidéo : {vsl.title} ({vsl.duration})
        </span>
      </button>
    </>
  );
}

function PlayGlyph({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 18" className={className} aria-hidden="true">
      <path d="M15 8.13a1 1 0 0 1 0 1.74l-13 7.5A1 1 0 0 1 .5 16.5v-15A1 1 0 0 1 2 .63z" />
    </svg>
  );
}
