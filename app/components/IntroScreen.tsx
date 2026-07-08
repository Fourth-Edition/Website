"use client";

import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface IntroScreenProps {
  onComplete: () => void;
}

/**
 * Each letter flips in like a page turning — rotateX from 90deg to 0,
 * giving the illusion of a physical book/page flip.
 * Perspective is set on the parent container for the 3D effect.
 */
function useIntroAnimation(
  lettersRef: RefObject<HTMLDivElement | null>,
  sloganRef: RefObject<HTMLDivElement | null>,
  onComplete: () => void
) {
  useGSAP(() => {
    const letters = lettersRef.current;
    const slogan = sloganRef.current;

    if (!letters || !slogan) return;

    const nameLetters = letters.querySelectorAll("span");
    const sloganLetters = slogan.querySelectorAll("span");

    const tl = gsap.timeline({
      onComplete: () => setTimeout(onComplete, 300),
    });

    // Company name – each letter flips in like a page turn
    tl.from(nameLetters, {
      rotateX: 90,
      opacity: 0,
      transformOrigin: "50% 100%", // flip from the bottom edge
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
    })
      // Slogan – same page flip, slightly faster stagger
      .from(
        sloganLetters,
        {
          rotateX: 90,
          opacity: 0,
          transformOrigin: "50% 100%",
          stagger: 0.04,
          duration: 0.4,
          ease: "power3.out",
        },
        "+=0.2"
      );
  }, [onComplete]);
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const lettersRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useIntroAnimation(lettersRef, sloganRef, onComplete);

  const companyName = "FOURTH EDITION";
  const slogan = "Innovating Digital Experiences";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-deep overflow-hidden">
      {/* perspective enables the 3D page-flip effect on children */}
      <div style={{ perspective: "600px" }}>
        <div
          ref={lettersRef}
          className="flex space-x-1 text-5xl md:text-7xl font-serif italic"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
          aria-label="Company name"
        >
          {companyName.split("").map((ch, i) => (
            <span key={i} style={{ display: "inline-block" }}>
              {ch}
            </span>
          ))}
        </div>
      </div>

      <div style={{ perspective: "400px" }}>
        <div
          ref={sloganRef}
          className="mt-4 text-xl md:text-2xl font-sans text-brand-light"
          style={{ fontFamily: "var(--font-geist-sans)" }}
          aria-label="Company slogan"
        >
          {slogan.split("").map((ch, i) => (
            <span key={i} style={{ display: "inline-block" }}>
              {ch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
