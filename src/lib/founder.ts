/**
 * Qui est derrière Luma.
 *
 * L'histoire ci-dessous vient de Robin. C'est la meilleure preuve de la page :
 * il n'a pas construit un outil pour les autres, il a résolu son propre
 * problème et s'en sert depuis deux ans. Ne pas la réécrire en « argumentaire »
 * — c'est sa force qu'elle soit dite platement.
 */

export type Founder = {
  name: string;
  role: string;
  /** Chemin de la photo dans /public. Vide = cadre d'attente explicite. */
  photo: string;
  photoAlt: string;
  /** Trois paragraphes courts, maximum. Au-delà, personne ne lit. */
  paragraphs: string[];
};

export const founder: Founder = {
  name: "Robin Pailhes",
  /* Le métier avant le titre : le lecteur doit voir quelqu'un comme lui,
     pas un informaticien qui vient lui vendre de l'IA. */
  role: "Loueur de yacht près de Montpellier depuis 2021 · fondateur de Luma",
  photo: "/robin-pailhes.jpg",
  photoAlt: "Portrait de Robin Pailhes, fondateur de Luma.",
  paragraphs: [
    "Depuis 2021, je loue un yacht de 13 mètres près de Montpellier. Pendant longtemps, j'ai répondu moi-même à chaque message : les disponibilités, les tarifs, les relances. Le soir, le dimanche, en vacances.",
    "Il y a deux ans, j'ai tout automatisé. Depuis, j'ai plus de réservations qu'avant, et beaucoup plus de temps libre.",
    "Luma, c'est ce système, installé chez vous.",
  ],
};
