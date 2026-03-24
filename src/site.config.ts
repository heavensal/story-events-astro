/**
 * Point unique à adapter pour le site (SEO, contact, réseaux).
 * Les pages légales reprennent ces valeurs quand c’est pertinent.
 */
export const siteConfig = {
	/** Nom affiché (balises, footer, Open Graph) */
	name: 'Story Events',
	/** Meta description par défaut (~150–160 caractères pour le SEO) */
	defaultDescription:
		'Story Events place des équipes qualifiées — maîtres d’hôtel, serveurs — pour les traiteurs : mariages, cérémonies, conférences. Partenariat B2B, discrétion et excellence du service.',
	lang: 'fr',
	locale: 'fr_FR',
	/** Couleur navigateur (mobile) */
	themeColor: '#070708',
	contact: {
		email: 'contact@story-events.fr',
		phone: '01 23 45 67 89',
	},
	/** SIRET / identifiant légal affiché dans le footer et les mentions */
	legalId: '[SIRET — à compléter]',
	/** @handle sans @ ; laisser vide si pas de compte */
	twitterHandle: '',
	/**
	 * URL absolue d’une image Open Graph (1200×630 recommandé), ou '' pour ne pas l’émettre.
	 * Après déploiement, peut être `https://votre-domaine/og-image.jpg` si vous ajoutez le fichier dans public/.
	 */
	ogImageUrl: '',
} as const;
