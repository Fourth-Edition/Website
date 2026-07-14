import { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
}

/**
 * Browser window chrome: traffic lights + address bar, wrapping the
 * dashboard screen. Kept neutral (graphite) so the hardware doesn't
 * compete with the app's own palette — same approach as the phone
 * mock's bezel.
 */
export default function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/40 bg-neutral-900">
      <div className="flex items-center gap-3 px-3 py-2.5 bg-neutral-800">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
        </div>
        <div className="flex-1 min-w-0 bg-neutral-700/60 rounded-md px-3 py-1 text-center">
          <span className="text-[10px] text-neutral-400 tracking-wide truncate block">
            app.fourthedition.co/dashboard
          </span>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
