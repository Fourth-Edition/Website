import type { Metadata } from "next";
import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import ServiceCard from "../components/services/ServiceCard";
import ProcessTimeline from "../components/services/ProcessTimeline";
import { ebGaramond, geistMono } from "../fonts";
import { process, services } from "../data/services";

export const metadata: Metadata = {
  title: "Services — Fourth Edition",
  description:
    "Websites and web apps, mobile applications, enterprise systems, branding, and marketing services.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICES"
        headline="What we build, and how it ships."
        lede="Six practices, one team. Most projects pull from two or three of them — the scope conversation is where we work out which."
      />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            CAPABILITIES
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Six things we do properly
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            Ranges below are typical, not fixed. Scope decides the number.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            PROCESS
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Five stages, no surprises
          </h2>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            Same shape whether it&apos;s a two-week sprint or a six-month
            platform.
          </p>
        </div>

        <ProcessTimeline steps={process} />
      </section>

      <CtaBlock label="NOT SURE WHICH ONE YOU NEED?" action="TALK IT THROUGH" />
    </PageShell>
  );
}
