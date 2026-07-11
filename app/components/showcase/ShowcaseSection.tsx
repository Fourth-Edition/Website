import { ReactNode } from "react";
import { geistMono } from "../../fonts";
import GlowUpBorder from "@/components/BorderGlow";

interface ShowcaseSectionProps {
  children: ReactNode;
}

/**
 * Section housing every ShowcaseCard (mobile, web, ...). Lives below
 * the hero — not inside it.
 */
export default function ShowcaseSection({ children }: ShowcaseSectionProps) {
  return (
    <section className="w-full min-h-screen py-20  px-6 flex flex-col items-center justify-center gap-14">
     
        <p
          className={`${geistMono.className} text-brand-slate text-[10px] tracking-widest`}
        >
          WHAT WE BUILD
        </p>
        <div className="flex flex-wrap justify-center gap-16 w-full max-w-5xl">
          {children}
        </div>
    </section>
  );
}
