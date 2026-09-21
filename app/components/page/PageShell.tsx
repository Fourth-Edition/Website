import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

/**
 * Standard frame for every top-level route. The navbar is fixed, so the
 * top padding here is what keeps page content clear of it.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-16 pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-16 md:gap-24">
        {children}
      </div>
    </div>
  );
}
