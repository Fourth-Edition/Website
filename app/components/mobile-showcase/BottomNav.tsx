import { HomeIcon, SearchIcon, BagIcon, ProfileIcon } from "./icons";

const navItems = [
  { label: "Home", Icon: HomeIcon, active: true },
  { label: "Search", Icon: SearchIcon, active: false },
  { label: "Bag", Icon: BagIcon, active: false },
  { label: "Profile", Icon: ProfileIcon, active: false },
] as const;

export default function BottomNav() {
  return (
    <nav className="flex items-center justify-around py-3 border-t border-shop-line bg-shop-bg">
      {navItems.map(({ label, Icon, active }) => (
        <div key={label} className="relative">
          <div
            className={`flex items-center justify-center w-7 h-7 rounded-full ${
              active ? "bg-shop-ink text-shop-bg" : "text-shop-muted"
            }`}
            aria-label={label}
          >
            <div className="w-4 h-4">
              <Icon />
            </div>
          </div>
          {label === "Bag" && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-shop-accent text-shop-bg text-[8px] flex items-center justify-center">
              2
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
