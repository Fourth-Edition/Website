import { geistMono } from "../../fonts";
import type { StudioValue } from "../../data/about";

/** How the studio works — one card per principle. */
export default function ValueGrid({ values }: { values: StudioValue[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {values.map((value) => (
        <article
          key={value.index}
          className="flex flex-col gap-3 rounded-2xl border border-brand-slate/25 p-7
          hover:border-brand-navy transition-colors duration-300"
        >
          <span
            className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
          >
            {value.index}
          </span>
          <h3 className="font-sans text-brand-black text-xl tracking-tight">
            {value.title}
          </h3>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed text-pretty">
            {value.description}
          </p>
        </article>
      ))}
    </div>
  );
}
