"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
] as const;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center  py-3 justify-between px-8 md:px-16 transition-all duration-300 ${
        scrolled
          ? "bg-brand-deep/80 backdrop-blur-md border-b py-5 border-brand-navy/60 "
          : "bg-transparent border-b border-transparent"
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
            <a
              href={href}
              className="text-sm font-sans text-brand-slate hover:text-brand-light transition-colors duration-200"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
