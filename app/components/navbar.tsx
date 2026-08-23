"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { geistMono } from "../fonts";
import { useScramble } from "../hooks/useScramble";
import { navLinks } from "../data/nav";

/**
 * On hover, each letter scrambles through random characters
 * before resolving back to the real letter — mechanical, deliberate.
 */
function ScrambleLink({
  label,
  href,
  scrolled,
  active,
}: {
  label: string;
  href: string;
  scrolled: boolean;
  active: boolean;
}) {
  const { text, scramble, reset } = useScramble(label);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={`
        relative text-sm font-mono tracking-widest
        transition-colors duration-150
        after:absolute after:bottom-0 after:left-0
        after:h-px after:w-full after:origin-left
        after:bg-brand-slate
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100
        ${active ? "after:scale-x-100" : "after:scale-x-0"}
        ${
          scrolled
            ? "text-gray-300 hover:text-white after:bg-white"
            : "text-brand-slate "
        }
        ${active && !scrolled ? "text-brand-light" : ""}
        ${active && scrolled ? "text-white" : ""}
      `}
    >
      {text}
    </Link>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 transition-all duration-300 ${
        scrolled
          ? "py-5 bg-brand-black/80 backdrop-blur-md border-b "
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      {/* Brand */}
      <Link
        href="/"
        className={`${geistMono.className} relative text-lg tracking-wide
        after:absolute after:bottom-0 after:left-0
        after:h-px after:w-full after:origin-left after:scale-x-0
        after:bg-brand-slate
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100
        ${
          scrolled
            ? "text-gray-300 hover:text-white after:bg-white"
            : "text-brand-slate "
        }`}
      >
        Fourth Edition
      </Link>

      {/* Nav links */}
      <ul className="flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <ScrambleLink
              label={label}
              href={href}
              scrolled={scrolled}
              active={pathname === href || pathname.startsWith(`${href}/`)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
