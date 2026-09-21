"use client";

import { useEffect, useState } from "react";
import { geistMono } from "../fonts";
import { useLanguage } from "../context/LanguageContext";

interface TerminalPanelProps {
  play: boolean;
}

const EN_BUILD_STEPS = [
  "web app",
  "ui/ux",
  "mobile app",
  "crm/erp",
  "branding",
  "marketing",
];

const AR_BUILD_STEPS = [
  "مواقع وتطبيقات الويب",
  "تصميم الواجهات وتجربة المستخدم",
  "تطبيقات الجوال",
  "أنظمة المؤسسات والشركات",
  "الهوية البصرية والعلامة التجارية",
  "التسويق الرقمي والنمو",
];

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const STEP_INTERVAL_MS = 900;
const SPINNER_INTERVAL_MS = 80;

function useBuildLoop(play: boolean, stepsLength: number) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!play || done) return;
    const id = setInterval(() => {
      setStep((s) => {
        const next = s + 1;
        if (next >= stepsLength) {
          setDone(true);
          return s;
        }
        return next;
      });
    }, STEP_INTERVAL_MS);
    return () => clearInterval(id);
  }, [play, done, stepsLength]);

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
  const { isAr } = useLanguage();
  const buildSteps = isAr ? AR_BUILD_STEPS : EN_BUILD_STEPS;
  
  const { step: activeStep, done } = useBuildLoop(play, buildSteps.length);
  const spinnerFrame = useSpinnerFrame(play && !done);

  return (
    <div className="rounded-lg border border-brand-slate/30 bg-brand-black overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-brand-slate/30 bg-slate-900/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>

      <div
        className={`${isAr ? "font-bold text-xs font-sans-arabic" : geistMono.className} p-6 text-xs md:text-sm space-y-3`}
      >
        <p className="text-brand-light font-mono">
          $ fourth edition build {isAr ? "--lang=ar" : ""}
        </p>

        {buildSteps.map((step, i) => {
          const isActive = i === activeStep && !done;
          const isPast = i < activeStep || (i === activeStep && done);

          return (
            <div key={step} className="flex items-baseline gap-3">
              <span className="w-3 text-white">
                {isActive ? SPINNER_FRAMES[spinnerFrame] : ""}
              </span>
              <span
                className={
                  isPast || isActive ? "text-white font-medium" : "text-brand-slate/35"
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
