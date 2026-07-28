/**
 * Scripts de conversation.
 *
 * Le contenu est du vrai vocabulaire métier (arrhes, late check-out, couverts,
 * caution) — c'est ce qui distingue un agent fait pour l'hôtellerie d'un chatbot
 * générique, et c'est ce que le visiteur vient vérifier.
 */

export type Speaker = "guest" | "agent";

export type Message = {
  id: string;
  from: Speaker;
  text: string;
  /** Heure affichée sous la bulle. */
  time: string;
  /** Pause avant que la bulle (ou l'indicateur de frappe) n'apparaisse. */
  delayMs: number;
  /** Durée de l'indicateur « en train d'écrire… » qui précède la bulle. */
  typingMs?: number;
};

export type Conversation = {
  id: string;
  /** Nom affiché en tête de fil — l'établissement, vu par le client. */
  venue: string;
  /** Sous-titre du fil : ce que le client voit à côté du nom. */
  venueMeta: string;
  messages: Message[];
  /** Ce que Luma a écrit dans le CRM à l'issue de l'échange. */
  outcome: {
    label: string;
    detail: string;
  };
};

/** Conversation du hero — 23h47, personne au comptoir. */
export const heroConversation: Conversation = {
  id: "hero",
  venue: "Domaine des Ormes",
  venueMeta: "en ligne",
  messages: [
    {
      id: "m1",
      from: "guest",
      text: "Bonsoir, il vous resterait une chambre pour demain soir ? Nous sommes deux, avec un chien.",
      time: "23:47",
      delayMs: 700,
    },
    {
      id: "m2",
      from: "agent",
      text: "Bonsoir ! Oui — il me reste la Chambre Jardin à 148 € pour la nuit du 12 au 13, petit-déjeuner compris. Les chiens sont les bienvenus, sans supplément. Je vous la réserve ?",
      time: "23:47",
      delayMs: 900,
      typingMs: 1600,
    },
    {
      id: "m3",
      from: "guest",
      text: "Parfait, on la prend. On arrivera tard, vers 22h.",
      time: "23:49",
      delayMs: 2200,
    },
    {
      id: "m4",
      from: "agent",
      text: "C'est noté. Je vous envoie le lien pour les arrhes (30 %), et je préviens l'équipe pour une arrivée tardive et un panier pour votre chien. À demain soir !",
      time: "23:49",
      delayMs: 800,
      typingMs: 1800,
    },
  ],
  outcome: {
    label: "Fiche client créée",
    detail: "Réservation #2314 · arrhes en attente · arrivée tardive signalée",
  },
};

/**
 * Les demandes réelles que l'agent traite — section « ce qu'il sait faire ».
 * Chaque entrée est un vrai message reçu par un établissement, pas une
 * fonctionnalité reformulée en argument marketing.
 */
export type Handled = {
  id: string;
  /** Le message tel que le client l'écrit. */
  ask: string;
  /** Ce que l'agent fait, en une ligne, côté maison. */
  does: string;
  /** L'heure — pour rappeler que c'est rarement aux heures d'ouverture. */
  time: string;
};

/* Ordonnées chronologiquement : la section raconte une seule nuit, du service
   du soir au petit matin. */
export const handledRequests: Handled[] = [
  {
    id: "h1",
    ask: "Bonjour, quel est le code du wifi ?",
    does: "Répond instantanément. Ne vous dérange pas.",
    time: "19:47",
  },
  {
    id: "h2",
    ask: "Je dois annuler pour le 8, je récupère mes arrhes ?",
    does: "Applique vos conditions d'annulation, libère la chambre, prévient la réception.",
    time: "20:15",
  },
  {
    id: "h3",
    ask: "On peut garder la chambre jusqu'à 15h dimanche ?",
    does: "Vérifie le planning du ménage, accorde le late check-out et le facture.",
    time: "22:38",
  },
  {
    id: "h4",
    ask: "C'est possible de privatiser la salle pour un anniversaire de 60 ans ?",
    does: "Envoie la plaquette réception, collecte date et nombre de couverts, crée la fiche devis.",
    time: "23:02",
  },
  {
    id: "h5",
    ask: "Do you have parking? We arrive by car from Barcelona.",
    does: "Répond en anglais, indique le parking privé et le tarif, propose de réserver une place.",
    time: "01:04",
  },
  {
    id: "h6",
    ask: "Vous avez de la place pour un séminaire de 40 personnes en mars ?",
    does: "Qualifie la demande, propose deux dates, transmet au commercial avec le budget estimé.",
    time: "06:12",
  },
];
