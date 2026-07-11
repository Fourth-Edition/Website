"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PhoneFrame from "./PhoneFrame";
import AppScreen from "./AppScreen";

/**
 * Phone eases in from a slight 3D tilt to rest, then settles into a
 * slow perpetual float — same restrained motion language as the intro.
 */
function useShowcaseEntrance(wrapperRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    gsap.fromTo(
      wrapper,
      { opacity: 0, y: 40, rotateY: -18 },
      { opacity: 1, y: 0, rotateY: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);
}

export default function MobileShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useShowcaseEntrance(wrapperRef);

  return (
    <div style={{ perspective: "1200px" }}>
      <div ref={wrapperRef} className="animate-phone-float">
        <PhoneFrame>
          <AppScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}
