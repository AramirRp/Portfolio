import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frTranslations from "./locales/fr/translation.json";
import enTranslations from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: frTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  lng: "fr", // Default language set to French
  fallbackLng: "fr", // Fallback language also set to French
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;