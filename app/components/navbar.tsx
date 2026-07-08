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
    <nav className={`fixed top-0 left-0 right-0 z-40 flex flex-row justify-between items-center w-full py-4 px-8 md:px-16 transition-all duration-300 ${
      scrolled 
        ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60 py-3" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="flex items-center space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
        <span className="font-serif text-sm tracking-[0.2em] font-medium text-zinc-100">
          FOURTH EDITION
        </span>
      </div>

      <div className="flex items-center space-x-6 font-mono text-[10px] tracking-widest text-zinc-400">
        <a href="#core" className="hover:text-purple-400 transition-colors">CORE_</a>
        <a href="#docs" className="hover:text-purple-400 transition-colors">DOCS_</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="px-3 py-1 rounded border border-zinc-800 hover:border-purple-500/40 hover:text-white transition-all bg-zinc-900/40">
          GITHUB//
        </a>
      </div>
    </nav>
  );
}
