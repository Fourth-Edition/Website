"use client";

import { geistMono } from "../../fonts";
import type { StudioValue } from "../../data/about";
import { useLanguage } from "../../context/LanguageContext";

export default function ValueGrid({ values }: { values: StudioValue[] }) {
  const { isAr } = useLanguage();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {values.map((value) => (
        <article
          key={value.index}
          className="flex flex-col gap-3 rounded-2xl border border-brand-slate/25 p-7 bg-white/40 backdrop-blur-sm
          hover:border-brand-navy hover:shadow-md transition-all duration-300"
        >
          <span
            className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
          >
            {value.index}
          </span>
          <h3 className={`${isAr ? "font-bold text-xl font-sans-arabic" : "font-sans text-xl"} text-brand-black tracking-tight`}>
            {isAr && value.titleAr ? value.titleAr : value.title}
          </h3>
          <p className="font-sans text-brand-ink/80 text-base leading-relaxed text-pretty">
            {isAr && value.descriptionAr ? value.descriptionAr : value.description}
          </p>
        </article>
      ))}
    </div>
  );
}
