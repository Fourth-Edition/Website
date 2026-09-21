"use client";

import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ChannelList from "../components/contact/ChannelList";
import { geistMono } from "../fonts";
import { channels, studio } from "../data/contact";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

export default function ContactPage() {
  const { locale, isAr } = useLanguage();
  const tContact = dictionary[locale].contact;

  return (
    <PageShell>
      <PageHeader
        eyebrow={tContact.eyebrow}
        headline={tContact.headline}
        lede={tContact.lede}
      />

      <section className="flex flex-col gap-8">
        <p
          className={`${isAr ? "font-bold text-sm" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
        >
          {tContact.enquiryTitle}
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start">
          <ContactForm />

          <aside className="flex flex-col gap-10">
            <ChannelList channels={channels} />

            <dl className="flex flex-col gap-4 border-t border-brand-slate/25 pt-7">
              {[
                { label: tContact.locationLabel, value: isAr ? "شركة تعمل عن بُعد بالكامل" : studio.location },
                { label: tContact.hoursLabel, value: isAr ? "الأحد – الخميس، من 9 ص حتى 6 م" : studio.hours },
                { label: tContact.responseLabel, value: isAr ? "خلال ساعات قليلة" : studio.responseTime },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt
                    className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
                  >
                    {item.label}
                  </dt>
                  <dd className="font-sans text-brand-ink/80 text-base font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
