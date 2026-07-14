import { deals } from "./data";
import { web, statusStyle } from "./theme";

export default function DealsList() {
  return (
    <div className={`rounded-lg border ${web.border} ${web.panel} p-2.5`}>
      <span className={`text-[11px] font-medium ${web.ink}`}>Recent deals</span>

      <div className={`mt-1.5 divide-y ${web.divide}`}>
        {deals.map((deal) => {
          const s = statusStyle[deal.status];
          return (
            <div key={deal.company} className="flex items-center justify-between py-1.5">
              <div className="flex flex-col min-w-0">
                <span className={`text-[11px] font-medium ${web.ink} truncate`}>{deal.company}</span>
                <span className={`text-[10px] ${web.muted}`}>{deal.contact}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[11px] font-medium ${web.ink} tabular-nums`}>{deal.value}</span>
                <span className={`flex items-center gap-1 text-[9px] font-medium ${s.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
