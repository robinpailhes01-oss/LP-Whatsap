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

L'adresse de repli en cas d'échec (`contact@luma-agence.fr`) est également à confirmer.

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
- « 3 secondes en moyenne » pour le temps de réponse — *HowItWorks.tsx*
- « Vous pouvez relire chaque réponse avant qu'elle parte » — *Faq.tsx* : suppose
  qu'un mode de validation manuelle existe réellement.
- « Il se branche sur votre PMS / channel manager » — *Faq.tsx* : lister les
  intégrations réellement disponibles, ou adoucir la formulation.

## 5. Exemples nommés

Ce sont des noms inventés, pas des clients.

- **Domaine des Ormes** — établissement de la conversation du hero.
- **Camille Rousseau** — cliente de la fiche CRM.
- Le détail de la conversation (Chambre Jardin, 148 €, arrhes 30 %) est
  cohérent mais fictif. La mention « Conversation réelle, rejouée à
  l'identique. » sous le hero (*Hero.tsx*) doit être **retirée** ou devenir vraie
  en la remplaçant par un échange authentique anonymisé.

## 6. Preuve sociale — absente volontairement

Aucun témoignage, logo ni chiffre de résultat n'a été inventé. Il manque à la
page, entre `Handled` et `Crm`, une section de preuve. À alimenter avec :

- 2 ou 3 établissements clients (nom, type, ville) avec accord écrit ;
- un chiffre mesuré chez l'un d'eux (délai de réponse avant/après, part de
  demandes traitées sans intervention humaine) ;
- une citation courte du gérant.

Sans preuve réelle, mieux vaut la section absente que remplie de faux.

## 7. Mentions légales

Non rédigées. À ajouter avant diffusion : mentions légales, politique de
confidentialité (RGPD, l'agent traite des données personnelles de vos clients),
CGV/CGU couvrant la facturation à l'usage.
