import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';
import common_pt from './translations/pt/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: common_pt,
      },
      fr: {
        translation: common_fr,
      },
      en: {
        translation: common_en,
      },
    },
    lng: 'pt',
    fallbackLng: ['pt', 'fr', 'en'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;