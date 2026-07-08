"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex flex-row justify-between items-center w-full py-4 px-8 md:px-16 transition-all duration-300 ${
        scrolled
          ? "bg-brand-deep/80 backdrop-blur-md border-b border-brand-navy/60 py-3"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-brand-light shadow-[0_0_8px_rgba(238,238,238,0.5)]" />
        <span className="font-serif italic" style={{ fontFamily: 'var(--font-eb-garamond)' }}>
          FOURTH EDITION
        </span>
      </div>

      <div className="flex items-center space-x-6 font-mono text-[10px] tracking-widest text-brand-slate">
        <a
          href="#services"
          className="hover:text-brand-light transition-colors"
        >
          SERVICES_
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded border border-brand-navy/80 hover:border-brand-slate hover:text-brand-light transition-all bg-brand-navy/30"
        >
          GITHUB//
        </a>
      </div>
    </nav>
  );
}
