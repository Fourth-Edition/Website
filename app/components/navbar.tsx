"use client";

import { useEffect, useState, useRef } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
] as const;

const CHARS = "ABCDEFGHIJKLMN23456789";

/**
 * On hover, each letter scrambles through random characters
 * before resolving back to the real letter — mechanical, deliberate.
 */
function ScrambleLink({ label, href }: { label: string; href: string }) {
  const [display, setDisplay] = useState(label);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scramble() {
    const iterations = label.length * 3;
    let count = 0;

    const tick = () => {
      setDisplay(
        label
          .split("")
          .map((char, i) => {
            // Resolve letters left-to-right as iterations progress
            if (char === " ") return " ";
            if (i < Math.floor(count / 3)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      count++;
      if (count <= iterations) {
        frameRef.current = setTimeout(tick, 40);
      } else {
        setDisplay(label);
      }
    };

    tick();
  }

  function reset() {
    if (frameRef.current) clearTimeout(frameRef.current);
    setDisplay(label);
  }

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
      {display}
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
        className="font-serif italic text-lg text-brand-light tracking-wide"
        style={{ fontFamily: "var(--font-eb-garamond)" }}
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
