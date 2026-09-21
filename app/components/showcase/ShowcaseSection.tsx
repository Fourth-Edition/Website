import { ReactNode } from "react";
import { geistMono } from "../../fonts";

interface ShowcaseSectionProps {
  children: ReactNode;
}

/**
 * Section housing every ShowcaseCard (mobile, web, ...). Lives below
 * the hero — not inside it.
 */
export default function ShowcaseSection({ children }: ShowcaseSectionProps) {
  return (
    <section className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center gap-10 md:gap-14">
     
        <p
          className={`${geistMono.className} text-brand-slate text-[10px] tracking-widest`}
        >
          WHAT WE BUILD
        </p>
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center gap-6 md:gap-16 w-full max-w-5xl">
          {children}
        </div>
    </section>
  );
}
