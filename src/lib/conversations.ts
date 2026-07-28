/**
 * Scripts de conversation.
 *
 * Quatre activités différentes, pas une seule : le problème n'est pas
 * « l'hôtellerie », c'est « recevoir trop de demandes sur WhatsApp ». Le
 * visiteur choisit la sienne dans le hero et lit un échange qui lui parle —
 * c'est ce qui remplace un discours générique sur « tous les secteurs ».
 *
 * Chaque échange emploie le vocabulaire réel du métier (acompte, couverts,
 * skipper, chaise haute) : c'est ce que le visiteur vient vérifier.
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
  /** Libellé de l'onglet — l'activité, telle que le visiteur la nomme. */
  sector: string;
  /** Nom affiché en tête de fil — l'établissement, vu par le client. */
  venue: string;
  venueMeta: string;
  messages: Message[];
  /** Ce que Luma a noté à l'issue de l'échange. */
  outcome: { label: string; detail: string };
};

export const conversations: Conversation[] = [
  {
    id: "hotel",
    sector: "Hôtel",
    venue: "Domaine des Ormes",
    venueMeta: "en ligne",
    messages: [
      {
        id: "h1",
        from: "guest",
        text: "Bonsoir, il vous resterait une chambre pour demain soir ? Nous sommes deux, avec un chien.",
        time: "23:47",
        delayMs: 700,
      },
      {
        id: "h2",
        from: "agent",
        text: "Bonsoir ! Oui — il me reste la Chambre Jardin à 148 € pour demain, petit-déjeuner compris. Les chiens sont les bienvenus, sans supplément. Je vous la réserve ?",
        time: "23:47",
        delayMs: 900,
        typingMs: 1600,
      },
      {
        id: "h3",
        from: "guest",
        text: "Parfait, on la prend. On arrivera tard, vers 22h.",
        time: "23:49",
        delayMs: 2200,
      },
      {
        id: "h4",
        from: "agent",
        text: "C'est noté. Je vous envoie le lien pour les arrhes et je préviens l'équipe pour une arrivée tardive. À demain soir !",
        time: "23:49",
        delayMs: 800,
        typingMs: 1700,
      },
    ],
    outcome: {
      label: "Fiche client créée",
      detail: "Réservation #2314 · arrhes en attente · arrivée tardive",
    },
  },
  {
    id: "bateau",
    sector: "Location de bateau",
    venue: "Cap Horizon",
    venueMeta: "en ligne",
    messages: [
      {
        id: "b1",
        from: "guest",
        text: "Bonjour, votre bateau est libre le week-end du 14 ? On serait six.",
        time: "23:31",
        delayMs: 700,
      },
      {
        id: "b2",
        from: "agent",
        text: "Bonjour ! Le samedi 14 est libre. La journée est à 890 € avec le skipper, carburant en sus. Six personnes, c'est parfait : on va jusqu'à huit. Je vous bloque la date ?",
        time: "23:31",
        delayMs: 900,
        typingMs: 1600,
      },
      {
        id: "b3",
        from: "guest",
        text: "Oui le samedi. Il faut verser un acompte ?",
        time: "23:33",
        delayMs: 2000,
      },
      {
        id: "b4",
        from: "agent",
        text: "30 % à la réservation, le solde la veille. Je vous envoie le lien et le point de rendez-vous au port. À samedi !",
        time: "23:33",
        delayMs: 800,
        typingMs: 1700,
      },
    ],
    outcome: {
      label: "Fiche client créée",
      detail: "Sortie du 14 · 6 personnes · acompte en attente",
    },
  },
  {
    id: "reception",
    sector: "Salle de réception",
    venue: "Le Clos Sainte-Marie",
    venueMeta: "en ligne",
    messages: [
      {
        id: "r1",
        from: "guest",
        text: "Bonjour, on cherche une salle pour un mariage en juin, environ 90 personnes.",
        time: "22:19",
        delayMs: 700,
      },
      {
        id: "r2",
        from: "agent",
        text: "Bonjour ! En juin, il me reste les week-ends du 7 et du 21. Pour 90 couverts, ce serait la Grange : 2 400 € la location, traiteur libre. Je vous envoie la plaquette ?",
        time: "22:19",
        delayMs: 900,
        typingMs: 1800,
      },
      {
        id: "r3",
        from: "guest",
        text: "Oui volontiers. On peut visiter avant de se décider ?",
        time: "22:23",
        delayMs: 2100,
      },
      {
        id: "r4",
        from: "agent",
        text: "Bien sûr. Samedi 11h ou mardi 18h ? Je note vos coordonnées et je préviens Nadia, qui fait les visites.",
        time: "22:23",
        delayMs: 800,
        typingMs: 1700,
      },
    ],
    outcome: {
      label: "Devis créé",
      detail: "Mariage juin · 90 couverts · visite à programmer",
    },
  },
  {
    id: "restaurant",
    sector: "Restaurant",
    venue: "La Table du Port",
    venueMeta: "en ligne",
    messages: [
      {
        id: "t1",
        from: "guest",
        text: "Bonsoir, vous auriez une table pour 4 demain à 20h ? On vient avec un bébé.",
        time: "22:56",
        delayMs: 700,
      },
      {
        id: "t2",
        from: "agent",
        text: "Bonsoir ! Oui, une table à 20h demain pour 4, c'est noté. On vous prévoit une chaise haute et on vous installe en salle basse, c'est plus calme.",
        time: "22:56",
        delayMs: 900,
        typingMs: 1500,
      },
      {
        id: "t3",
        from: "guest",
        text: "Super, merci. Vous avez un menu enfant ?",
        time: "22:58",
        delayMs: 1900,
      },
      {
        id: "t4",
        from: "agent",
        text: "Oui, à 12 € : plat, dessert et sirop. Je le signale en cuisine. À demain !",
        time: "22:58",
        delayMs: 800,
        typingMs: 1500,
      },
    ],
    outcome: {
      label: "Réservation enregistrée",
      detail: "4 couverts · chaise haute · menu enfant signalé",
    },
  },
];

