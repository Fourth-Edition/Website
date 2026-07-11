"use client";

import { useEffect, useState } from "react";
import { geistMono } from "../fonts";
import { useScramble } from "../hooks/useScramble";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
] as const;

/**
 * On hover, each letter scrambles through random characters
 * before resolving back to the real letter — mechanical, deliberate.
 */
function ScrambleLink({ label, href }: { label: string; href: string }) {
  const { text, scramble, reset } = useScramble(label);

  return (
    <a
      href={href}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className="
        relative text-sm font-mono text-brand-slate
        hover:text-brand-light tracking-widest
        transition-colors duration-150
        after:absolute after:bottom-0 after:left-0
        after:h-px after:w-full after:origin-left after:scale-x-0
        after:bg-brand-light
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100
      "
    >
      {text}
    </a>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-brand-black/80 backdrop-blur-md border-b border-brand-navy/60"
          : "py-5 bg-transparent"
      }`}
    >
      {/* Brand */}
      <a
        href="/"
        className={`${geistMono.className} text-lg text-brand-light tracking-wide`}
      >
        Fourth Edition
      </a>

      {/* Nav links */}
      <ul className="flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <ScrambleLink label={label} href={href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
