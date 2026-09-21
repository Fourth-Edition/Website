import Link from "next/link";
import { geistMono } from "../../fonts";

interface CtaBlockProps {
  label: string;
  action: string;
  href?: string;
}

/** Closing call to action, repeated at the foot of every route. */
export default function CtaBlock({
  label,
  action,
  href = "/contact",
}: CtaBlockProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 md:gap-5 border-t border-brand-slate/20 pt-12 md:pt-16">
      <p
        className={`${geistMono.className} text-brand-navy text-sm md:text-lg font-semibold tracking-widest`}
      >
        {label}
      </p>
      <Link
        href={href}
        className={`${geistMono.className} w-full sm:w-auto px-8 py-4 rounded bg-brand-black hover:bg-brand-navy text-white text-sm md:text-base tracking-widest transition-colors duration-300 border border-brand-black hover:border-brand-navy text-center`}
      >
        {action}
      </Link>
    </div>
  );
}
