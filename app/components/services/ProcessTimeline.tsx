import { geistMono } from "../../fonts";
import type { ProcessStep } from "../../data/services";

/**
 * Vertical run of process steps, connected by a hairline. The line is
 * drawn on the list rather than per-item so it doesn't overshoot the last step.
 */
export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-brand-slate/30 pl-8">
      {steps.map((step) => (
        <li key={step.step} className="relative flex flex-col gap-2">
          <span
            className="absolute -left-[2.05rem] top-3 h-2 w-2 rounded-full bg-brand-light
            ring-4 ring-white/70"
            aria-hidden
          />
          <div className="flex items-baseline gap-4">
            <span
              className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
            >
              {step.step}
            </span>
            <h3 className="font-sans text-brand-black text-xl tracking-tight">
              {step.title}
            </h3>
          </div>
          <p className="font-sans text-brand-ink/80 text-lg leading-relaxed max-w-2xl text-pretty">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