/**
 * Les demandes réelles que Luma traite, tous métiers confondus. C'est ici que
 * se voit le mieux que le problème n'a rien de sectoriel : ce sont les mêmes
 * questions, à des heures impossibles, dans toutes les activités.
 */
export type Handled = {
  id: string;
  /** Le message tel que le client l'écrit. */
  ask: string;
  /** Ce que Luma fait, en une ligne. */
  does: string;
  time: string;
};

export const handledRequests: Handled[] = [
  {
    id: "q1",
    ask: "Bonjour, quel est le code du wifi ?",
    does: "Répond tout de suite. Ne vous dérange pas.",
    time: "19:47",
  },
  {
    id: "q2",
    ask: "Je dois annuler pour le 8, je récupère mon acompte ?",
    does: "Applique vos conditions, libère la date, vous prévient.",
    time: "20:15",
  },
  {
    id: "q3",
    ask: "On peut rester une heure de plus dimanche ?",
    does: "Vérifie le planning, accorde le supplément et le facture.",
    time: "22:38",
  },
  {
    id: "q4",
    ask: "C'est possible de privatiser pour un anniversaire de 60 ans ?",
    does: "Envoie la plaquette, collecte date et nombre de personnes, crée le devis.",
    time: "23:02",
  },
  {
    id: "q5",
    ask: "Do you have parking? We arrive by car from Barcelona.",
    does: "Répond en anglais, donne le tarif, propose de réserver une place.",
    time: "01:04",
  },
  {
    id: "q6",
    ask: "Vous avez de la place pour un séminaire de 40 personnes en mars ?",
    does: "Qualifie la demande, propose deux dates, vous transmet le budget estimé.",
    time: "06:12",
  },
];
