"use client";

import { useMemo, useState } from "react";
import { geistMono } from "../../fonts";
import type { Project, ProjectCategory } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";

type Filter = ProjectCategory | "All";

interface ProjectGridProps {
  projects: Project[];
  categories: Filter[];
}

/**
 * Filterable case-study grid. Filtering is client-side over data already
 * in the payload — no round trip, no URL state (yet).
 */
export default function ProjectGrid({
  projects,
  categories,
}: ProjectGridProps) {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [projects, active]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`${geistMono.className} rounded px-5 py-3 text-sm tracking-widest border transition-colors duration-200 ${
                isActive
                  ? "border-brand-black bg-brand-black text-white"
                  : "border-brand-slate/30 text-brand-navy hover:border-brand-navy"
              }`}
            >
              {category.toUpperCase()}
            </button>
          );
        })}

        <span
          className={`${geistMono.className} ml-auto text-brand-navy text-base font-semibold tracking-widest`}
        >
          {visible.length} {visible.length === 1 ? "PROJECT" : "PROJECTS"}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="font-sans text-brand-ink/80 text-lg">
          Nothing here yet — more work from this practice is on the way.
        </p>
      )}
    </div>
  );
}
