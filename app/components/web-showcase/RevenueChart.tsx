"use client";

import { revenue } from "./data";
import { web } from "./theme";

/**
 * Emphasis bar chart: prior months sit in de-emphasis gray, the
 * current month carries the accent hue and its own direct label —
 * one series, one story ("this month"), not eight competing hues.
 */
export default function RevenueChart() {
  const max = Math.max(...revenue.map((p) => p.value));
  const lastIndex = revenue.length - 1;

  return (
    <div className={`rounded-lg border ${web.border} ${web.panel} p-2.5`}>
      <div className="flex items-baseline justify-between mb-2">
        <span className={`text-[11px] font-medium ${web.ink}`}>Revenue</span>
        <span className={`text-[10px] ${web.muted}`}>Last 6 months</span>
      </div>

      <div className="flex items-end gap-2">
        {revenue.map((point, i) => {
          const isCurrent = i === lastIndex;
          const heightPct = (point.value / max) * 100;

          return (
            <div key={point.month} className="group flex-1 min-w-0 flex flex-col items-center">
              {/* Reserved label row, same height whether shown or revealed on
                  hover — keeps the bar row below at a fixed height instead of
                  competing with the label for space. */}
              <div className="h-3.5 flex items-end">
                <span
                  className={`text-[9px] font-medium whitespace-nowrap ${
                    isCurrent ? web.accent : `${web.muted} opacity-0 group-hover:opacity-100 transition-opacity`
                  }`}
                >
                  ${point.value}k
                </span>
              </div>

              {/* Fixed-height track the bar's percentage height resolves against. */}
              <div className="w-full h-11 flex items-end">
                <div
                  className={`w-full max-w-[18px] mx-auto rounded-t ${isCurrent ? "bg-sky-600" : "bg-slate-200"}`}
                  style={{ height: `${heightPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={`flex gap-2 mt-2 pt-2 border-t ${web.border}`}>
        {revenue.map((point, i) => (
          <span
            key={point.month}
            className={`flex-1 text-center text-[9px] ${i === lastIndex ? web.accent : web.faint}`}
          >
            {point.month}
          </span>
        ))}
      </div>
    </div>
  );
}
