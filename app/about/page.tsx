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
    "A small software house building high-performance digital products and the brand systems around them.",
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

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            HOW WE WORK
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Four rules we don&apos;t bend
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            They cost us work occasionally. They have never cost us a launch.
          </p>
        </div>

        <ValueGrid values={values} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            HISTORY
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Where the studio has been
          </h2>
        </div>

        <TimelineList milestones={timeline} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            TEAM
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            The people on your project
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            Placeholder roster — names, photos, and bios still to come.
          </p>
        </div>

        <TeamGrid members={team} />
      </section>

      <CtaBlock label="WANT TO WORK TOGETHER?" action="GET IN TOUCH" />
    </PageShell>
  );
}
