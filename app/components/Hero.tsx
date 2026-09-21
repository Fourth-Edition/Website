"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { geistMono, ebGaramond } from "../fonts";
import TerminalPanel from "./TerminalPanel";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

interface HeroProps {
  play: boolean;
}

type HeroRefs = {
  headline: React.RefObject<HTMLHeadingElement | null>;
  subheadline: React.RefObject<HTMLParagraphElement | null>;
  cta: React.RefObject<HTMLAnchorElement | null>;
  terminal: React.RefObject<HTMLDivElement | null>;
};

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

  const { locale, isAr } = useLanguage();
  const tHero = dictionary[locale].hero;

  useHeroEntrance(play, {
    headline: headlineRef,
    subheadline: subheadlineRef,
    cta: ctaRef,
    terminal: terminalRef,
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="max-w-2xl">
          <h1
            ref={headlineRef}
            className={`${isAr ? "font-bold font-sans-arabic" : ebGaramond.className} text-brand-light text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.15]`}
          >
            {tHero.headline}
          </h1>

          <p
            ref={subheadlineRef}
            className="font-sans text-brand-slate text-sm sm:text-base md:text-lg leading-relaxed mt-5 md:mt-6 max-w-lg"
          >
            {tHero.subheadline}
          </p>

          <Link
            ref={ctaRef}
            href="/contact"
            className={`${isAr ? "font-bold text-sm" : geistMono.className} inline-block mt-8 md:mt-10 px-6 py-3.5 rounded bg-brand-navy hover:bg-brand-light text-white text-xs tracking-widest transition-colors duration-300 border border-brand-slate/20 hover:border-brand-light shadow-lg w-full sm:w-auto text-center`}
          >
            {tHero.cta}
          </Link>
        </div>

        <div ref={terminalRef} className="hidden md:block">
          <TerminalPanel play={play} />
        </div>
      </div>
    </div>
  );
}
