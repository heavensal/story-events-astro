# Codex Story Events Project Instructions

Project-specific instructions for Story Events.
These complement the base instructions in `AGENTS.md`.

## First Steps

**READ THE README.md FIRST** to understand:
- How to configure the project (`site.config.ts`, `astro.config.mjs`)
- Component patterns and the `locale` prop system
- Translation file structure (`src/i18n/locales/`)
- SEO configuration (look for `// SEO:` comments in code)
- ContentForge API integration for dynamic content
- Tailwind styling conventions

## Project Context

- This project is the landing page for an event staffing company.
- Story Events provides qualified event staff for hospitality and event professionals.
- Example: a caterer handling a wedding should be able to rely on Story Events to assemble the right service team instead of recruiting servers directly.
- The website must clearly communicate a B2B service model built around reliability, presentation, and operational excellence.

## Key Files

| File | Purpose |
|------|---------|
| `src/site.config.ts` | SEO: Site name, contact, social, OG image |
| `astro.config.mjs` | SEO: Site URL and base path |
| `src/i18n/locales/fr.json` | French translations (all text content) |
| `src/i18n/locales/en.json` | English translations |
| `src/layouts/Layout.astro` | SEO: Meta tags, hreflang, JSON-LD |
| `src/lib/seo.ts` | JSON-LD structured data builders |
| `src/lib/contentforge.ts` | API integration utility |
| `.env` | Runtime configuration |

## Component Architecture

All landing components follow this pattern:

```astro
---
import { getFixedT, type Locale } from '../i18n/i18n';

interface Props {
  locale: Locale;  // Required: 'fr' or 'en'
}

const { locale } = Astro.props;
const t = getFixedT(locale);
---

<section id="section-id" aria-labelledby="heading-id">
  <h2 id="heading-id">{t('SectionName.title')}</h2>
</section>
```

## SEO Markers

Files containing `// SEO:` comments indicate elements requiring updates:
- `astro.config.mjs` — Site URL and base path
- `src/site.config.ts` — All site metadata

## Conversion Focus

- Every section should help reassure professional clients that Story Events can represent their brand well in front of their own customers.
- Emphasize trust, execution quality, presentation, staffing excellence, and operational support.
- Keep the landing page focused on clarity, credibility, and premium conversion.

## Brand Positioning

- The brand should feel luxurious, premium, and highly polished.
- The site should express perfection in the details, discretion, and high standards.
- The tone should remain elegant, confident, and service-oriented.
- Avoid generic startup language, casual phrasing, or playful visual treatment.

## Visual Direction

- Favor dark backgrounds as the main visual base.
- Use silver/zinc tones to highlight buttons, text accents, borders, and premium emphasis points.
- Maintain strong contrast while preserving a refined and upscale look.
- Visual choices should feel precise, minimal, and premium rather than loud or decorative.

## Tailwind Styling

**STRICT RULES** (see `AGENTS.md` for details):
- Native Tailwind classes ONLY
- NO arbitrary values like `w-[347px]` or `text-[#color]`
- NO inline styles
- Animations: Tailwind native → transitions → keyframes (last resort)

## Color Palette (Story Events)

- **Background**: `zinc-950`, `zinc-900` (dark, premium)
- **Accent/CTA**: `zinc-300`, `zinc-200` (silver, premium)
- **Text**: `zinc-100` (headings), `zinc-400` (body)
- **Borders**: `zinc-800`, `zinc-700`
