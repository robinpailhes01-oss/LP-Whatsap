import Image from "next/image";
import { SectionLabel } from "@/components/ui";
import { founder } from "@/lib/founder";

/**
 * Juste avant le formulaire : on rencontre la personne, puis on lui écrit.
 * C'est le seul visage de toute la page — c'est ce qui lui donne son poids.
 */
export function Founder() {
  return (
    <section
      id="qui-suis-je"
      data-surface="paper"
      className="border-t border-paper-line bg-paper-alt/50 text-ink-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionLabel>Qui est derrière Luma</SectionLabel>

        <div className="mt-10 grid gap-10 sm:grid-cols-[15rem_1fr] sm:gap-12 lg:grid-cols-[19rem_1fr] lg:gap-16">
          <div>
            {founder.photo ? (
              /* Cadre 4/5 : le portrait est carré, les côtés sont rognés — le
                 visage est centré, il ne perd rien. next/image sert une version
                 redimensionnée et compressée plutôt que l'original. */
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-paper-line bg-paper-alt">
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 15rem, 19rem"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-card border border-paper-line bg-paper px-6 text-center">
                <span
                  className="grid h-16 w-16 place-items-center rounded-full bg-paper-alt"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-none stroke-ink-paper-muted"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="8.5" r="3.75" />
                    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="kicker text-ink-paper-muted">Votre photo</p>
                <p className="font-mono text-2xs leading-relaxed text-ink-paper-muted/70">
                  Ajouter le fichier dans <code>/public</code> et renseigner{" "}
                  <code>photo</code> dans <code>src/lib/founder.ts</code>.
                </p>
              </div>
            )}
          </div>

          <div className="sm:pt-2">
            <p className="display-soft text-lg sm:text-xl">{founder.name}</p>
            <p className="mt-1 text-xs text-ink-paper-muted">{founder.role}</p>

            <div className="prose-read mt-7 space-y-5 text-sm">
              {founder.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-8 border-t border-paper-line pt-7 text-sm">
              <a
                href="#essai-gratuit"
                className="font-medium underline decoration-brass decoration-2 underline-offset-4"
              >
                Laissez-moi votre numéro
              </a>
              <span className="ml-2 text-ink-paper-muted">
                — c&apos;est moi qui vous réponds.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
