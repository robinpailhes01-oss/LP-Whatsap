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

Le formulaire poste vers `/api/lead`. Il faut lui donner une destination, au
choix :

```bash
# .env.local — option A : un webhook (Make, n8n, Zapier…)
LEAD_WEBHOOK_URL="https://…"

# option B : un e-mail direct, via Resend
RESEND_API_KEY="re_…"
LEAD_EMAIL_TO="vous@luma-agence.fr"
LEAD_EMAIL_FROM="luma@votre-domaine.fr"
```

Sans destination, le formulaire affiche un message explicite plutôt que de
simuler un envoi réussi. Détail complet dans `CONTENT.md`.

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
  app/
    api/lead/         réception des demandes d'essai (route serveur)
  lib/
    conversations.ts  scripts de conversation et demandes traitées
    motion.ts         easings et variantes partagés
```

## Stack

Next.js 16 (App Router) · Tailwind CSS v4 · Motion · TypeScript.
