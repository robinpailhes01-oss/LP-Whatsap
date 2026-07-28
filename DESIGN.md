# Luma — Agent WhatsApp & carnet de clients · Design Spec

Landing page (brand mode). **Un seul objectif : obtenir une demande d'essai
gratuit.** Chaque section lève une objection précise et ramène au même bouton.

---

## 1. Brief stratégique

**UVP**
> Luma permet à toute activité qui reçoit beaucoup de demandes sur WhatsApp de
> ne plus en perdre et d'arrêter d'y passer ses soirées, en y répondant à sa
> place jour et nuit avec ses vrais tarifs, et en notant chaque demande dans un
> carnet de clients — installation gratuite, facturation à l'usage uniquement.

**Le cadrage est le problème, pas le secteur.** Une première version ne parlait
qu'aux hôtels. C'était trop étroit — et contradictoire avec l'histoire du
fondateur, qui loue un bateau. La page s'adresse désormais à *toute activité
noyée sous les demandes WhatsApp* : hôtels, locations, salles de réception,
restaurants, et le reste.

Élargir un message le vide, en général. Ici on l'évite par un dispositif plutôt
que par du vocabulaire : le visiteur **choisit son activité dans le hero** et lit
un échange écrit dans son métier à lui. Quatre cas concrets valent mieux qu'une
formule qui prétend couvrir tout le monde.

**Audience — psychographie**
- Gérants de 40 à 55 ans. Ils tiennent une activité, pas un logiciel.
- Deux douleurs, pas une : les demandes perdues **et** le temps passé à
  répondre. La seconde est souvent celle qui décide.
- **Pas à l'aise avec l'informatique, et encore moins avec l'IA.** C'est le
  fait central du projet : il commande le vocabulaire, la taille du texte, le
  contraste et le nombre de champs du formulaire.
- Ont *déjà* perdu une réservation faute de réponse à temps, et le savent.
- Échaudés par des logiciels vendus 2 000 € de mise en place qu'ils n'ont
  jamais rentabilisés.
- Peur n°1 : pas que ça ne marche pas, mais que ça leur fasse **honte devant un
  client**.
- Deuxième peur, rarement dite : que ça remplace leur équipe.
- Font confiance à un chiffre concret et à une conversation qu'ils peuvent
  lire, jamais à un argumentaire.

**Piliers** (chacun est un test pour une décision)
1. **La réponse n'attend jamais** — la vitesse *est* le produit.
2. **Votre voix, pas celle d'un robot.**
3. **Zéro risque à l'entrée** — 0 € d'installation, on paie ce qu'on utilise.
4. **Tout est noté** — chaque conversation devient une fiche.
5. **Rien à apprendre** — ni pour vous, ni pour vos clients.

**Archetype : Caregiver + Magician.** L'hospitalité tenue en tension avec
l'instantanéité. La chaleur d'un concierge, la disponibilité d'une machine.

**Stand against**
- Le look SaaS templaté : bleu-violet, dégradé, grille de trois cartes à icônes.
- Le jargon : « leads », « pipeline », « conversion », « agent conversationnel ».
- Les frais de mise en place.
- La réponse robotique qui embarrasse l'établissement devant son client.

### Brief → décisions

| Input stratégique | → Décision |
|---|---|
| Lecteur 40-55 ans, peu à l'aise | → Corps de texte à **17 px**, texte foncé sur fond clair, phrases courtes, aucun terme technique. |
| Peur d'avoir honte devant un client | → On expose de vraies réponses, en entier, lisibles. Aucune capture floutée. |
| Peur que ça remplace l'équipe | → Question traitée en tête de FAQ, réponse franche : non. |
| Pilier « zéro risque » | → Le prix est une section entière, formulée à la négative : ce qu'on ne paie **pas**. |
| Objectif unique = essai gratuit | → Un seul libellé de CTA sur toute la page : « Essayer gratuitement ». |
| Stand-against « jargon » | → Le mot « CRM » est remplacé par « carnet de clients ». |
| Cadrage par le problème, pas le secteur | → Sélecteur d'activité dans le hero : quatre conversations réelles au lieu d'une formule générique. |
| Douleur « je passe mes soirées à répondre » | → Le calculateur affiche deux résultats : l'argent perdu **et** les heures passées. |

---

## 2. Lisibilité — la contrainte qui prime sur l'esthétique

