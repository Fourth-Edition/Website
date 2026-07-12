"use client";

import { ReactNode, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { geistMono } from "../../fonts";
import { useScramble } from "../../hooks/useScramble";

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseCardProps {
  label: string;
  description: string;
  ctaText: string;
  href?: string;
  children: ReactNode;
}

/**
 * Wraps a single product mock (mobile, web, ...) and reveals its
 * service label as the section scrolls into view. Reusable across
 * every mock in the showcase section — the mock itself only needs
 * to render its visual.
 *
 * Hovering highlights the card border and surfaces a short statement
 * next to an external-link icon, signalling that the card navigates away.
 */
function useScrollReveal(
  triggerRef: React.RefObject<HTMLAnchorElement | null>,
  onEnter: () => void
) {
  useGSAP(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      once: true,
      onEnter,
    });

    return () => trigger.kill();
  }, []);
}

export default function ShowcaseCard({
  label,
  description,
  ctaText,
  href = "mailto:hello@fourthedition.co",
  children,
}: ShowcaseCardProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const { text, scramble } = useScramble(label);
  useScrollReveal(containerRef, scramble);

  return (
    // <GlowUpBorder
    //   glowColor="8 50 55"
    //   colors={["#4A1D15", "#8C3B2E", "#8F7770", "#EDE6E3"]}
    //   backgroundColor="#160A08"
    // >
    <a
      ref={containerRef}
      href={href}
      aria-label={ctaText}
      title={ctaText}
      className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full rounded-3xl
      border border-transparent hover:border-brand-slate/40 transition-colors duration-300 p-6"
    >
      <div className="shrink-0">{children}</div>

      <div className="text-center md:text-left md:flex-1">
        <p
          className={`${geistMono.className} relative inline-block text-brand-light text-sm tracking-widest
          after:absolute after:bottom-0 after:left-0
          after:h-px after:w-full after:origin-left after:scale-x-0
          after:bg-brand-slate
          after:transition-transform after:duration-300 after:ease-out
          group-hover:after:scale-x-100`}
        >
          {text}
        </p>
        <p className="text-brand-slate text-sm md:text-base leading-relaxed mt-3">
          {description}
        </p>
      </div>

      <div
        className="absolute top-4 right-4 flex items-center gap-2 opacity-0 -translate-y-1 translate-x-1
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
      >
        <span
          className={`${geistMono.className} text-brand-slate text-[10px] tracking-wide whitespace-nowrap`}
        >
          {ctaText}
        </span>
        <span className="w-4 h-4 text-brand-slate shrink-0">
          <ExternalLink className="w-full h-full" />
        </span>
      </div>
    </a>
    // </GlowUpBorder>
  );
}
