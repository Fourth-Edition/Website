import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../components/page/PageShell";
import PageHeader from "../../components/page/PageHeader";
import CtaBlock from "../../components/page/CtaBlock";
import { ebGaramond, geistMono } from "../../fonts";
import { getProject, projects } from "../../data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Prerender every case study at build time — the list is static. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found — Fourth Edition" };

  return {
    title: `${project.title} — Fourth Edition`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <PageShell>
      <div className="flex flex-col gap-8">
        <Link
          href="/portfolio"
          className={`${geistMono.className} text-brand-navy hover:text-brand-black text-sm tracking-widest transition-colors duration-200 w-fit flex items-center gap-2`}
        >
          <span>←</span> ALL WORK
        </Link>

        <PageHeader
          eyebrow={`${project.category.toUpperCase()} · ${project.year}`}
          headline={project.title}
          lede={project.summary}
        />
      </div>

      {/* Main Cover Banner */}
      {project.coverImage && (
        <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          {/* Browser Window Header Mockup */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800/80">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="mx-auto px-4 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-md w-full text-center truncate">
              {project.client} — {project.title}
            </div>
          </div>
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[640px]"
          />
        </div>
      )}

      {/* Metrics Banner */}
      <dl className="grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-brand-slate/25 py-10">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-2">
            <dt
              className={`${geistMono.className} text-brand-navy text-sm md:text-base font-semibold tracking-widest uppercase`}
            >
              {metric.label}
            </dt>
            <dd
              className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-none tracking-tight font-bold`}
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
            className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
          >
            THE BRIEF & ARCHITECTURE
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-3xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Engineered for {project.client}
          </h2>
        </div>

        <div className="flex flex-col gap-5 max-w-3xl">
          {project.body.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-brand-ink/90 text-lg md:text-xl leading-relaxed text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Key Highlights Section */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="flex flex-col gap-6 p-8 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
          <h3
            className={`${geistMono.className} text-brand-light text-sm font-semibold tracking-widest uppercase`}
          >
            KEY HIGHLIGHTS & ARCHITECTURAL FEATURES
          </h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.highlights.map((highlight, idx) => (
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
              className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              INTERFACE SHOWCASE
            </p>
            <h3
              className={`${ebGaramond.className} text-brand-black text-3xl md:text-4xl tracking-tight`}
            >
              System Views & Visual Output
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {project.galleryImages.map((imgUrl, index) => (
              <div
                key={imgUrl}
                className="group flex flex-col rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white hover:shadow-xl transition-shadow"
              >
                <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>View 0{index + 1}</span>
                  <span className="text-[10px] uppercase bg-slate-200 px-2 py-0.5 rounded">Screenshot</span>
                </div>
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services & Stack Details */}
      <section className="flex flex-col gap-8">
        <p
          className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
        >
          DELIVERY & STACK
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p
              className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              SERVICES PROVIDED
            </p>
            <ul className="flex flex-col gap-2">
              {project.services.map((service) => (
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
              className={`${geistMono.className} text-brand-navy text-sm font-semibold tracking-widest uppercase`}
            >
              TECHNOLOGY STACK
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

      <CtaBlock label="HAVE A SIMILAR PROJECT IN MIND?" action="START A PROJECT" />
    </PageShell>
  );
}
