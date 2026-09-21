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
 *
 * On mobile the two words wrap onto separate lines, keeping the
 * typography legible without horizontal overflow.
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

    const nameLetters = letters.querySelectorAll("span[data-letter]");
    const sloganLetters = slogan.querySelectorAll("span[data-letter]");

    const tl = gsap.timeline({
      onComplete: () => setTimeout(onComplete, 200),
    });

    // Company name – each letter flips in like a page turn
    tl.from(nameLetters, {
      rotateX: 90,
      opacity: 0,
      transformOrigin: "50% 100%",
      stagger: 0.03,
      duration: 0.2,
      ease: "power3.out",
    })
      // Slogan – same page flip, slightly faster stagger
      .from(sloganLetters, {
        rotateX: 90,
        opacity: 0,
        transformOrigin: "50% 100%",
        stagger: 0.018,
        duration: 0.18,
        ease: "power3.out",
      });
  }, [onComplete]);
}

/** Renders a word as individual animatable letter spans */
function AnimatedWord({ word }: { word: string }) {
  return (
    <span className="flex" style={{ whiteSpace: "nowrap" }}>
      {word.split("").map((ch, i) => (
        <span key={i} data-letter style={{ display: "inline-block" }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

const COMPANY_WORDS = ["FOURTH", "EDITION"];
const SLOGAN = "Innovating Digital Experiences";

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const lettersRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useIntroAnimation(lettersRef, sloganRef, onComplete);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black overflow-hidden px-4">
      {/* perspective enables the 3D page-flip effect on children */}
      <div style={{ perspective: "600px" }}>
        <div
          ref={lettersRef}
          className="flex flex-wrap justify-center gap-x-[0.25em] gap-y-1 font-serif italic text-white"
          style={{
            fontFamily: "var(--font-eb-garamond)",
            /* clamp: 2.2rem at 320px → 4.5rem at 768px+ */
            fontSize: "clamp(2.2rem, 10vw, 4.5rem)",
            lineHeight: 1.1,
          }}
          aria-label="Fourth Edition"
        >
          {COMPANY_WORDS.map((word) => (
            <AnimatedWord key={word} word={word} />
          ))}
        </div>
      </div>

      <div style={{ perspective: "400px" }}>
        <div
          ref={sloganRef}
          className="mt-3 sm:mt-4 flex flex-wrap justify-center font-sans text-brand-light text-center"
          style={{
            fontFamily: "var(--font-geist-sans)",
            /* clamp: 0.9rem at 320px → 1.5rem at 768px+ */
            fontSize: "clamp(0.9rem, 3.5vw, 1.5rem)",
            lineHeight: 1.4,
            letterSpacing: "0.01em",
          }}
          aria-label="Company slogan"
        >
          {SLOGAN.split("").map((ch, i) => (
            <span key={i} data-letter style={{ display: "inline-block" }}>
              {ch === " " ? "\u00a0" : ch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
