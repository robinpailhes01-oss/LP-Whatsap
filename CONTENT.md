# Contenu à valider avant mise en ligne

La page est écrite avec du contenu **réaliste mais non vérifié**. Rien de ce qui
suit n'est un fait établi : ce sont des valeurs de travail, à confirmer ou à
remplacer par les vôtres. Tant que ce fichier n'est pas vidé, la page ne doit pas
être diffusée en publicité payante.

## 1. Tarif — bloquant

`src/components/sections/Pricing.tsx`

| Constante | Valeur actuelle | Statut |
|---|---|---|
| `PRICE_PER_CONVERSATION` | `0,40 €` | **Placeholder.** À remplacer par le tarif réel. |
| `CONVERSATIONS` | `214` | Volume d'exemple pour la facture type. À caler sur un établissement représentatif. |

La définition d'une « conversation traitée » affichée sous la facture doit
correspondre exactement à ce que vous facturez, sinon la promesse se retourne
contre vous au premier litige. Elle est reprise mot pour mot à l'article 2 des
CGV (`src/app/cgv/page.tsx`) : **si l'une change, l'autre change.**

### Ce qu'une conversation coûte réellement

Prix API Anthropic au 30 juillet 2026, par million de jetons :

| Modèle | Entrée | Sortie |
|---|---|---|
| Haiku 4.5 | 1,00 $ | 5,00 $ |
| Sonnet 5 | 3,00 $ (2,00 $ en tarif d'introduction jusqu'au 31/08/2026) | 15,00 $ (10,00 $) |
| Opus 5 | 5,00 $ | 25,00 $ |

Hypothèse de travail pour **une** conversation client : 6 réponses de l'agent,
une consigne d'établissement de 4 000 jetons (tarifs, disponibilités, règles,
ton) mise en cache, ~4 500 jetons d'historique non caché cumulés sur les 6
appels, ~800 jetons produits. Le cache se lit à 0,1× le prix d'entrée et
s'écrit à 1,25× ; on compte deux écritures, une conversation s'étalant sur plus
de cinq minutes.

| Modèle | Coût API d'une conversation |
|---|---|
| Haiku 4.5 | ≈ 0,021 $ — **2 centimes** |
| Sonnet 5 | ≈ 0,063 $ — **6 centimes** |
| Opus 5 | ≈ 0,105 $ — **10 centimes** |

Trois choses à en retenir :

1. **Le poste dominant n'est pas la réponse, c'est la consigne.** L'écriture du
   cache pèse à elle seule la moitié de la facture. Une consigne de 2 000 jetons
   au lieu de 4 000 divise le coût par deux — c'est le levier le plus rentable.
2. **Ce n'est pas le seul coût.** S'y ajoutent les frais de messages de la
   plateforme WhatsApp Business (Meta facture les messages sortants hors
   fenêtre de service de 24 h — barème à vérifier chez Meta pour la France),
   l'hébergement, et votre temps d'accompagnement. Le coût API n'est qu'un
   plancher.
3. **Le coût ne fixe pas le prix.** À 0,40 €, la marge sur le seul poste API va
   de 4× (Opus) à 20× (Haiku), ce qui est confortable. Mais l'argument de vente
   n'est pas le coût de revient : une réservation récupérée vaut plusieurs
   centaines d'euros au gérant. Le prix reste **votre décision commerciale** —
   `PRICE_PER_CONVERSATION` n'a pas été modifié.

## 2. Formulaire — bloquant

**En l'état, aucune demande ne vous parvient.** Le formulaire est fonctionnel et
testé, mais il n'a pas encore de destination : il affiche alors un message
explicite plutôt que de faire croire à un envoi réussi.

Le formulaire poste vers `/api/lead`, une route serveur (`src/app/api/lead/route.ts`).
La destination et les clés restent côté serveur — elles ne sont jamais visibles
dans le navigateur.

### Ce que le formulaire demande

Trois lignes : le prénom, **le canal préféré (WhatsApp ou e-mail)**, et la
coordonnée correspondante. On ne demande jamais les deux — seulement celle qu'on
va utiliser.

### Option A — un webhook (le plus simple)

Pour Make, n8n, Zapier, ou n'importe quel service qui reçoit du JSON.

```bash
LEAD_WEBHOOK_URL="https://hook.eu2.make.com/…"
```

Vous recevez exactement ceci :

```json
{
  "name": "Camille",
  "contact": "whatsapp",
  "phone": "06 12 34 56 78",
  "email": "",
  "waLink": "https://wa.me/33612345678",
  "receivedAt": "mercredi 29 juillet 2026 à 16:30",
  "source": "landing-luma"
}
```

`waLink` est un lien cliquable : depuis votre téléphone, un appui ouvre la
conversation WhatsApp avec la personne. Il est vide si le canal choisi est
l'e-mail, ou si le numéro n'a pas pu être reconnu.

### Option B — un e-mail direct, via Resend

