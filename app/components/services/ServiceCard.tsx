import { geistMono } from "../../fonts";
import type { Service } from "../../data/services";

/** One capability from `services` — index, summary, and what ships. */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className="group flex flex-col gap-5 rounded-2xl border border-brand-slate/25 p-7
      hover:border-brand-navy transition-colors duration-300"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span
          className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
        >
          {service.index}
        </span>
        <span
          className={`${geistMono.className} text-brand-slate text-sm tracking-widest`}
        >
          {service.timeline}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-brand-black text-2xl tracking-tight">
          {service.title}
        </h3>
        <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
          {service.summary}
        </p>
      </div>

      <ul className="flex flex-col gap-2 mt-auto pt-2">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="font-sans text-brand-ink/75 text-base leading-relaxed flex gap-3"
          >
            <span className="text-brand-light select-none" aria-hidden>
              —
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p
        className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest border-t border-brand-slate/20 pt-4`}
      >
        FROM {service.startingAt.toUpperCase()}
      </p>
    </article>
  );
}
