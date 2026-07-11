import { geistMono } from "../../fonts";
import { SignalIcon, BatteryIcon } from "./icons";

export default function StatusBar() {
  return (
    <div
      className={`${geistMono.className} flex items-center justify-between px-6 pt-3 pb-1 text-shop-ink text-[10px]`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="w-4 h-3"><SignalIcon /></span>
        <span className="w-6 h-3"><BatteryIcon /></span>
      </div>
    </div>
  );
}
