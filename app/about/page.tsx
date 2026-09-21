import type { Metadata } from "next";
import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import StatStrip from "../components/about/StatStrip";
import ValueGrid from "../components/about/ValueGrid";
import TimelineList from "../components/about/TimelineList";
import TeamGrid from "../components/about/TeamGrid";
import { ebGaramond, geistMono } from "../fonts";
import { intro, stats, team, timeline, values } from "../data/about";

export const metadata: Metadata = {
  title: "About — Fourth Edition",
  description:
    "An architectural software atelier delivering high-performance digital products and scalable enterprise systems.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={intro.eyebrow}
        headline={intro.headline}
        lede={intro.lede}
      />

      <StatStrip stats={stats} />

      {/* Philosophy & Values */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
          >
            OUR BRAND PHILOSOPHY
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            The &quot;4th Edition&quot; Standard
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            We skip traditional trial-and-error phases to deliver mature, production-grade solutions from day one.
          </p>
        </div>

        <ValueGrid values={values} />
      </section>

      {/* History & Timeline */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
          >
            COMPANY JOURNEY & MILESTONES
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            From January 2026 to Market Leadership
          </h2>
        </div>

        <TimelineList milestones={timeline} />
      </section>

      {/* Team Nucleus */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
          >
            ENGINEERING NUCLEUS
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Compact team, extreme execution
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            We operate as an agile technical nucleus where senior architectural engineers own your project end-to-end.
          </p>
        </div>

        <TeamGrid members={team} />
      </section>

      <CtaBlock label="READY TO BUILD WITH FOURTH EDITION?" action="GET IN TOUCH" />
    </PageShell>
  );
}
