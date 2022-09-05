import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = {
	// translations: {
	// 	en: { lang }
	// },
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('/static/lang/en.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
