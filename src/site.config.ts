/**
 * Single source of truth for site metadata (SEO, contact, social).
 * Legal pages reuse these values where relevant.
 *
 * SEO: All values in this file affect SEO and should be customized.
 */
export const siteConfig = {
	// SEO: Site identity
	/** Displayed name (meta tags, footer, Open Graph) */
	name: 'Story Events',
	/** Short phrase below main title */
	tagline: "L'excellence au service de vos événements",

	// SEO: Meta description (150-160 chars recommended)
	/** Default meta description for search engines */
	defaultDescription:
		"Story Events place des équipes qualifiées — maîtres d'hôtel, serveurs — pour les traiteurs : mariages, cérémonies, conférences. Partenariat B2B, discrétion et excellence du service.",

	// SEO: Language and locale
	lang: 'fr',
	locale: 'fr_FR',

	/** Browser theme color (mobile) */
	themeColor: '#070708',

	// SEO: Contact info (used in footer, contact section, JSON-LD)
	contact: {
		email: 'contact@story-events.fr',
		phone: '01 23 45 67 89',
	},

	/** SIRET / legal ID displayed in footer and legal pages */
	legalId: '[SIRET — à compléter]',

	// SEO: Social media profiles
	/** @handle without @; leave empty if no account */
	twitterHandle: '',
	/**
	 * Social profile URLs for JSON-LD sameAs (LinkedIn, Instagram, etc.)
	 * Example: ['https://www.linkedin.com/company/...', 'https://instagram.com/...']
	 */
	sameAs: [] as readonly string[],

	// SEO: Open Graph image for social sharing
	/**
	 * Open Graph image dimensions (1200×630 recommended).
	 * Set to 0 to omit width/height meta tags.
	 */
	ogImageWidth: 1200,
	ogImageHeight: 630,
	/**
	 * Absolute URL for Open Graph image, or '' to omit.
	 * After deployment, can be `https://your-domain.com/og-image.jpg` if you add the file to public/.
	 */
	// SEO: Update ogImageUrl after deploying to final domain
	ogImageUrl: '',
} as const;
