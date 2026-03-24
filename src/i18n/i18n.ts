import i18next, { type i18n } from 'i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

const resources = {
	en: { translation: en },
	fr: { translation: fr },
};

const instances = new Map<Locale, i18n>();

/**
 * Traductions via [i18next](https://www.i18next.com/) ; une instance par locale (build statique).
 */
export function getFixedT(locale: Locale) {
	let instance = instances.get(locale);
	if (!instance) {
		instance = i18next.createInstance();
		instance.init({
			lng: locale,
			fallbackLng: 'fr',
			resources,
			interpolation: { escapeValue: false },
		});
		instances.set(locale, instance);
	}
	return instance.getFixedT(locale);
}
