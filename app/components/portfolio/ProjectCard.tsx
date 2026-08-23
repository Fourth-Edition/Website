import Link from "next/link";
import { geistMono } from "../../fonts";
import type { Project } from "../../data/portfolio";

/** Card linking through to /portfolio/[slug]. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col gap-5 rounded-2xl border border-brand-slate/25 p-7
      hover:border-brand-navy transition-colors duration-300"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span
          className={`${geistMono.className} text-brand-navy text-sm tracking-widest`}
        >
          {project.category.toUpperCase()}
        </span>
        <span
          className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
        >
          {project.year}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="font-sans text-brand-black text-2xl tracking-tight relative inline-block w-fit
          after:absolute after:bottom-0 after:left-0
          after:h-px after:w-full after:origin-left after:scale-x-0
          after:bg-brand-navy
          after:transition-transform after:duration-300 after:ease-out
          group-hover:after:scale-x-100"
        >
          {project.title}
        </h3>
        <p
          className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
        >
          {project.client.toUpperCase()}
        </p>
      </div>

      <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
        {project.summary}
      </p>

      <dl className="flex flex-wrap gap-x-8 gap-y-3 mt-auto pt-4 border-t border-brand-slate/20">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <dt
              className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
            >
              {metric.label.toUpperCase()}
            </dt>
            <dd className="font-sans text-brand-black text-lg">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </Link>
  );
}
