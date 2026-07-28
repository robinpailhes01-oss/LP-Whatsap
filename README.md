# Luma — Landing page « Agent WhatsApp & CRM » (hôtellerie)

Page de vente pour l'agent IA WhatsApp et son CRM, destinés aux hôtels,
hébergements et lieux de réception. Argument central : installation gratuite,
facturation à l'usage uniquement.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Documents

- **`DESIGN.md`** — passe stratège de marque, direction esthétique, tokens et
  élément signature. À lire avant toute modification visuelle : chaque couleur
  et chaque fonte y a une raison.
- **`CONTENT.md`** — ce qui doit être vérifié ou remplacé avant la mise en
  ligne (tarif, endpoint du formulaire, promesses opposables, preuve sociale).

## Configuration

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT="https://…"
```

Sans cette variable, le formulaire affiche un état « non connecté » explicite
plutôt que de simuler un envoi réussi.

## Structure

La page se déroule sur une nuit, de 23h47 à 07h12, et la surface passe du nuit
au jour au fil du scroll. L'ordre des sections est chronologique — c'est le
récit, pas une simple mise en page.

```
src/
  app/
    layout.tsx        fontes, métadonnées
    globals.css       tokens (couleur, type, rayons, motion)
  components/
    Conversation.tsx  lecteur de conversation WhatsApp — élément signature
    SiteHeader.tsx    en-tête + horloge de scène
    ui.tsx            CTA, libellés de section
    sections/         une section par moment de la nuit
  lib/
    conversations.ts  scripts de conversation et demandes traitées
    vsl.ts            configuration de la VSL (fournisseur, chapitres)
    motion.ts         easings et variantes partagés
```

## Stack

Next.js 16 (App Router) · Tailwind CSS v4 · Motion · TypeScript.
