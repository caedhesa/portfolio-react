import { useState, useEffect } from "react";

//LANGUAGES
import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";

let listeners = [];
let currentLanguage = en;
export const languages = ["de", "en", "es"];

const setLanguage = (newState) => {
  const newLanguage = (() => {
    switch (newState) {
      case "de":
        return de;
      case "en":
        return en;
      case "es":
        return es;
      default:
        return en;
    }
  })();

  currentLanguage = newLanguage;
  listeners.forEach((listener) => {
    listener(currentLanguage);
  });
};

const useTranslation = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [currentLanguage, setLanguage, languages];
};

export default useTranslation;
