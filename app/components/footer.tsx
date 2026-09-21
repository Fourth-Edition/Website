import { phone, socialLinks } from "../data/contact";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-16 bg-brand-deep/90 backdrop-blur-md border-t border-brand-navy/60 text-white font-mono text-[11px] tracking-widest flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <span>© {new Date().getFullYear()} FOURTH EDITION SOFTWARE.</span>
        <span className="hidden md:inline text-slate-500">|</span>
        <span className="text-slate-400">FULLY REMOTE COMPANY</span>
      </div>

      {/* Social & Contact Links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={phone.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 transition-colors px-2 py-1 rounded bg-slate-900/60 border border-slate-800"
        >
          WHATSAPP ({phone.display})
        </a>

        <a
          href="mailto:4th.edition.org@gmail.com"
          className="hover:text-brand-light transition-colors px-2 py-1"
        >
          EMAIL (4TH.EDITION.ORG@GMAIL.COM)
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
