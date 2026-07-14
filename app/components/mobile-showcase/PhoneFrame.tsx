import { ReactNode } from "react";
import { shop } from "./theme";

interface PhoneFrameProps {
  children: ReactNode;
}

/**
 * Physical device chrome: bezel, side buttons, and a notch clipping
 * the screen content passed in as children. Kept neutral (graphite)
 * so the hardware doesn't compete with the app's own palette.
 */
export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative w-[260px] h-[540px] mx-auto">
      {/* Ambient glow beneath the device, tinted to the app's accent */}
      <div className={`absolute inset-x-4 top-10 bottom-0 rounded-[3rem] ${shop.accentGlow} blur-3xl -z-10`} />

      {/* Side buttons */}
      <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-neutral-500/50 rounded-l" />
      <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-neutral-500/50 rounded-l" />
      <div className="absolute -right-[2px] top-28 w-[3px] h-16 bg-neutral-500/50 rounded-r" />

      {/* Bezel */}
      <div className="relative w-full h-full rounded-[2.75rem] bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 shadow-2xl shadow-black/60 p-2.5">
        {/* Screen */}
        <div className={`relative w-full h-full rounded-[2.1rem] overflow-hidden ${shop.bg}`}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-b-xl z-10" />
          {children}
        </div>
      </div>
    </div>
  );
}
