"use client";

import { useMemo, useState } from "react";
import { geistMono } from "../../fonts";
import type { Project, ProjectCategory } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../../context/LanguageContext";
import { dictionary } from "../../data/translations";

type Filter = ProjectCategory | "All";

interface ProjectGridProps {
  projects: Project[];
  categories: Filter[];
}

export default function ProjectGrid({
  projects,
  categories,
}: ProjectGridProps) {
  const [active, setActive] = useState<Filter>("All");
  const { locale, isAr } = useLanguage();
  const tPort = dictionary[locale].portfolio;

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [projects, active]
  );

  const categoryLabels: Record<string, string> = {
    All: tPort.filterAll,
    Web: tPort.filterWeb,
    Enterprise: tPort.filterEnterprise,
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category === active;
          const displayLabel = categoryLabels[category] || category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`${isAr ? "font-bold text-xs" : geistMono.className} rounded px-5 py-2.5 text-xs tracking-widest border transition-colors duration-200 ${
                isActive
                  ? "border-brand-black bg-brand-black text-white"
                  : "border-brand-slate/30 text-brand-navy hover:border-brand-navy"
              }`}
            >
              {displayLabel}
            </button>
          );
        })}

        <span
          className={`${isAr ? "font-bold text-xs font-sans-arabic" : geistMono.className} ${isAr ? "mr-auto" : "ml-auto"} text-brand-navy text-sm font-semibold tracking-widest`}
        >
          {visible.length} {isAr ? "مشروع" : visible.length === 1 ? "PROJECT" : "PROJECTS"}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="font-sans text-brand-ink/80 text-lg">
          {isAr ? "لا توجد مشاريع هنا حالياً" : "Nothing here yet — more work from this practice is on the way."}
        </p>
      )}
    </div>
  );
}
