"use client";

import { geistMono } from "../../fonts";
import type { Milestone } from "../../data/about";
import { useLanguage } from "../../context/LanguageContext";

export default function TimelineList({
  milestones,
}: {
  milestones: Milestone[];
}) {
  const { isAr } = useLanguage();

  return (
    <ol className="flex flex-col">
      {milestones.map((milestone) => (
        <li
          key={milestone.year}
          className="grid md:grid-cols-[7rem_1fr] gap-2 md:gap-8 border-t border-brand-slate/25 py-7
          first:border-t-0 first:pt-0"
        >
          <span
            className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest md:pt-2`}
          >
            {milestone.year}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className={`${isAr ? "font-bold text-xl font-sans-arabic" : "font-sans text-xl"} text-brand-black tracking-tight`}>
              {isAr && milestone.titleAr ? milestone.titleAr : milestone.title}
            </h3>
            <p className="font-sans text-brand-ink/80 text-base leading-relaxed max-w-2xl text-pretty">
              {isAr && milestone.descriptionAr ? milestone.descriptionAr : milestone.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
