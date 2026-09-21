"use client";

import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import { geistMono } from "../fonts";
import { categories, projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

export default function PortfolioPage() {
  const { locale, isAr } = useLanguage();
  const tPort = dictionary[locale].portfolio;

  return (
    <PageShell>
      <PageHeader
        eyebrow={tPort.eyebrow}
        headline={tPort.headline}
        lede={tPort.lede}
      />

      <section className="flex flex-col gap-8">
        <p
          className={`${isAr ? "font-bold text-sm" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
        >
          {tPort.eyebrow}
        </p>

        <ProjectGrid projects={projects} categories={categories} />
      </section>

      <CtaBlock label={tPort.ctaLabel} action={tPort.ctaAction} />
    </PageShell>
  );
}
