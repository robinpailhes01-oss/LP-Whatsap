/**
 * Qui est derrière Luma.
 *
 * ⚠️ LE TEXTE CI-DESSOUS EST UN BROUILLON, PAS VOTRE HISTOIRE.
 * C'est la seule section de la page qui ne vaut que si elle est vraie : un
 * gérant qui lit trois phrases inventées le sent immédiatement, et il perd
 * d'un coup la confiance gagnée sur tout le reste de la page.
 *
 * À remplacer par vos mots, et à accompagner d'une vraie photo dans /public.
 * Voir CONTENT.md § Présentation du fondateur.
 */

export type Founder = {
  name: string;
  role: string;
  /** Chemin de la photo dans /public. Vide = cadre d'attente explicite. */
  photo: string;
  photoAlt: string;
  /** Trois paragraphes courts, maximum. Au-delà, personne ne lit. */
  paragraphs: string[];
  /** Le contact direct : c'est lui qui fait la différence sur cette section. */
  contact: { label: string; href: string } | null;
};

export const founder: Founder = {
  name: "Robin Pailhes",
  role: "Fondateur de Luma",
  photo: "",
  photoAlt: "Portrait de Robin Pailhes, fondateur de Luma.",
  paragraphs: [
    "J'ai créé Luma après avoir vu le même problème revenir dans chaque établissement que j'accompagnais : des messages qui arrivent le soir, le dimanche, en plein service — et personne pour y répondre.",
    "Ce n'est jamais un manque de sérieux. C'est un manque d'heures dans une journée.",
    "J'ai d'abord bricolé une solution pour un seul établissement. Un autre me l'a demandée. Aujourd'hui, c'est Luma.",
  ],
  contact: {
    label: "Écrivez-moi directement",
    href: "mailto:contact@luma-agence.fr",
  },
};
