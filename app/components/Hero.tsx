"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { geistMono, ebGaramond } from "../fonts";
import TerminalPanel from "./TerminalPanel";

interface HeroProps {
  /** Flips true once the intro overlay has cleared and the hero is actually visible. */
  play: boolean;
}

type HeroRefs = {
  headline: React.RefObject<HTMLHeadingElement | null>;
  subheadline: React.RefObject<HTMLParagraphElement | null>;
  cta: React.RefObject<HTMLAnchorElement | null>;
  terminal: React.RefObject<HTMLDivElement | null>;
};

/**
 * One entrance, staggered top to bottom. Gated on `play` rather than
 * mount, since the hero mounts (hidden) well before the intro overlay
 * clears — animating on mount would finish before anyone could see it.
 */
function useHeroEntrance(play: boolean, refs: HeroRefs) {
  useGSAP(
    () => {
      if (!play) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(refs.headline.current, { opacity: 0, y: 28, duration: 0.7 }, "-=0.3")
        .from(
          refs.subheadline.current,
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.35"
        )
        .from(refs.cta.current, { opacity: 0, y: 12, duration: 0.5 }, "-=0.3")
        .from(
          refs.terminal.current,
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.3"
        );
    },
    { dependencies: [play] }
  );
}

export default function Hero({ play }: HeroProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useHeroEntrance(play, {
    headline: headlineRef,
    subheadline: subheadlineRef,
    cta: ctaRef,
    terminal: terminalRef,
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 py-24">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-2xl">
          <h1
            ref={headlineRef}
            className={`${ebGaramond.className} text-brand-light text-4xl md:text-6xl lg:text-7xl leading-[1.1]`}
          >
            We don’t ship first drafts.
          </h1>

          <p
            ref={subheadlineRef}
            className="font-sans text-brand-slate text-sm md:text-base leading-relaxed mt-6 max-w-md"
          >
            Fourth Edition designs and engineers websites, mobile apps, and
            internal systems for companies that expect their software to perform.
          </p>

          <a
            ref={ctaRef}
            href="mailto:hello@fourthedition.co"
            className={`${geistMono.className} inline-block mt-10 px-6 py-3 rounded bg-brand-navy hover:bg-brand-light text-white text-xs tracking-widest transition-colors duration-300 border border-brand-slate/20 hover:border-brand-light`}
          >
            START A PROJECT
          </a>
        </div>

        <div ref={terminalRef} className="hidden md:block">
          <TerminalPanel play={play} />
        </div>
      </div>
    </div>
  );
}
