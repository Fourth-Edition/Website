export default function Footer() {
  return (
    <footer className="w-full py-8 px-16 bg-brand-deep/80 backdrop-blur-sm border-t border-brand-navy/60 text-white  font-mono text-[10px] tracking-widest flex flex-row justify-between items-center gap-4">
      <div>
        © {new Date().getFullYear()} FOURTH EDITION. ALL RIGHTS RESERVED.
      </div>
      <div className="flex space-x-6">
        <a
          href="#privacy"
          className=" transition-colors hover:bg-brand-deep px-4 py-3  rounded-md"
        >
          PRIVACY POLICY
        </a>
        <a
          href="#terms"
          className="hover:bg-brand-deep transition-colors px-4 py-3 rounded-md"
        >
          TERMS OF SERVICE
        </a>
      </div>
    </footer>
  );
}
