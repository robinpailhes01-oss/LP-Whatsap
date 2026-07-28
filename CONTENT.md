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
contre vous au premier litige.

## 2. Formulaire — bloquant

`src/components/sections/Wake.tsx`

Le formulaire poste vers `NEXT_PUBLIC_FORM_ENDPOINT`. Tant que la variable
n'est pas définie, l'envoi affiche un état « non connecté » explicite (il ne
simule jamais un succès).

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT="https://…"   # Formspree, Make, n8n, route API interne…
```

L'adresse de repli en cas d'échec (`contact@luma-agence.fr`) est également à
confirmer.

**Le formulaire ne demande que deux choses : le prénom et le numéro WhatsApp.**
C'est cohérent avec ce que la page vend — le reste se demande dans le premier
message, exactement comme Luma le ferait. Si vous voulez requalifier davantage
(nom de l'établissement, type), ajoutez un bloc `<label>`/`<input>` dans
*Wake.tsx* : chaque champ ajouté se paie en demandes perdues.

## 3. VSL — bloquant

`src/lib/vsl.ts`

La section « La démonstration » (23h49) existe et est en attente de la vidéo.
Tant que `provider` vaut `null`, elle affiche un cadre d'attente explicite
plutôt qu'un lecteur cassé, et les chapitres sont désactivés.

```ts
export const vsl: VslConfig = {
  provider: "youtube",        // "youtube" | "vimeo" | "file"
  source: "dQw4w9WgXcQ",      // identifiant, ou URL du fichier si "file"
  poster: "/vsl-poster.jpg",  // image d'attente dans /public
  duration: "4 min",
  chapters: [ … ],            // horodatages réels de la vidéo
};
```

À caler une fois la vidéo montée :

- Les **chapitres** sont des placeholders. Leurs `at` (en secondes) et `label`
  doivent correspondre au montage réel — ils servent au saut au clic.
- La **durée** annoncée (`4 min`) et le titre « Quatre minutes… » dans
  *Vsl.tsx* doivent correspondre au montage.
- L'**image d'attente** : un arrêt sur image lisible, pas un écran noir.
- Les **sous-titres** : indispensables, une VSL se regarde majoritairement en
  son coupé. Sur YouTube/Vimeo ils se gèrent depuis la plateforme ; en
  `provider: "file"`, renseigner `captions` avec un fichier WebVTT.
- La promesse « aucune diapositive » n'engage que si la vidéo en est
  effectivement dépourvue.

Le lecteur n'est chargé qu'au clic : aucune requête ni cookie tiers avant que
le visiteur ne décide de regarder.

## 4. Engagements pris dans le texte

Ces phrases sont des promesses opposables. Chacune doit être vraie le jour de la
mise en ligne, ou être réécrite.

- « Nous vous écrivons sur WhatsApp sous 24 h ouvrées. » — *Wake.tsx*
- « Données hébergées dans l'Union européenne » et « ne servent jamais à
  entraîner de modèle » — *Faq.tsx*, *SiteFooter.tsx*
- « Suppression effective sous 30 jours » — *Faq.tsx*
- « Comptez une semaine » pour la mise en route — *Pricing.tsx*
- « Vous relisez chaque réponse avant qu'elle parte » — *Faq.tsx*,
  *HowItWorks.tsx* : suppose qu'un mode de validation manuelle existe vraiment.
- « Il se branche sur votre logiciel de réservation » — *Faq.tsx* : lister les
  intégrations réellement disponibles, ou adoucir la formulation.
- « Pas de carte bancaire » — *Wake.tsx* : doit être vrai au moment de l'essai.
- « Luma le dit dès le premier message » (annonce du caractère automatique) —
  *Faq.tsx* : à vérifier dans la configuration réelle de l'agent.

## 5. Exemples nommés

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

## 6. Présentation du fondateur — la photo manque

`src/lib/founder.ts`

Le texte est le vôtre : le yacht de 13 m près de Montpellier depuis 2021,
l'automatisation il y a deux ans, plus de réservations et plus de temps libre.
C'est la meilleure preuve de la page — vous n'avez pas construit un outil pour
les autres, vous avez résolu votre propre problème et vous vous en servez
depuis deux ans. Ne le réécrivez pas en argumentaire : sa force tient à ce
qu'il soit dit platement.

**Il manque la photo.** Déposer le fichier dans `/public` et renseigner `photo`.
Un vrai portrait, regard vers l'objectif, format 4/5, 800 px de large au
minimum. Une photo sur le bateau serait idéale : elle prouve l'histoire en même
temps qu'elle la raconte. Sans photo, la section affiche un cadre d'attente
explicite.

À vérifier aussi : « plus de réservations qu'avant » est votre constat. Si vous
avez un chiffre (+30 %, deux fois plus de demandes traitées), il vaut mieux que
l'adjectif.

## 7. Preuve sociale — absente volontairement

Aucun témoignage, logo ni chiffre de résultat n'a été inventé. Il manque à la
page, entre `Handled` et `Crm`, une section de preuve. À alimenter avec :

- 2 ou 3 établissements clients (nom, type, ville) avec accord écrit ;
- un chiffre mesuré chez l'un d'eux (délai de réponse avant/après, part de
  demandes traitées sans intervention humaine) ;
- une citation courte du gérant.

Sans preuve réelle, mieux vaut la section absente que remplie de faux.

## 8. Hypothèse du calculateur

`src/components/sections/CostOfSilence.tsx`

`MINUTES_PAR_DEMANDE = 4` sert à calculer les heures passées à répondre. Le
chiffre est affiché sous le résultat, donc honnête, mais c'est une hypothèse.
Si vous connaissez votre vraie moyenne, remplacez-la.

## 9. Mentions légales

Non rédigées. À ajouter avant diffusion : mentions légales, politique de
confidentialité (RGPD, l'agent traite des données personnelles de vos clients),
CGV/CGU couvrant la facturation à l'usage.
