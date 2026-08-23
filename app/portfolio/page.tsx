import type { Metadata } from "next";
import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import { geistMono } from "../fonts";
import { categories, projects } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Fourth Edition",
  description:
    "Selected work: storefronts, field apps, bespoke CRMs, dashboards, and identity systems.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="PORTFOLIO"
        headline="Work that made it past launch."
        lede="A selection of recent builds. Every one of them is still in production."
      />

      <section className="flex flex-col gap-8">
        <p
          className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
        >
          SELECTED WORK
        </p>

        <ProjectGrid projects={projects} categories={categories} />
      </section>

      <CtaBlock label="WANT SOMETHING LIKE THIS?" action="START A PROJECT" />
    </PageShell>
  );
}
