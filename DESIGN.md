# Levo — Agent WhatsApp & CRM hôtellerie · Design Spec

Landing page (brand mode). Un seul job : faire tester l'agent sur son propre établissement.

---

## 1. Brief stratégique

**UVP**
> Levo permet aux hôtels, hébergements et lieux de réception de ne plus perdre de
> réservations à cause d'une réponse trop lente, en leur donnant un agent WhatsApp
> qui répond dans leur ton 24h/24 et classe chaque échange dans un CRM fait pour
> leur métier — installation gratuite, facturation à l'usage uniquement.

**Audience (psychographie, pas démographie)**
- Des gérants qui ont *déjà* perdu une réservation parce que personne n'a répondu à temps, et qui le savent.
- Échaudés par des logiciels vendus avec 2 000 € de mise en place et un engagement 12 mois qu'ils n'ont jamais rentabilisé.
- Méfiants envers les « chatbots » : ils en ont vu frustrer leurs clients. Leur peur n°1 n'est pas que ça ne marche pas — c'est que ça leur fasse honte devant un client.
- Jugent tout à une seule aune : est-ce que l'accueil reste chaleureux ?
- Font confiance à un chiffre concret et à une conversation réelle, jamais à un argumentaire.

**Value pillars** (chacun est un test pour une décision visuelle)
1. **La réponse n'attend jamais** — la vitesse *est* le produit.
2. **Votre voix, pas celle d'un robot** — l'agent parle comme la maison.
3. **Zéro risque à l'entrée** — 0 € d'installation, on paie ce qu'on utilise.
4. **Tout est classé** — chaque conversation devient une fiche exploitable.
5. **Fait pour l'hôtellerie** — pas un chatbot générique reconfiguré.

**Archetype pair : Caregiver + Magician**
L'hospitalité (prendre soin, accueillir) tenue en tension avec l'instantanéité
technologique (ça répond à 3 h du matin, tout seul). C'est exactement la promesse :
la chaleur d'un concierge, la disponibilité d'une machine.

**Stand against**
- Le look SaaS templaté : bleu-violet, dégradé, grille de trois cartes à icônes.
- Les frais de mise en place.
- L'« IA » posée en gadget par-dessus un produit qui ne la mérite pas.
- La réponse robotique qui embarrasse l'établissement devant son client.

### Brief → décisions de design

| Input stratégique | → Décision |
|---|---|
| Pilier « la réponse n'attend jamais » | → Une vraie conversation qui se joue en direct dans le hero, horodatée à la seconde. La vitesse se **montre**, elle ne s'écrit pas. |
| Psychographie « peur d'avoir honte devant un client » | → On expose de vraies réponses de l'agent, en entier, lisibles. Aucune capture floutée, aucun mockup décoratif. |
| Pilier « zéro risque » | → Le prix est une section à part entière, pas une mention. Formulation à la négative : ce qu'on ne paie **pas**. |
| Stand-against « look SaaS templaté » | → Registre nocturne vert-profond + laiton. Ni navy/bleu électrique (déjà luma-agence.fr), ni crème/terracotta, ni noir + vert acide. |
| Archetype Caregiver + Magician | → Serif chaleureuse à axe optique (Fraunces) + grotesque de labeur ; motion douce et accueillante, un seul moment de magie. |
| Pilier « fait pour l'hôtellerie » | → Tout le contenu d'exemple est du vrai vocabulaire métier : late check-out, séminaire 40 couverts, caution, arrhes. |

---

## 2. Direction esthétique

> **« La réception d'un hôtel à 23h47 » + « la grammaire native de WhatsApp »**

Deux ancrages qui forcent la triangulation. Le premier vient du monde matériel du
sujet — le comptoir de nuit, la lampe de réception, le laiton du porte-clés, le
registre. Le second vient de l'interface elle-même : bulles, accusés de lecture,
« en train d'écrire… », horodatages.

**Pourquoi la page est sombre** : pas parce que « sombre = tech ». Parce que la page
*se passe la nuit*. C'est le moment où l'agent a de la valeur — quand personne n'est
au comptoir. La page s'ouvre à 23h47 et **se lève progressivement** au scroll pour
finir à 07h12 sur le réveil du gérant : « 6 demandes traitées ». Le fond qui se
réchauffe n'est pas un effet, c'est le récit.

**Anti-slop — écarté délibérément**
- Fond crème + serif contrastée + accent terracotta → défaut IA n°1.
- Noir + accent vert acide → défaut IA n°2.
- Navy + bleu électrique → déjà l'identité de luma-agence.fr, on s'en distingue.
- Hero centré + blob en dégradé, grille de 3 cartes à icônes, carrousel de témoignages.

---

## 3. Tokens

### Couleur — 6 valeurs, rôles stricts

