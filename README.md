# Story Events — Landing Page

Site vitrine pour Story Events, entreprise de placement de personnel événementiel. Construit avec Astro 6, Tailwind 4, i18n (Français/Anglais), SEO complet (sitemap, Open Graph, JSON-LD, hreflang).

**Prérequis :** Node.js ≥ 22.12 (voir `package.json` → `engines`). Un fichier `.nvmrc` est inclus pour `nvm use`.

---

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Démarrage rapide](#démarrage-rapide)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Composants](#composants)
- [Internationalisation (i18n)](#internationalisation-i18n)
- [Configuration SEO](#configuration-seo)
- [API ContentForge](#api-contentforge)
- [Conventions de style](#conventions-de-style)
- [Déploiement](#déploiement)
- [Commandes](#commandes)

---

## Fonctionnalités

- **i18n** : Français/Anglais avec toggle via variable `ENABLE_MULTILANG`
- **SEO** : Open Graph, Twitter Cards, JSON-LD, canonical URLs, hreflang, sitemap
- **Sections landing** : Hero, Services, Offre, Événements, Rôles, International, FAQ, Contact, Footer
- **Pages légales** : Mentions légales, Politique de confidentialité, CGV
- **Accessibilité** : Skip-link, HTML sémantique, labels ARIA, gestion du focus
- **LLM-ready** : Instructions pour Cursor, GitHub Copilot et Codex

---

## Démarrage rapide

### Option 1 : Template GitHub

1. Cliquer **Use this template** → **Create a new repository**
2. Cloner et installer :

   ```sh
   git clone https://github.com/YOUR_USER/YOUR_REPO.git
   cd YOUR_REPO
   pnpm install
   cp .env.example .env
   pnpm dev
   ```

### Option 2 : CLI Astro

Créer un nouveau projet depuis ce template :

```sh
pnpm create astro@latest mon-site -- --template YOUR_USER/story-events-astro
cd mon-site
pnpm install
cp .env.example .env
pnpm dev
```

### Checklist de configuration initiale

Après création du projet, mettre à jour ces fichiers :

1. **`astro.config.mjs`** — Définir `SITE` et `BASE` pour l'URL de déploiement
2. **`src/site.config.ts`** — Nom du site, contact, métadonnées SEO
3. **`src/i18n/locales/fr.json`** — Contenu français
4. **`src/i18n/locales/en.json`** — Contenu anglais (si multilingue)
5. **`.env`** — Définir `ENABLE_MULTILANG=true` pour le mode bilingue

---

## Structure du projet

```text
/
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── components/           # Sections landing et composants UI
│   │   ├── HeroMinimal.astro
│   │   ├── LandingHome.astro         # Composant de composition principal
│   │   ├── LandingServicesSection.astro
│   │   ├── LandingOfferSection.astro
│   │   ├── LandingEventsSection.astro
│   │   ├── LandingRolesSection.astro
│   │   ├── LandingInternationalSection.astro
│   │   ├── LandingFaqSection.astro   # Supporte l'API ContentForge
│   │   ├── LandingContactSection.astro
│   │   ├── SiteFooter.astro
│   │   └── LanguageSwitcher.astro
│   ├── i18n/
│   │   ├── i18n.ts           # Système de traduction
│   │   └── locales/
│   │       ├── fr.json       # Traductions françaises
│   │       └── en.json       # Traductions anglaises
│   ├── layouts/
│   │   └── Layout.astro      # SEO, hreflang, JSON-LD, balises meta
│   ├── lib/
│   │   ├── paths.ts          # Utilitaires URL pour base path
│   │   ├── seo.ts            # Helpers JSON-LD et hreflang
│   │   └── contentforge.ts   # Intégration API
│   ├── pages/
│   │   ├── index.astro       # Landing français (défaut)
│   │   ├── en/index.astro    # Landing anglais
│   │   ├── legal-notice.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-of-service.astro
│   │   └── robots.txt.ts
│   ├── styles/
│   │   └── global.css        # Import Tailwind et styles globaux
│   └── site.config.ts        # SEO: Configuration centrale du site
├── .env.example              # Template variables d'environnement
├── astro.config.mjs          # SEO: URL du site et base path
├── AGENTS.md                 # Instructions Codex de base
├── AGENTS.project.md         # Instructions Codex spécifiques au projet
└── .cursor/rules/            # Règles Cursor AI
```

---

## Configuration

### Variables d'environnement

Copier `.env.example` vers `.env` et configurer :

| Variable | Défaut | Description |
|----------|--------|-------------|
| `ENABLE_MULTILANG` | `false` | Mettre à `true` pour activer le switch FR/EN |
| `CONTENTFORGE_API_TOKEN` | - | Token API optionnel pour contenu FAQ dynamique |
| `CONTENTFORGE_URL` | `https://contentforge.1344.fr/api/v1` | URL de base API optionnelle |

### Configuration du site (`src/site.config.ts`)

Fichier central pour toutes les métadonnées :

```typescript
export const siteConfig = {
  // SEO: Identité du site
  name: 'Story Events',
  tagline: 'L'excellence au service de vos événements',

  // SEO: Meta description (150-160 caractères recommandés)
  defaultDescription: 'Description SEO...',

  // SEO: Contact (utilisé dans footer, section contact, JSON-LD)
  contact: {
    email: 'contact@story-events.fr',
    phone: '01 23 45 67 89',
  },

  // SEO: Réseaux sociaux
  twitterHandle: '',
  sameAs: [],

  // SEO: Image Open Graph
  ogImageUrl: '/og-image.jpg',
};
```

### Configuration Astro (`astro.config.mjs`)

Mettre à jour `SITE` et `BASE` pour le déploiement :

```javascript
// SEO: URL de production (affecte URLs canoniques, sitemap, Open Graph)
const SITE = 'https://heavensal.github.io';

// SEO: Base path (nom du repo pour GitHub Pages, '/' pour domaine custom)
const BASE = '/story-events-astro/';
```

---

## Composants

### Architecture des composants

Toutes les sections landing suivent un pattern cohérent :

```astro
---
import { getFixedT, type Locale } from '../i18n/i18n';

interface Props {
  locale: Locale;  // Requis: 'fr' ou 'en'
}

const { locale } = Astro.props;
const t = getFixedT(locale);  // Obtenir la fonction de traduction
---

<section id="section-id" aria-labelledby="heading-id">
  <h2 id="heading-id">{t('SectionName.title')}</h2>
  <!-- Contenu utilisant t() pour tout le texte -->
</section>
```

### Utilisation des composants

#### Dans les fichiers de page

```astro
---
import Layout from '../layouts/Layout.astro';
import LandingHome from '../components/LandingHome.astro';
import { type Locale } from '../i18n/i18n';

const locale: Locale = 'fr';  // ou 'en' pour la page anglaise
---

<Layout lang="fr" ogLocale="fr_FR">
  <LandingHome locale={locale} />
</Layout>
```

### Créer de nouvelles sections

1. Créer `src/components/LandingNewSection.astro` avec prop `locale`
2. Ajouter les clés de traduction dans `fr.json` et `en.json`
3. Importer et ajouter dans `LandingHome.astro`

---

## Internationalisation (i18n)

### Modes de langue

#### Français uniquement (défaut)

Définir `ENABLE_MULTILANG=false` dans `.env`. Le switch de langue est masqué.

#### Bilingue (Français + Anglais)

Définir `ENABLE_MULTILANG=true` dans `.env`. Le switch apparaît dans le hero.

### Système de traduction

Le système i18n utilise i18next avec instances par locale :

```typescript
import { getFixedT, type Locale } from '../i18n/i18n';

const t = getFixedT('fr');  // ou 'en'
t('HeroMinimal.tagline')  // Retourne la chaîne traduite
```

### Structure des fichiers de traduction

Les traductions sont organisées par composant en JSON :

```json
{
  "LandingPage": {
    "metaTitle": "Story Events — Placement de personnel événementiel",
    "metaDescription": "Description SEO (150-160 caractères)"
  },
  "HeroMinimal": {
    "eyebrow": "Sous-titre",
    "tagline": "Titre principal",
    "primaryCta": "Nous contacter"
  }
}
```

---

## Configuration SEO

Les fichiers et éléments marqués avec `// SEO:` nécessitent une mise à jour :

### Mises à jour SEO requises

#### 1. URL du site (`astro.config.mjs`)

```javascript
// SEO: Mettre à jour lors du passage au domaine custom
const SITE = 'https://your-domain.com';

// SEO: Mettre à '/' pour déploiement racine sur domaine custom
const BASE = '/';
```

#### 2. Métadonnées (`src/site.config.ts`)

```typescript
export const siteConfig = {
  // SEO: Mettre à jour pour votre site
  name: 'Story Events',
  defaultDescription: 'Description SEO...',
  twitterHandle: 'votrehandle',
  sameAs: ['https://linkedin.com/company/...'],
  ogImageUrl: 'https://your-domain.com/og-image.jpg',
};
```

#### 3. Meta des pages (`src/i18n/locales/*.json`)

```json
{
  "LandingPage": {
    "metaTitle": "Story Events — Mot-clé principal | Mot-clé secondaire",
    "metaDescription": "Description avec mots-clés. 150-160 caractères."
  }
}
```

---

## API ContentForge

La section FAQ supporte le contenu dynamique avec fallback.

### Configuration

Définir les variables d'environnement dans `.env` :

```sh
CONTENTFORGE_URL=https://contentforge.1344.fr/api/v1
CONTENTFORGE_API_TOKEN=votre_token_ici
```

### Fonctionnement

`LandingFaqSection.astro` récupère les FAQs depuis l'API au build :

1. Si token API défini et API répond : utilise les données API
2. Si API échoue ou pas de token : fallback vers le contenu des fichiers de traduction

---

## Conventions de style

### Règles Tailwind CSS

Ce projet utilise **Tailwind CSS 4** avec des conventions strictes :

#### ✅ FAIRE : Utiliser les classes Tailwind natives

```astro
<div class="flex items-center justify-between gap-4 px-6 py-4">
  <h2 class="text-2xl font-bold text-zinc-100 md:text-3xl">Titre</h2>
  <button class="rounded-lg bg-zinc-300 px-4 py-2 text-zinc-900 hover:bg-zinc-200">
    Cliquer
  </button>
</div>
```

#### ❌ NE PAS FAIRE : Utiliser les valeurs arbitraires

```astro
<!-- INTERDIT : Valeurs arbitraires avec crochets -->
<div class="w-[347px] mt-[23px] text-[#1a2b3c]">
```

#### ❌ NE PAS FAIRE : Utiliser les styles inline

```astro
<!-- INTERDIT : Styles inline -->
<div style="margin-top: 23px; color: #1a2b3c;">
```

### Animations

#### 1. D'abord : Animations Tailwind natives

```astro
<div class="animate-pulse">Chargement...</div>
<div class="animate-spin">⟳</div>
```

#### 2. Ensuite : Transitions Tailwind

```astro
<button class="transition-colors duration-200 hover:bg-zinc-200">
  Survolez-moi
</button>
```

#### 3. Dernier recours : Keyframes custom

Ajouter dans `src/styles/global.css` uniquement si explicitement demandé :

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Palette de couleurs (Story Events)

- **Fond principal** : `zinc-950`, `zinc-900` (sombre, premium)
- **Accent/CTA** : `zinc-300`, `zinc-200` (silver, premium)
- **Texte** : `zinc-100` (titres), `zinc-400` (corps)
- **Bordures** : `zinc-800`, `zinc-700`

---

## Déploiement

### GitHub Pages

Le workflow `.github/workflows/deploy-github-pages.yml` build et déploie sur push vers `main` ou `master`.

1. **Repository** → **Settings** → **Pages** : source **GitHub Actions**
2. Mettre à jour `SITE` et `BASE` dans `astro.config.mjs`

### Autres plateformes

```sh
pnpm astro add vercel    # Vercel
pnpm astro add netlify   # Netlify
pnpm astro add cloudflare # Cloudflare Pages
```

---

## Commandes

| Commande | Action |
|----------|--------|
| `pnpm install` | Installer les dépendances |
| `pnpm dev` | Démarrer le serveur de dev |
| `pnpm build` | Build production → `dist/` |
| `pnpm preview` | Prévisualiser le build |
| `pnpm astro add [integration]` | Ajouter une intégration Astro |

---

## Documentation

- [Documentation Astro](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [i18next](https://www.i18next.com/)
