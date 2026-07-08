export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 md:px-16 bg-brand-deep/80 backdrop-blur-sm border-t border-brand-navy/60 text-brand-slate font-mono text-[9px] tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        © {new Date().getFullYear()} FOURTH EDITION. ALL RIGHTS RESERVED.
      </div>
      <div className="flex space-x-6">
        <a href="#privacy" className="hover:text-brand-light transition-colors">
          PRIVACY_POLICY
        </a>
        <a href="#terms" className="hover:text-brand-light transition-colors">
          TERMS_OF_SERVICE
        </a>
      </div>
    </footer>
  );
}
