"use client";

import { useLanguage } from "../context/LanguageContext";
import { geistMono } from "../fonts";

export default function LanguageToggle({ scrolled }: { scrolled?: boolean }) {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`${geistMono.className} relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
        scrolled
          ? "border-slate-700 bg-slate-900/80 text-slate-200 hover:border-white hover:text-white"
          : "border-brand-slate/40 bg-white/10 backdrop-blur-md text-brand-slate hover:border-brand-light hover:text-brand-light"
      }`}
      title={locale === "en" ? "التحويل إلى اللغة العربية" : "Switch to English"}
    >
      <span className={locale === "en" ? "text-amber-400 font-bold" : "opacity-60"}>
        EN
      </span>
      <span className="opacity-40">|</span>
      <span className={locale === "ar" ? "text-amber-400 font-bold font-sans-arabic" : "opacity-60"}>
        العربية
      </span>
    </button>
  );
}
