import { ebGaramond, geistMono } from "../../fonts";
import type { AboutStat } from "../../data/about";

/** Four-up figures row, sitting directly under the page header. */
export default function StatStrip({ stats }: { stats: AboutStat[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-brand-slate/25 py-10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2">
          <dt
            className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
          >
            {stat.label.toUpperCase()}
          </dt>
          <dd
            className={`${ebGaramond.className} text-brand-black text-5xl leading-none tracking-tight`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
