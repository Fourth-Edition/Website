import { geistMono } from "../../fonts";
import type { Milestone } from "../../data/about";

/** Studio history, year on the left, milestone on the right. */
export default function TimelineList({
  milestones,
}: {
  milestones: Milestone[];
}) {
  return (
    <ol className="flex flex-col">
      {milestones.map((milestone) => (
        <li
          key={milestone.year}
          className="grid md:grid-cols-[7rem_1fr] gap-2 md:gap-8 border-t border-brand-slate/25 py-7
          first:border-t-0 first:pt-0"
        >
          <span
            className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest md:pt-2`}
          >
            {milestone.year}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="font-sans text-brand-black text-xl tracking-tight">
              {milestone.title}
            </h3>
            <p className="font-sans text-brand-ink/80 text-lg leading-relaxed max-w-2xl text-pretty">
              {milestone.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
