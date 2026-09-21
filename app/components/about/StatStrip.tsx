"use client";

import { ebGaramond, geistMono } from "../../fonts";
import type { AboutStat } from "../../data/about";
import { useLanguage } from "../../context/LanguageContext";

export default function StatStrip({ stats }: { stats: AboutStat[] }) {
  const { isAr } = useLanguage();

  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-brand-slate/25 py-8 md:py-10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1.5 md:gap-2">
          <dt
            className={`${isAr ? "font-bold text-xs font-sans-arabic" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
          >
            {isAr && stat.labelAr ? stat.labelAr : stat.label}
          </dt>
          <dd
            className={`${ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight font-bold`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
