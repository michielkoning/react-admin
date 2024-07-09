import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';


export const i18nProvider = polyglotI18nProvider(
  locale => (locale === 'fr' ? en : en),
    'en',
    [{ locale: 'en', name: 'English' }],
);