import Link from "next/link";
import { geistMono } from "../../fonts";
import type { Project } from "../../data/portfolio";

/** Card linking through to /portfolio/[slug]. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-slate/25 overflow-hidden bg-white/50 backdrop-blur-sm
      hover:border-brand-navy hover:shadow-xl transition-all duration-300"
    >
      {/* Cover Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-brand-slate/20">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Category Pill Overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`${geistMono.className} text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-slate-100 border border-slate-700/50 backdrop-blur-md shadow-sm`}
          >
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Year Pill Overlay */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`${geistMono.className} text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-300 backdrop-blur-md`}
          >
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7 gap-5">
        <div className="flex flex-col gap-1.5">
          <p
            className={`${geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
          >
            {project.client}
          </p>
          <h3
            className="font-sans text-brand-black text-2xl font-semibold tracking-tight relative inline-block w-fit
            after:absolute after:bottom-0 after:left-0
            after:h-px after:w-full after:origin-left after:scale-x-0
            after:bg-brand-navy
            after:transition-transform after:duration-300 after:ease-out
            group-hover:after:scale-x-100"
          >
            {project.title}
          </h3>
        </div>

        <p className="font-sans text-brand-ink/80 text-base leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`${geistMono.className} text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200/80`}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              className={`${geistMono.className} text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium`}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <dl className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-4 border-t border-brand-slate/20">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5">
              <dt
                className={`${geistMono.className} text-brand-navy/70 text-[10px] font-semibold tracking-wider uppercase`}
              >
                {metric.label}
              </dt>
              <dd className="font-sans text-brand-black text-base font-semibold">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}
