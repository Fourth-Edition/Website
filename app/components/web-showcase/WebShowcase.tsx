"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BrowserFrame from "./BrowserFrame";
import Dashboard from "./Dashboard";

/**
 * Eases in from below with a slight scale-up — a flatter entrance
 * than the phone mock's 3D tilt, since a wide browser window
 * distorts under rotateY.
 */
function useShowcaseEntrance(wrapperRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    gsap.fromTo(
      wrapper,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);
}

export default function WebShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useShowcaseEntrance(wrapperRef);

  return (
    <div ref={wrapperRef} className="w-full">
      <BrowserFrame>
        <Dashboard />
      </BrowserFrame>
    </div>
  );
}
