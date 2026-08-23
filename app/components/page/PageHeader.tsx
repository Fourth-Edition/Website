"use client";

import { useEffect } from "react";
import { ebGaramond, geistMono } from "../../fonts";
import { useScramble } from "../../hooks/useScramble";

interface PageHeaderProps {
  /** Short monospace label above the headline, e.g. "SERVICES". */
  eyebrow: string;
  headline: string;
  /** Opening line under the headline. */
  lede?: string;
}

/**
 * Route-level header. The eyebrow scrambles once on mount, echoing the
 * navbar hover treatment so arriving on a page feels like the same site.
 */
export default function PageHeader({
  eyebrow,
  headline,
  lede,
}: PageHeaderProps) {
  const { text, scramble } = useScramble(eyebrow);

  useEffect(() => {
    scramble();
    // Runs once per mount — scramble is stable enough for a single reveal.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="flex flex-col gap-6 max-w-4xl">
      <p
        className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
      >
        {text}
      </p>

      {/* Dark ink, not brand-light — the light blue washes out against the
          page background once the type gets this large. */}
      <h1
        className={`${ebGaramond.className} text-brand-black text-6xl md:text-8xl leading-[1.05] tracking-tight text-balance`}
      >
        {headline}
      </h1>

      {lede && (
        <p className="font-sans text-brand-ink/80 text-lg md:text-xl leading-relaxed max-w-2xl text-pretty">
          {lede}
        </p>
      )}
    </header>
  );
}