Deux règles non négociables, dérivées de l'âge de l'audience et de son usage
(téléphone, souvent en extérieur) :

**1. Le texte de lecture est foncé sur fond clair.**
Entre 40 et 55 ans, la sensibilité aux contrastes baisse et le texte clair sur
fond sombre provoque de la diffusion lumineuse (*halation*) qui fatigue et
ralentit la lecture. Le fond sombre est donc réservé aux **deux premières
sections** — le hero et la vidéo — où l'on regarde plus qu'on ne lit. Tout le
corps de la page est en encre sur papier.

Ce n'est pas qu'une affaire d'yeux : pour quelqu'un qui n'est pas à l'aise avec
l'IA, une page sombre dit « tech, startup, pas pour moi ». Une page claire dit
« on n'a rien à cacher ».

**2. Le corps de texte ne descend jamais sous 17 px.**
C'est le gain de lisibilité le plus important du projet, devant la couleur.
Le pas de 13 px est réservé aux mentions et aux horodatages.

Conséquences appliquées partout : boutons hauts (56 px), champs de formulaire
larges, curseurs à piste épaisse réglables au pouce, contraste du focus clavier
renforcé.

---

## 3. Direction esthétique

> **« La réception d'un hôtel à 23h47 » + « la grammaire native de WhatsApp »**

Le premier ancrage vient du monde matériel du sujet — le comptoir de nuit, la
lampe de réception, le laiton. Le second vient de l'interface elle-même :
bulles, accusés de lecture, horodatages.

La scène de nuit ouvre la page parce que c'est le moment où Luma a de la valeur,
quand personne n'est au comptoir. Elle dure deux sections, puis le jour se lève
et la page devient lisible.

**Anti-slop — écarté délibérément**
- Fond crème + serif contrastée + accent terracotta → défaut IA n°1.
- Noir + accent vert acide → défaut IA n°2.
- Navy + bleu électrique → déjà l'identité de luma-agence.fr.
- Hero centré + blob en dégradé, grille de 3 cartes à icônes, carrousel de
  témoignages, tableau de prix à trois colonnes.

---

## 4. Tokens

### Couleur

| Token | Hex | Rôle |
|---|---|---|
| `night` | `#0F1714` | Scène de nuit — hero et vidéo **uniquement** |
| `night-alt` | `#18231E` | Surfaces surélevées sur la nuit |
| `paper` | `#F7F4EC` | Surface de tout le corps de la page |
| `paper-alt` | `#EFEADE` | Cartes et encadrés sur papier |
| `brass` | `#C9A227` | **La maison.** Sur papier : fond uniquement (bouton, soulignage) |
| `brass-deep` | `#7A5F10` | Le laiton quand il doit être du texte sur papier |
| `signal` / `signal-deep` | `#3FD98A` / `#1A7A4C` | **L'agent en action.** Jamais décoratif |
| `ink` / `ink-muted` | `#F4F2EC` / `#AAB7AF` | Texte sur nuit |
| `ink-paper` / `ink-paper-muted` | `#121815` / `#46534B` | Texte sur papier |

**Règles d'encodage**
- Le laiton désigne l'établissement, le vert désigne l'agent en action. Jamais
  de vert décoratif : s'il est vert, c'est que ça vit.
- **Sur papier, le laiton n'est jamais une couleur de texte** — il tomberait
  sous le seuil de contraste. L'emphase se fait avec `.mark-brass` : le mot
  reste en encre pleine, souligné de laiton. On gagne l'emphase sans perdre un
  point de lisibilité.
- Le vert n'est pas le `#25D366` de WhatsApp : évoquer sans copier.

### Type

- **Display — Fraunces** (axes `SOFT`/`WONK`). Douce en petit corps, affirmée en
  grand. Ni Cormorant (fonte maison), ni Playfair (partout).
- **Body — Inter Tight.** Grotesque de labeur, très lisible.
- **Utility — JetBrains Mono.** Horodatages, prix, compteurs.

Échelle : `13 / 17 / 19 / 22 / 26 / 32 / 40 / 50 / 62 px`.
`17 px` est le corps de texte et le plancher absolu.

### Espacement · rayons · ombres · motion

