import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import azTranslate from './locales/az/translation.json';
import enTranslate from './locales/en/translation.json';

i18n
  .use (initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslate
      },
      az: {
        translation: azTranslate
      }
    },
    fallbackLng: 'az',
    debug: true,
   
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;
