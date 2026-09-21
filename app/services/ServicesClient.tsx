"use client";

import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import CtaBlock from "../components/page/CtaBlock";
import ServiceCard from "../components/services/ServiceCard";
import ProcessTimeline from "../components/services/ProcessTimeline";
import { ebGaramond, geistMono } from "../fonts";
import { process } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

export default function ServicesClient() {
  const { locale, isAr } = useLanguage();
  const tServices = dictionary[locale].services;

  return (
    <PageShell>
      <PageHeader
        eyebrow={tServices.eyebrow}
        headline={tServices.headline}
        lede={tServices.lede}
      />

      {/* Service Cards */}
      <section className="flex flex-col gap-6 md:gap-8" id="services-list">
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
          {tServices.items.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="flex flex-col gap-6 md:gap-8" id="process">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs md:text-sm font-semibold tracking-widest uppercase`}
          >
            {tServices.processTitle}
          </p>
          <h2
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            {tServices.processHeadline}
          </h2>
        </div>

        <ProcessTimeline steps={process} />
      </section>

      <CtaBlock
        label={isAr ? "لست متأكدًا من أي خدمة تناسبك؟" : "NOT SURE WHICH ONE YOU NEED?"}
        action={isAr ? "تحدث مع فريقنا" : "TALK IT THROUGH"}
      />
    </PageShell>
  );
}
