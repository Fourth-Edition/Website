import type { Metadata } from "next";
import PageShell from "../components/page/PageShell";
import PageHeader from "../components/page/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ChannelList from "../components/contact/ChannelList";
import { geistMono } from "../fonts";
import { channels, studio } from "../data/contact";

export const metadata: Metadata = {
  title: "Contact — Fourth Edition",
  description:
    "Start a project, ask a scoping question, or get support on an existing build.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="CONTACT US"
        headline="Tell us what you're building."
        lede="A paragraph is enough to start. If it turns out we're the wrong studio for it, we'll say so and point you somewhere better."
      />

      <section className="flex flex-col gap-8">
        <p
          className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
        >
          ENQUIRY
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start">
          <ContactForm />

          <aside className="flex flex-col gap-10">
            <ChannelList channels={channels} />

            <dl className="flex flex-col gap-4 border-t border-brand-slate/25 pt-7">
              {[
                { label: "LOCATION", value: studio.location },
                { label: "HOURS", value: studio.hours },
                { label: "RESPONSE TIME", value: studio.responseTime },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt
                    className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
                  >
                    {item.label}
                  </dt>
                  <dd className="font-sans text-brand-ink/80 text-base">
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