| Token | Hex | Rôle |
|---|---|---|
| `--night` | `#0F1714` | Surface dominante — vert-noir chaud, hall d'hôtel la nuit |
| `--night-alt` | `#17211D` | Surfaces surélevées : cartes, bulles entrantes |
| `--dawn` | `#F0EDE4` | Surface claire des sections « jour » (CRM, prix, réveil) |
| `--brass` | `#C9A227` | **La maison.** CTA, mots accentués, filet de marque |
| `--signal` | `#3FD98A` | **L'agent est vivant.** Uniquement : pastille en ligne, accusés de lecture, délais de réponse, activité |
| `--text` / `--text-muted` | `#F2F0EA` / `#94A39B` | Texte sur nuit (sur `--dawn` : `#101A16` / `#5A6B62`) |

**Règle d'encodage** — le laiton désigne toujours l'établissement, le vert désigne
toujours l'agent en action. Jamais de vert décoratif : s'il est vert, c'est que ça
vit. Cette règle rend la couleur porteuse d'information.
Le vert n'est **pas** le `#25D366` de WhatsApp : plus clair et légèrement désaturé,
pour évoquer sans copier.

### Type — trois fontes, choisies

- **Display — Fraunces** (variable, axes `SOFT`/`WONK`). Serif chaleureuse à axe
  optique : douce en petit corps (Caregiver), affirmée en grand corps (Magician).
  Ni Cormorant (fonte maison, déjà prise), ni Playfair (partout).
- **Body — Inter Tight.** Grotesque de labeur, légèrement condensée, très lisible
  en petit corps.
- **Utility — JetBrains Mono.** Horodatages, horloge, prix, compteurs d'usage.
  C'est le mono sur les timestamps qui fait *exister* la conversation.

Échelle (tierce majeure, 1.25) : `12 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 61 / 76px`

### Espacement
Base 8px : `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192`

### Rayons — philosophie unique « conversationnelle »
`--r-bubble: 18px` · `--r-card: 14px` · `--r-sm: 8px` · `--r-pill: 999px`
Pas de coins vifs : tout le vocabulaire de la page vient de la bulle de message.

### Ombres
Sur nuit : **aucune ombre**, uniquement des bordures `1px` à faible opacité + une
seule lueur radiale chaude derrière le hero (la lampe de réception).
Sur `--dawn` : ombre ambiante douce, réservée aux surfaces réellement surélevées.

### Motion
`120ms` micro-feedback · `240ms` transitions · `500ms` révélations de section.
Easing standard `cubic-bezier(0.16, 1, 0.3, 1)`.
Ressort dédié à l'arrivée d'un message : `stiffness 260, damping 22` — une bulle
doit *atterrir*, pas glisser.
`prefers-reduced-motion` : la conversation s'affiche complète et statique, l'horloge
se fige sur l'heure finale. Aucun contenu n'est réservé à l'animation.

---

## 4. Signature

**La conversation vivante et l'heure qui avance.**

Dans le hero, un vrai échange WhatsApp se joue : le client écrit à 23h47, l'indicateur
« en train d'écrire… » apparaît, l'agent répond en 4 secondes, les doubles coches
passent au vert. En haut de page, une horloge en mono affiche l'heure de la scène.

Au scroll, cette horloge avance — 23h47 → 02h13 → 06h04 → 07h12 — et la page se
réchauffe du vert-noir vers le jour. Le dernier écran est le réveil du gérant.

Toute l'audace est dépensée là. Le reste de la page reste sobre : filets, mono,
beaucoup de vide.

---

## 5. Structure

| # | Section | Heure | Surface |
|---|---|---|---|
| 1 | Hero — la conversation en direct | 23h47 | nuit |
| 2 | Le coût du silence — le problème chiffré | 23h51 | nuit |
| 3 | Comment ça marche — 3 moments d'une vraie séquence | 02h13 | nuit |
| 4 | Ce que l'agent sait traiter — vrais messages métier | 04h30 | nuit → transition |
| 5 | Le CRM — la demande devient une fiche | 06h04 | aube |
| 6 | Le modèle : 0 € d'installation | 06h40 | jour |
| 7 | Objections / FAQ | 06h55 | jour |
| 8 | Le réveil + CTA final | 07h12 | jour |

La numérotation par heures est justifiée : c'est une séquence réelle, l'ordre porte
de l'information (une nuit de travail de l'agent). Ce n'est pas un `01 / 02 / 03`
décoratif.

---

## 6. À substituer avant mise en ligne

Les éléments ci-dessous sont des **placeholders réalistes**, pas des faits vérifiés.
Ils sont marqués dans le code par `data-placeholder` et listés dans `CONTENT.md`.

- Chiffres de performance (taux de conversion, temps de réponse moyen constaté).
- Témoignages et noms d'établissements.
- Tarif exact à la conversation.
- Statistiques sectorielles du bloc « coût du silence » (à sourcer).
