import React, { createContext, useContext, useState, useEffect } from "react";
import { LanguageCode, LanguageOption } from "../types";
import { languageOptions, translations, TranslationDict } from "../data/translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDict;
  isRtl: boolean;
  options: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "anm_preferred_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY) as LanguageCode;
        if (saved && translations[saved]) {
          return saved;
        }
      } catch {
        // fallback
      }
    }
    return "en";
  });

  const currentOption = languageOptions.find((o) => o.code === language) || languageOptions[0];
  const isRtl = !!currentOption.isRtl;

  const setLanguage = (lang: LanguageCode) => {
    if (translations[lang]) {
      setLanguageState(lang);
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // storage disabled
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
    }
  }, [language, isRtl]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl, options: languageOptions }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
