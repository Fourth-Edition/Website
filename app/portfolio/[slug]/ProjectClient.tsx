"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "../../components/page/PageShell";
import PageHeader from "../../components/page/PageHeader";
import CtaBlock from "../../components/page/CtaBlock";
import { ebGaramond, geistMono } from "../../fonts";
import type { Project } from "../../data/portfolio";
import { useLanguage } from "../../context/LanguageContext";
import { dictionary } from "../../data/translations";

export default function ProjectClient({ project }: { project: Project }) {
  const { locale, isAr } = useLanguage();
  const tPort = dictionary[locale].portfolio;

  if (!project) notFound();

  const displayTitle = isAr && project.titleAr ? project.titleAr : project.title;
  const displayClient = isAr && project.clientAr ? project.clientAr : project.client;
  const displaySummary = isAr && project.summaryAr ? project.summaryAr : project.summary;
  const displayBody = isAr && project.bodyAr ? project.bodyAr : project.body;
  const displayServices = isAr && project.servicesAr ? project.servicesAr : project.services;
  const displayHighlights = isAr && project.highlightsAr ? project.highlightsAr : project.highlights;
  const displayCategory = isAr && project.categoryAr ? project.categoryAr : project.category;

  return (
    <PageShell>
      <div className="flex flex-col gap-8">
        <Link
          href="/portfolio"
          className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy hover:text-brand-black text-sm tracking-widest transition-colors duration-200 w-fit flex items-center gap-2`}
        >
          <span>{isAr ? "→" : "←"}</span> {tPort.allWork}
        </Link>

        <PageHeader
          eyebrow={`${displayCategory.toUpperCase()} · ${project.year}`}
          headline={displayTitle}
          lede={displaySummary}
        />
      </div>

      {/* Main Cover Banner */}
      {project.coverImage && (
        <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800/80">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="mx-auto px-4 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-md w-full text-center truncate">
              {displayClient} — {displayTitle}
            </div>
          </div>
          <div className="relative w-full aspect-[16/9] max-h-[640px] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={displayTitle}
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover max-h-[640px]"
            />
          </div>
        </div>
      )}

      {/* Metrics Banner */}
      <dl className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 border-y border-brand-slate/25 py-8 md:py-10">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1.5 md:gap-2">
            <dt
              className={`${isAr ? "font-bold text-xs font-sans-arabic" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
            >
              {isAr && metric.labelAr ? metric.labelAr : metric.label}
            </dt>
            <dd
              className={`${ebGaramond.className} text-brand-black text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight font-bold`}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Overview & Story */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
          >
            {tPort.theBrief}
          </p>
          <h2
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            {isAr ? `مطوّر لـ ${displayClient}` : `Engineered for ${displayClient}`}
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 max-w-3xl">
          {displayBody.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-brand-ink/90 text-base md:text-lg lg:text-xl leading-relaxed text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Key Highlights Section */}
      {displayHighlights && displayHighlights.length > 0 && (
        <section className="flex flex-col gap-6 p-8 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
          <h3
            className={`${isAr ? "font-bold text-sm font-sans-arabic" : geistMono.className} text-brand-light text-sm font-semibold tracking-widest uppercase`}
          >
            {tPort.highlightsTitle}
          </h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {displayHighlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-base leading-relaxed">
                <span className="text-amber-400 font-bold select-none">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Interface & System Screenshot Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p
              className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              {tPort.interfaceTitle}
            </p>
            <h3
              className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-black text-3xl md:text-4xl tracking-tight`}
            >
              {isAr ? "عرض الواجهات" : "System Views & Visual Output"}
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {project.galleryImages.map((imgUrl, index) => (
              <div
                key={imgUrl}
                className="group flex flex-col rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white hover:shadow-xl transition-shadow"
              >
                <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{isAr ? `شاشة ${index + 1}` : `View 0${index + 1}`}</span>
                  <span className="text-[10px] uppercase bg-slate-200 px-2 py-0.5 rounded">Screenshot</span>
                </div>
                <Image
                  src={imgUrl}
                  alt={`${displayTitle} screenshot ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services & Stack Details */}
      <section className="flex flex-col gap-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p
              className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              {tPort.servicesProvided}
            </p>
            <ul className="flex flex-col gap-2">
              {displayServices.map((service) => (
                <li
                  key={service}
                  className="font-sans text-brand-ink/90 text-lg flex gap-3 items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" aria-hidden />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p
              className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              {tPort.techStack}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <li
                  key={tool}
                  className={`${geistMono.className} rounded-lg border border-brand-slate/30 px-3.5 py-2 text-brand-navy text-xs tracking-wider font-medium bg-slate-50`}
                >
                  {tool.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBlock label={tPort.ctaLabel} action={tPort.ctaAction} />
    </PageShell>
  );
}
