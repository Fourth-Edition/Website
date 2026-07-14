import {
  LayoutDashboard,
  Users,
  Handshake,
  BarChart3,
  Settings,
} from "lucide-react";
import { web } from "./theme";

const navItems = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Contacts", Icon: Users, active: false },
  { label: "Deals", Icon: Handshake, active: false },
  { label: "Reports", Icon: BarChart3, active: false },
  { label: "Settings", Icon: Settings, active: false },
] as const;

export default function Sidebar() {
  return (
    <aside
      className={`hidden sm:flex flex-col w-28 shrink-0 border-r ${web.border} ${web.panel} py-2.5`}
    >
      <div
        className={`flex items-center gap-1.5 px-3 pb-2.5 mb-1.5  ${web.border}`}
      >
        <span className={`w-5 h-5 rounded ${web.accentBg}`} />
        <span className={`text-xs font-medium ${web.ink}`}>Pipeline</span>
      </div>

      <nav className="flex flex-col gap-0.5 px-2">
        {navItems.map(({ label, Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 px-2 py-1 rounded-md text-[10px] font-medium ${
              active ? web.navActive : web.navIdle
            }`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.8} />
            <span className="min-w-0 truncate">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
