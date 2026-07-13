"use client";

import { useEffect, useState } from "react";
import { geistMono } from "../fonts";

interface TerminalPanelProps {
  /** Gates the loop so it doesn't spin while hidden behind the intro overlay. */
  play: boolean;
}

// Mirrors SERVICES.md's Core Capabilities list.
const BUILD_STEPS = [
  "web app",
  "ui/ux",
  "mobile app",
  "crm/erp",
  "branding",
  "marketing",
];

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const STEP_INTERVAL_MS = 900;
const SPINNER_INTERVAL_MS = 80;

/** Advances through the steps once, then stops on the last one. */
function useBuildLoop(play: boolean) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!play || done) return;
    const id = setInterval(() => {
      setStep((s) => {
        const next = s + 1;
        if (next >= BUILD_STEPS.length) {
          setDone(true);
          return s;
        }
        return next;
      });
    }, STEP_INTERVAL_MS);
    return () => clearInterval(id);
  }, [play, done]);

  return { step, done };
}

function useSpinnerFrame(active: boolean) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % SPINNER_FRAMES.length),
      SPINNER_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [active]);

  return frame;
}

export default function TerminalPanel({ play }: TerminalPanelProps) {
  const { step: activeStep, done } = useBuildLoop(play);
  const spinnerFrame = useSpinnerFrame(play && !done);

  return (
    <div className="rounded-lg border border-brand-slate/30 bg-brand-black overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-brand-slate/30">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>

      <div
        className={`${geistMono.className} p-6 text-xs md:text-sm space-y-3`}
      >
        <p className="text-brand-light">$ fourth edition build</p>

        {BUILD_STEPS.map((step, i) => {
          const isActive = i === activeStep && !done;
          const isPast = i < activeStep || (i === activeStep && done);

          return (
            <div key={step} className="flex items-baseline gap-3">
              <span className="w-3 text-white">
                {isActive ? SPINNER_FRAMES[spinnerFrame] : ""}
              </span>
              <span
                className={
                  isPast || isActive ? "text-white" : "text-brand-slate/25"
                }
              >
                &gt; {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
