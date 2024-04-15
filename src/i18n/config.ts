import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

const defaultLanguage = "en";

export const defaultNS = "translation";
export const resources = {
  en: {
    [defaultNS]: en,
  },
} as const;

i18n.use(initReactI18next).init({
  defaultNS: defaultNS,
  ns: [defaultNS],
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