- Base 8 px : `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- Rayons, philosophie unique « conversationnelle » : bulle 18, carte 14,
  petit 8, pilule 999. Aucun coin vif.
- Sur nuit : aucune ombre, bordures seules + une lueur radiale (la lampe).
  Sur papier : ombre ambiante douce, réservée aux surfaces réellement surélevées.
- `120 ms` micro · `240 ms` transitions · `500 ms` révélations.
  Easing `cubic-bezier(0.16, 1, 0.3, 1)`.
  Ressort d'arrivée d'un message : `stiffness 260, damping 22` — une bulle doit
  *atterrir*, pas glisser.
- `prefers-reduced-motion` : la conversation s'affiche complète et statique.
  Aucun contenu n'est réservé à l'animation.

---

## 5. Signature

**La conversation vivante du hero.** Un échange réel se joue : le client écrit à
23h47, l'indicateur « en train d'écrire… » apparaît, Luma répond, les doubles
coches passent au vert, et l'échange produit une fiche.

Toute l'audace est dépensée là. Le reste de la page reste sobre : filets,
beaucoup de vide, un seul geste d'emphase (le soulignage laiton).

**Ce qui a été retiré.** Une première version faisait avancer une horloge dans
l'en-tête et horodatait chaque section (« 06:40 — Le modèle »). C'était un
ornement : ces heures n'informaient de rien, et l'audience visée ne les
remarquerait même pas. Les heures ne subsistent que là où elles sont vraies —
dans la conversation, sur les demandes reçues, dans le bilan de la nuit. L'en-tête
porte désormais une vraie navigation.

---

## 6. Structure

**L'ordre suit la façon dont on découvre quelque chose, pas la façon dont on le
vend : comprendre, puis voir, puis se décider.** Personne ne se laisse
convaincre par quelque chose qu'il n'a pas compris — aucun argument n'arrive
avant l'explication.

| # | Section | Surface | Ce qu'elle règle |
|---|---|---|---|
| 1 | Hero — la promesse en une phrase + conversation en direct | nuit | « C'est quoi ? » |
| 2 | C'est quoi, exactement — définition, pour qui, 3 étapes | papier | « C'est pour moi ? C'est compliqué ? » |
| 3 | La vidéo | papier | « Montrez-moi. » |
| 4 | Ce que ça vous coûte — calculateur | papier | « Ça me concerne vraiment ? » |
| 5 | Les demandes qu'il traite | papier | « Ça saurait répondre à ça, chez moi ? » |
| 6 | Votre carnet de clients | papier | « Et après ? » |
| 7 | Le prix | papier | « Combien, et quel risque ? » |
| 8 | Les questions qu'on nous pose | papier | Les six dernières objections |
| 9 | Qui est derrière Luma | papier | « À qui j'ai affaire ? » |
| 10 | L'essai gratuit — formulaire | papier | L'action |

Le hero est désormais la **seule** section sur fond sombre. Faire alterner
sombre et clair au fil du scroll faisait clignoter l'en-tête sans rien apporter.

Trois points de conversion : le hero, la sortie du calculateur (le visiteur
vient de chiffrer sa perte, c'est le moment), et la section prix. Tous mènent au
même formulaire, sous le même libellé.

La présentation du fondateur est placée juste avant le formulaire, et pas en
pied de page : on rencontre la personne, puis on lui écrit. C'est le seul visage
de toute la page — aucune autre photo n'y figure — et c'est ce qui lui donne son
poids.

**Densité de texte.** Chaque section tient en un titre, un paragraphe court et
un objet visuel (conversation, curseurs, liste, fiche, facture, photo). Quand
une section demandait deux paragraphes, c'est qu'elle en disait trop.

**Montrer plutôt que dire.** Partout où c'est possible, un objet remplace une
explication : la liste d'activités répond à « est-ce pour moi ? » mieux qu'une
phrase, la fiche du carnet remplace trois paragraphes sur le CRM, la facture
remplace un discours sur le modèle économique, et la conversation remplace toute
description du produit.

**Aucune formule à décoder.** Le titre du hero disait « Il est 23h47. Un client
vous écrit. Vous dormez. » — évocateur, mais il demandait au lecteur de déduire
ce qu'est le produit. Il dit maintenant ce que c'est : « Vos clients vous
écrivent sur WhatsApp. Luma leur répond à votre place. » Le détail de 23h47
reste, en sous-titre, où il illustre au lieu de faire deviner.

---

## 7. À substituer avant mise en ligne

Voir `CONTENT.md` : tarif à la conversation, endpoint du formulaire, contenu de
la vidéo, promesses opposables, preuve sociale (absente volontairement, aucun
témoignage n'a été inventé).
