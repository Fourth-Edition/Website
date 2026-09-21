"use client";

import Image from "next/image";
import { phone, socialLinks } from "../data/contact";
import { useLanguage } from "../context/LanguageContext";
import { dictionary } from "../data/translations";

export default function Footer() {
  const { locale } = useLanguage();
  const tFooter = dictionary[locale].footer;

  return (
    <footer className="w-full py-6 md:py-8 px-4 sm:px-6 md:px-16 bg-brand-deep/90 backdrop-blur-md border-t border-brand-navy/60 text-white font-mono text-[10px] md:text-[11px] tracking-widest flex flex-col gap-4 md:gap-6">
      {/* Top row: copyright + remote */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Fourth Edition Logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain rounded-full border border-cyan-500/40 shrink-0"
          />
          <span className="text-center sm:text-left">{tFooter.rights}</span>
        </div>
        <span className="text-slate-400 text-center">{tFooter.remote}</span>
      </div>

      {/* Social & Contact Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-t border-brand-navy/30 pt-4">
        <a
          href={phone.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 transition-colors px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 whitespace-nowrap"
        >
          {tFooter.whatsapp} ({phone.display})
        </a>

        <a
          href="mailto:4th.edition.org@gmail.com"
          className="hover:text-brand-light transition-colors px-2 py-1 truncate max-w-[200px] sm:max-w-none"
        >
          {tFooter.email}: 4TH.EDITION.ORG@GMAIL.COM
        </a>

        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-light transition-colors px-2 py-1"
          >
            {social.name.toUpperCase()}
          </a>
        ))}
      </div>
    </footer>
  );
}
