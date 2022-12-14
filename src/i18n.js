import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(HttpApi) // Registering the back-end plugin
    .use(Backend)

    .init({
        debug: true,
        lng: "rus",
        supportedLngs: ["eng", "rus"],

        interpolation: {
            escapeValue: false
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;