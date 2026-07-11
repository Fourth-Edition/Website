import { BackIcon, HeartIcon } from "./icons";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-1 pb-2 text-shop-ink">
      <div className="w-5 h-5">
        <BackIcon />
      </div>
      <span className="text-xs tracking-wide">Product</span>
      <div className="w-5 h-5">
        <HeartIcon />
      </div>
    </div>
  );
}
