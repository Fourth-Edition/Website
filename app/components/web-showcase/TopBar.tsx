import { Search, Bell } from "lucide-react";
import { web } from "./theme";

export default function TopBar() {
  return (
    <header className={`flex items-center justify-between gap-3 px-3 py-2 border-b ${web.border} ${web.panel}`}>
      <div className={`flex items-center gap-1.5 flex-1 min-w-0 px-2.5 py-1.5 rounded-md ${web.appBg}`}>
        <Search className={`w-3 h-3 ${web.faint} shrink-0`} strokeWidth={2} />
        <span className={`min-w-0 truncate text-[10px] ${web.faint}`}>Search contacts, deals…</span>
      </div>

      <div className="flex items-center gap-2.5 shrink-0">
        <Bell className={`w-3.5 h-3.5 ${web.muted}`} strokeWidth={1.8} />
        <span
          className={`w-6 h-6 rounded-full ${web.accentBg} ${web.onAccent} text-[10px] font-medium flex items-center justify-center`}
        >
          JD
        </span>
      </div>
    </header>
  );
}
