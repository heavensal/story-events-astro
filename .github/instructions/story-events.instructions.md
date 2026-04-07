# Copilot Story Events Project Instructions

Project-specific instructions for GitHub Copilot.
These complement the base instructions in `.github/copilot-instructions.md`.

## First Steps

**READ THE README.md FIRST** to understand:
- How to configure the project (`site.config.ts`, `astro.config.mjs`)
- Component patterns and the `locale` prop system
- Translation file structure (`src/i18n/locales/`)
- SEO configuration (look for `// SEO:` comments in code)
- ContentForge API integration for dynamic content
- Tailwind styling conventions

## Project Context

- Landing page for an event staffing company (Story Events)
- B2B service model: provides qualified event staff for hospitality professionals
- Example: caterer handling a wedding relies on Story Events for service team
- Multi-language: French (default) or bilingual via `ENABLE_MULTILANG` env var

## Key Files

| File | Purpose |
|------|---------|
| `src/site.config.ts` | SEO: Site name, contact, social, OG image |
| `astro.config.mjs` | SEO: Site URL and base path |
| `src/i18n/locales/fr.json` | French translations |
| `src/i18n/locales/en.json` | English translations |
| `src/layouts/Layout.astro` | SEO: Meta tags, hreflang, JSON-LD |
| `src/lib/seo.ts` | JSON-LD structured data builders |
| `src/lib/contentforge.ts` | API integration utility |

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

Files containing `// SEO:` comments indicate elements requiring updates.

## Brand Positioning

- Luxurious, premium, highly polished
- Perfection in details, discretion, high standards
- Elegant, confident, service-oriented tone
- NO casual/generic startup language

## Visual Direction

- Dark backgrounds: `zinc-950`, `zinc-900`
- Silver accents: `zinc-300`, `zinc-200`
- Text: `zinc-100` (headings), `zinc-400` (body)
- Borders: `zinc-800`, `zinc-700`

## Tailwind Styling

**STRICT RULES**:
- Native Tailwind classes ONLY
- NO arbitrary values like `w-[347px]` or `text-[#color]`
- NO inline styles
- Animations: Tailwind native → transitions → keyframes (last resort)

## Conversion Focus

- Guide professional clients toward trust and contact
- Emphasize staff quality, service reliability, brand image protection
- Primary CTA: `bg-zinc-300 text-zinc-900 hover:bg-zinc-200`
- Secondary CTA: `border border-zinc-700 hover:border-zinc-600`
