import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Import all locales
import ar from '../locales/ar.json';
import en from '../locales/en.json';
import nl from '../locales/nl.json';
import { getLocales } from "expo-localization";

//empty for now
const resources = {
    ar:{
        translation: ar
    },
    en:{
        translation: en
    },
    nl:{
        translation: nl
    },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  /**
     * @param {string} key
     * @param {Object} options
     * @returns {string}
     */
  t: (key, options) => i18next.t(key, options),

});

export const setLang = (lang) =>  i18n.changeLanguage(lang);
export const translate = (key, options) => i18n.t(key, options);

export default i18n;
