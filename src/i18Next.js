import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './languages/en'
import geTranslation from "./languages/ge";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    ge: {
      translation: geTranslation
    }
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
