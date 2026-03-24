/** Lien interne compatible avec GitHub Pages (`base` non racine dans astro.config.mjs). */
export function pageHref(path: string): string {
	const base = import.meta.env.BASE_URL;
	const clean = path.startsWith('/') ? path.slice(1) : path;
	return base + clean;
}

/** Segments d’URL en anglais (fichiers de pages). */
export const pageRoutes = {
	home: '',
	englishHome: 'en/',
	legalNotice: 'legal-notice',
	privacyPolicy: 'privacy-policy',
	termsOfService: 'terms-of-service',
} as const;