```bash
RESEND_API_KEY="re_…"
LEAD_EMAIL_TO="vous@luma-agence.fr"      # plusieurs adresses : séparez par des virgules
LEAD_EMAIL_FROM="luma@votre-domaine.fr"  # domaine vérifié chez Resend
```

L'objet indique déjà le canal choisi : `Essai gratuit — Camille (WhatsApp)`.
Le corps contient le prénom, la préférence, la coordonnée, le lien `wa.me` et
la date. Si la personne a choisi l'e-mail, le `reply-to` est son adresse : vous
répondez directement depuis votre boîte.

Le webhook a la priorité si les deux sont renseignés.

### Où mettre ces variables

Sur Vercel : *Settings → Environment Variables*, puis redéployer. En local :
un fichier `.env.local` à la racine (il n'est pas versionné).

### Protections en place

- **Champ-piège** invisible : un robot qui le remplit reçoit un faux succès et
  rien n'est transmis.
- **Limite de débit** : 5 demandes par IP toutes les 10 minutes.
- **Validation côté serveur** : prénom d'au moins 2 caractères, numéro d'au
  moins 9 chiffres, adresse e-mail au bon format.

### Vérifié

Testé de bout en bout : état non configuré (503 + message franc), prénom
manquant, e-mail invalide, robot, envoi WhatsApp et envoi e-mail — les deux
arrivent bien à destination avec le bon `waLink`.

L'adresse de repli affichée en cas d'échec (`contact@luma-agence.fr`) est à
confirmer.

## 3. Engagements pris dans le texte

Ces phrases sont des promesses opposables. Chacune doit être vraie le jour de la
mise en ligne, ou être réécrite.

- « Nous vous écrivons sur WhatsApp sous 24 h ouvrées. » — *Wake.tsx*
- « Données hébergées dans l'Union européenne » et « ne servent jamais à
  entraîner de modèle » — *Faq.tsx*. Retirée du pied de page : voir le point ⚠
  de la section 8, elle n'est pas vérifiée en l'état.
- « Suppression effective sous 30 jours » — *Faq.tsx*
- « Comptez une semaine » pour la mise en route — *Pricing.tsx*
- « Vous relisez chaque réponse avant qu'elle parte » — *Faq.tsx*,
  *HowItWorks.tsx* : suppose qu'un mode de validation manuelle existe vraiment.
- « Il se branche sur votre logiciel de réservation » — *Faq.tsx* : lister les
  intégrations réellement disponibles, ou adoucir la formulation.
- « Pas de carte bancaire » — *Wake.tsx* : doit être vrai au moment de l'essai.
- « Luma le dit dès le premier message » (annonce du caractère automatique) —
  *Faq.tsx* : à vérifier dans la configuration réelle de l'agent.

## 4. Exemples nommés

Ce sont des noms inventés, pas des clients.

- **Deux échanges RÉELS d'Harmonie Yacht**, repris tels quels, emojis compris.
  Le premier est dans le sélecteur du hero, onglet « Location de bateau » : il
  traite une question imprévue (la météo) et se termine par un lien de
  réservation pré-rempli. Le second est un extrait placé sous la promesse
  « Luma parle comme vous », dans la section « C'est quoi, exactement » : il
  montre le ton — « Bonjour 😊 », réponse dans la minute — et le fait que Luma
  pose des questions en retour au lieu de dérouler un catalogue.
- **Aucun client n'est identifiable.** Le fil du hero affiche le nom de
  l'établissement, tel que le client le voit, jamais le sien. L'extrait
  n'affiche aucune identité. Le numéro de téléphone visible sur la capture
  d'origine du second échange n'a pas été repris.
- **Domaine des Ormes**, **Le Clos Sainte-Marie**, **La Table du Port** — les
  trois autres exemples sont écrits, et signalés comme tels
  (« Exemple d'échange »). À remplacer dès que vous aurez de vrais échanges chez
  un client de chacun de ces métiers.
- **Camille Rousseau** — cliente de la fiche du carnet, inventée.
- Le détail de la conversation (Chambre Jardin, 148 €, arrhes 30 %) est
  cohérent mais fictif. La légende sous le hero dit « Exemple d'échange » et non
  « conversation réelle » : c'est exact en l'état. Si vous la remplacez par un
  vrai échange anonymisé, vous pourrez alors écrire « conversation réelle ».
- Le bilan chiffré d'une nuit type a été retiré : c'était un ordre de grandeur
  plausible, pas une mesure. À réintroduire seulement avec les chiffres réels
  d'un établissement.

## 5. Présentation du fondateur

`src/lib/founder.ts`

Le texte est le vôtre : le yacht de 13 m près de Montpellier depuis 2021,
l'automatisation il y a deux ans, plus de réservations et plus de temps libre.
C'est la meilleure preuve de la page — vous n'avez pas construit un outil pour
les autres, vous avez résolu votre propre problème et vous vous en servez
depuis deux ans. Ne le réécrivez pas en argumentaire : sa force tient à ce
qu'il soit dit platement.

La photo est en place (`/public/robin-pailhes.jpg`), servie redimensionnée et
compressée par `next/image`. Le cadre est en 4/5 : le portrait carré est rogné
sur les côtés, le visage étant centré il n'y perd rien.

Reste à vérifier : « plus de réservations qu'avant » est votre constat. Si vous
avez un chiffre (+30 %, deux fois plus de demandes traitées), il vaudra toujours
mieux que l'adjectif.

## 6. Preuve sociale — absente volontairement

Aucun témoignage, logo ni chiffre de résultat n'a été inventé. Il manque à la
page, entre `Handled` et `Crm`, une section de preuve. À alimenter avec :

- 2 ou 3 établissements clients (nom, type, ville) avec accord écrit ;
- un chiffre mesuré chez l'un d'eux (délai de réponse avant/après, part de
  demandes traitées sans intervention humaine) ;
- une citation courte du gérant.

Sans preuve réelle, mieux vaut la section absente que remplie de faux.

## 7. Hypothèse du calculateur

`src/components/sections/CostOfSilence.tsx`

`MINUTES_PAR_DEMANDE = 4` sert à calculer les heures passées à répondre. Le
chiffre est affiché sous le résultat, donc honnête, mais c'est une hypothèse.
Si vous connaissez votre vraie moyenne, remplacez-la.

## 8. Pages légales — bloquant

Trois pages sont en place, liées depuis le pied de page :

| Page | Fichier |
|---|---|
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` |
| `/confidentialite` | `src/app/confidentialite/page.tsx` |
| `/cgv` | `src/app/cgv/page.tsx` |

**Ce n'est pas un conseil juridique.** C'est une base rédigée à partir des
obligations courantes (LCEN art. 6-III, RGPD, Code de commerce art. L441-10 et
D441-5 pour les pénalités de retard entre professionnels). Elle doit être relue
par un professionnel du droit avant diffusion.

### Les repères jaunes

Chaque information que vous seul possédez est marquée en jaune sur la page :
« à compléter — raison sociale », « à compléter — SIREN », etc. **Tant qu'il en
reste un, la page n'est pas publiable** — c'est voulu, on ne peut pas les
oublier. Le composant est `ARemplir` dans `src/components/Legal.tsx`.

À réunir : raison sociale, forme juridique, capital, adresse du siège, RCS et
SIREN, TVA intracommunautaire, téléphone, fonction exacte du directeur de la
publication, coordonnées de l'hébergeur, durée de l'essai gratuit, tarif HT,
préavis de révision des prix, ressort du tribunal compétent.

Pour l'hébergeur, sur un déploiement Vercel : Vercel Inc., 340 S Lemon Ave
#4133, Walnut, CA 91789, États-Unis. À confirmer, ainsi que la région de
déploiement, au moment de la mise en ligne.

### ⚠ Deux points à trancher, pas seulement à remplir

**1. « Données conservées en Europe ».** La phrase figurait en pied de page et
figure toujours dans la FAQ. En l'état, elle n'est pas vérifiée : l'API du
modèle de langage, le service d'envoi d'e-mails et l'hébergement sont
susceptibles d'être hors Union européenne. Elle a été retirée du pied de page.
Deux issues possibles, aucune autre :

- rendre la phrase vraie — région européenne partout, ce qui se vérifie
  fournisseur par fournisseur ; ou
- la réécrire dans la FAQ pour dire ce qui est réellement le cas, l'article
  « Où sont les données » de la politique de confidentialité fournissant le
  détail (transferts encadrés par les clauses contractuelles types).

Une promesse de localisation fausse est le genre de mention qui coûte cher.

**2. L'accord de sous-traitance (art. 28 RGPD).** La politique de
confidentialité et les CGV affirment toutes deux qu'un accord de sous-traitance
est signé au démarrage avec chaque client. Il n'existe pas encore. Il doit être
rédigé avant la première mise en service, sinon la mention est fausse et
l'obligation reste, elle, bien réelle.

### Ce qui est vrai et vérifié

- **Aucun cookie, aucune mesure d'audience.** Vérifié dans le code : ni script
  d'analyse, ni pixel, ni bandeau. La politique de confidentialité peut donc
  l'affirmer sans réserve. Si vous ajoutez un jour un outil de mesure, cette
  phrase doit changer *et* un bandeau de consentement devient obligatoire.
- **L'adresse IP n'est pas stockée durablement** : elle ne sert qu'à la limite
  de débit du formulaire, en mémoire, et disparaît au redémarrage du serveur.
- **Anthropic n'entraîne pas ses modèles sur les contenus envoyés par l'API.**
  La mention « ne servent jamais à entraîner un programme » est donc exacte pour
  ce maillon. À vérifier pour les autres prestataires que vous ajouterez.
- **Aucun client n'est identifiable** dans les captures reprises sur la page
  d'accueil, ce que les mentions légales affirment.
