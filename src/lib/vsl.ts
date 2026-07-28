/**
 * Configuration de la VSL.
 *
 * Tant que `provider` vaut `null`, la section affiche un cadre d'attente
 * explicite au lieu d'un lecteur cassé. Renseigner les champs ci-dessous suffit
 * à la mettre en ligne — aucun autre fichier n'est à toucher.
 *
 * Voir CONTENT.md § VSL.
 */

export type VslProvider = "youtube" | "vimeo" | "file";

export type VslChapter = {
  /** Position dans la vidéo, en secondes. Sert au saut au clic. */
  at: number;
  /** Horodatage affiché. Doit correspondre à `at`. */
  label: string;
  title: string;
};

export type VslConfig = {
  /** `null` = pas encore de vidéo : la section affiche son cadre d'attente. */
  provider: VslProvider | null;
  /** Identifiant YouTube / Vimeo, ou URL du fichier si `provider: "file"`. */
  source: string;
  /** Image d'attente, dans `/public`. Vide = fond uni, sans image cassée. */
  poster: string;
  /** Texte alternatif de l'image d'attente. */
  posterAlt: string;
  /** Durée affichée à côté du bouton de lecture. */
  duration: string;
  /** Titre accessible du lecteur. */
  title: string;
  /**
   * Fichier de sous-titres WebVTT, pour `provider: "file"` uniquement (sur
   * YouTube et Vimeo, les sous-titres se gèrent depuis la plateforme).
   * Une VSL sans sous-titres se regarde mal en son coupé — c'est-à-dire dans
   * la majorité des cas.
   */
  captions?: string;
  chapters: VslChapter[];
};

export const vsl: VslConfig = {
  provider: null,
  source: "",
  poster: "",
  posterAlt:
    "Arrêt sur image de la démonstration : la boîte de réception WhatsApp d'un établissement.",
  duration: "4 min",
  title: "Démonstration de Luma sur une activité réelle",
  captions: "",
  chapters: [
    { at: 0, label: "00:00", title: "Le problème, en une soirée" },
    { at: 48, label: "00:48", title: "Luma branché sur une vraie activité" },
    { at: 130, label: "02:10", title: "Ce qui se note tout seul" },
    { at: 205, label: "03:25", title: "Ce que ça coûte, ligne par ligne" },
  ],
};

/** URL d'intégration, lecture immédiate, au timecode demandé. */
export function embedUrl(config: VslConfig, startAt = 0): string {
  if (config.provider === "youtube") {
    /* Domaine sans cookie : cohérent avec ce que la page promet sur les données. */
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      start: String(startAt),
    });
    return `https://www.youtube-nocookie.com/embed/${config.source}?${params}`;
  }
  if (config.provider === "vimeo") {
    const params = new URLSearchParams({ autoplay: "1", dnt: "1" });
    const fragment = startAt > 0 ? `#t=${startAt}s` : "";
    return `https://player.vimeo.com/video/${config.source}?${params}${fragment}`;
  }
  return config.source;
}
