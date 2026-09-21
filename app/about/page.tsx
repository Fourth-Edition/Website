"use client";

import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import StatStrip from "../components/about/StatStrip";
import ValueGrid from "../components/about/ValueGrid";
import TimelineList from "../components/about/TimelineList";
import TeamGrid from "../components/about/TeamGrid";
import { ebGaramond, geistMono } from "../fonts";
import { stats, team, timeline, values } from "../data/about";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

export default function AboutPage() {
  const { locale, isAr } = useLanguage();
  const tAbout = dictionary[locale].about;

  return (
    <PageShell>
      <PageHeader
        eyebrow={tAbout.eyebrow}
        headline={tAbout.headline}
        lede={tAbout.lede}
      />

      <StatStrip stats={stats} />

      {/* Philosophy & Values */}
      <section className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs md:text-sm font-semibold tracking-widest uppercase`}
          >
            {tAbout.philosophyTitle}
          </p>
          <h2
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            {tAbout.philosophyHeadline}
          </h2>
          <p className="font-sans text-brand-ink/80 text-base leading-relaxed text-pretty">
            {tAbout.philosophyLede}
          </p>
        </div>

        <ValueGrid values={values} />
      </section>

      {/* History & Timeline */}
      <section className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs md:text-sm font-semibold tracking-widest uppercase`}
          >
            {tAbout.journeyTitle}
          </p>
          <h2
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            {tAbout.journeyHeadline}
          </h2>
        </div>

        <TimelineList milestones={timeline} />
      </section>

      {/* Team Nucleus */}
      <section className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs md:text-sm font-semibold tracking-widest uppercase`}
          >
            {tAbout.nucleusTitle}
          </p>
          <h2
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            {tAbout.nucleusHeadline}
          </h2>
          <p className="font-sans text-brand-ink/80 text-base leading-relaxed text-pretty">
            {tAbout.nucleusLede}
          </p>
        </div>

        <TeamGrid members={team} />
      </section>

      <CtaBlock
        label={isAr ? "مستعد للبناء مع فورث إديشن؟" : "READY TO BUILD WITH FOURTH EDITION?"}
        action={isAr ? "تواصل معنا" : "GET IN TOUCH"}
      />
    </PageShell>
  );
}
