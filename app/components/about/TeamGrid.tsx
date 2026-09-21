"use client";

import { geistMono } from "../../fonts";
import type { TeamMember } from "../../data/about";
import { useLanguage } from "../../context/LanguageContext";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const { isAr } = useLanguage();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <article
          key={member.name}
          className="flex flex-col gap-4 rounded-2xl border border-brand-slate/25 p-7 bg-white/40 backdrop-blur-sm
          hover:border-brand-navy transition-colors duration-300"
        >
          <div
            className={`${geistMono.className} flex h-16 w-16 items-center justify-center rounded-full
            border border-brand-slate/40 bg-brand-navy/10 text-brand-black text-base font-bold tracking-widest`}
            aria-hidden
          >
            {member.initials}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className={`${isAr ? "font-bold text-lg font-sans-arabic" : "font-sans text-lg"} text-brand-black tracking-tight`}>
              {isAr && member.nameAr ? member.nameAr : member.name}
            </h3>
            <p
              className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
            >
              {isAr && member.roleAr ? member.roleAr : member.role}
            </p>
          </div>

          <p className="font-sans text-brand-ink/75 text-sm leading-relaxed mt-auto">
            {isAr && member.focusAr ? member.focusAr : member.focus}
          </p>
        </article>
      ))}
    </div>
  );
}
