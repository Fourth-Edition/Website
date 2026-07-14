import { web } from "./theme";
import type { Stat } from "./data";

/** 12-point sparkLine in the de-emphasis gray, current period marked in the accent. */
function SparkLine({ trend }: { trend: number[] }) {
  const w = 40;
  const h = 14;
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const range = max - min || 1;

  const coords = trend.map((v, i) => [
    (i / (trend.length - 1)) * w,
    h - ((v - min) / range) * h,
  ]);
  const points = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg width={w} height={h + 6} viewBox={`0 0 ${w} ${h + 6}`} className="overflow-visible shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-300"
      />
      <circle cx={lastX} cy={lastY} r={2.5} className="fill-sky-600 stroke-white" strokeWidth={1.5} />
    </svg>
  );
}

export default function StatCard({ label, value, delta, deltaUp, trend }: Stat) {
  return (
    <div className={`rounded-lg border ${web.border} ${web.panel} p-2.5 flex flex-col gap-1.5`}>
      <span className={`text-[9px] ${web.muted} truncate`}>{label}</span>
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex flex-col min-w-0">
          <span className={`text-sm font-semibold ${web.ink} truncate`}>{value}</span>
          <span className={`text-[9px] font-medium ${deltaUp ? "text-emerald-600" : "text-rose-600"}`}>
            {delta}
          </span>
        </div>
        <SparkLine trend={trend} />
      </div>
    </div>
  );
}
