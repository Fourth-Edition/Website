"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { geistMono } from "../../fonts";
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
    <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-3xl">
      <div style={{ perspective: "1200px" }} className="shrink-0">
        <div ref={wrapperRef} className="animate-phone-float">
          <PhoneFrame>
            <AppScreen />
          </PhoneFrame>
        </div>
      </div>

      <div className="text-left space-y-3 max-w-xs">
        <p className={`${geistMono.className} text-brand-slate text-[10px] tracking-widest`}>
          MOBILE APPLICATIONS
        </p>
        <p className="text-brand-light text-sm md:text-base leading-relaxed font-light">
          A sample shopping app screen — one example of the native and
          cross-platform mobile products we build for iOS and Android.
        </p>
      </div>
    </div>
  );
}
