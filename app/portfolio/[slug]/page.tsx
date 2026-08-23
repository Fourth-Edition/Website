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
          className={`${geistMono.className} text-brand-navy hover:text-brand-black text-sm tracking-widest transition-colors duration-200 w-fit`}
        >
          ← ALL WORK
        </Link>

        <PageHeader
          eyebrow={`${project.category.toUpperCase()} · ${project.year}`}
          headline={project.title}
          lede={project.summary}
        />
      </div>

      <dl className="grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-brand-slate/25 py-10">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-2">
            <dt
              className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
            >
              {metric.label.toUpperCase()}
            </dt>
            <dd
              className={`${ebGaramond.className} text-brand-black text-5xl leading-none tracking-tight`}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            THE BRIEF
          </p>
          <h2
            className={`${ebGaramond.className} text-brand-black text-4xl md:text-5xl leading-tight tracking-tight text-balance`}
          >
            Built for {project.client}
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          {project.body.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-brand-ink/80 text-lg md:text-xl leading-relaxed text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <p
          className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
        >
          DETAILS
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p
              className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
            >
              SERVICES
            </p>
            <ul className="flex flex-col gap-2">
              {project.services.map((service) => (
                <li
                  key={service}
                  className="font-sans text-brand-ink/80 text-lg flex gap-3"
                >
                  <span className="text-brand-light select-none" aria-hidden>
                    —
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p
              className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
            >
              STACK
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <li
                  key={tool}
                  className={`${geistMono.className} rounded border border-brand-slate/30 px-4 py-2.5 text-brand-navy text-sm tracking-widest`}
                >
                  {tool.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBlock label="HAVE A SIMILAR PROBLEM?" action="START A PROJECT" />
    </PageShell>
  );
}
