"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { geistMono } from "../fonts";
import { useScramble } from "../hooks/useScramble";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";
import LanguageToggle from "./LanguageToggle";

function ScrambleLink({
  label,
  href,
  scrolled,
  active,
  onClick,
}: {
  label: string;
  href: string;
  scrolled: boolean;
  active: boolean;
  onClick?: () => void;
}) {
  const { text, scramble, reset } = useScramble(label);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      onClick={onClick}
      className={`
        relative text-sm font-semibold tracking-wider
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
            : "text-brand-slate"
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, isAr } = useLanguage();
  const tNav = dictionary[locale].nav;

  const links = [
    { label: tNav.services, href: "/services" },
    { label: tNav.portfolio, href: "/portfolio" },
    { label: tNav.about, href: "/about" },
    { label: tNav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 md:px-16 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-brand-black/90 backdrop-blur-md border-b border-brand-navy/60 shadow-lg"
            : "py-5 md:py-6 bg-transparent border-transparent"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/logo.png"
            alt="Fourth Edition Logo"
            width={32}
            height={32}
            priority
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full border border-cyan-500/40 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <span
            className={`${isAr ? "font-bold text-lg font-sans-arabic" : geistMono.className} relative text-base md:text-lg tracking-wide
            after:absolute after:bottom-0 after:left-0
            after:h-px after:w-full after:origin-left after:scale-x-0
            after:bg-brand-slate
            after:transition-transform after:duration-300 after:ease-out
            group-hover:after:scale-x-100
            ${
              scrolled
                ? "text-gray-200 hover:text-white after:bg-white"
                : "text-brand-slate"
            }`}
          >
            {tNav.brand}
          </span>
        </Link>

        {/* Desktop: Nav links & Language Switcher */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <ul className="flex items-center gap-5 md:gap-8">
            {links.map(({ label, href }) => (
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

          {/* Language Toggle */}
          <LanguageToggle scrolled={scrolled} />
        </div>

        {/* Mobile: Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded transition-colors duration-200 ${
            scrolled || menuOpen
              ? "text-white"
              : "text-brand-slate"
          }`}
        >
          {/* Hamburger / X icon via CSS transforms */}
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 z-35 h-full w-72 max-w-[85vw] bg-brand-black border-l border-brand-navy/60 flex flex-col pt-20 pb-10 px-6 gap-8 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 35 }}
      >
        {/* Nav links */}
        <ul className="flex flex-col gap-6">
          {links.map(({ label, href }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    isAr ? "font-bold font-arabic" : geistMono.className
                  } text-base tracking-widest transition-colors duration-200 ${
                    isActive ? "text-white" : "text-brand-slate hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="border-t border-brand-navy/40" />

        {/* Language Toggle */}
        <div>
          <LanguageToggle scrolled={true} />
        </div>
      </div>
    </>
  );
}
