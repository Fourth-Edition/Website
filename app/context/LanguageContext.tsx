"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "ar";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("fe_locale") as Locale;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("fe_locale", locale);
    
    // Update HTML dir and lang attributes
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLanguage = () => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLanguage,
        dir,
        isAr,
      }}
    >
      <div dir={dir} className={isAr ? "font-sans-arabic" : ""}>
        {children}
      </div>
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
