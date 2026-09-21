"use client";

import { geistMono } from "../../fonts";
import { useLanguage } from "../../context/LanguageContext";
import { dictionary } from "../../data/translations";

export interface ServiceItemProps {
  slug: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  startingAt: string;
}

export default function ServiceCard({ service }: { service: ServiceItemProps }) {
  const { locale, isAr } = useLanguage();
  const tServices = dictionary[locale].services;

  return (
    <article
      className="group flex flex-col gap-5 rounded-2xl border border-brand-slate/25 p-7 bg-white/50 backdrop-blur-sm
      hover:border-brand-navy hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span
          className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
        >
          {service.index}
        </span>
        <span
          className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-slate text-sm tracking-widest`}
        >
          {service.timeline}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className={`${isAr ? "font-bold text-xl" : "font-sans text-2xl"} text-brand-black tracking-tight`}>
          {service.title}
        </h3>
        <p className="font-sans text-brand-ink/80 text-base leading-relaxed text-pretty">
          {service.summary}
        </p>
      </div>

      <ul className="flex flex-col gap-2 mt-auto pt-2">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="font-sans text-brand-ink/75 text-sm leading-relaxed flex gap-3 items-center"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <p
        className={`${isAr ? "font-bold text-sm" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest border-t border-brand-slate/20 pt-4`}
      >
        {tServices.startingAt} {service.startingAt}
      </p>
    </article>
  );
}
