import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import texts from './texts'

i18next.use(initReactI18next).init({
  resources: {
    en: texts.en
  },
  lng: localStorage.getItem("lng") || "en"
});

export default i18next;
