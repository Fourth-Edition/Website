import { geistMono } from "../../fonts";
import type { TeamMember } from "../../data/about";

/**
 * Team roster. Avatars are initials tiles for now — swap in photos once
 * we have them.
 */
export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <article
          key={member.name}
          className="flex flex-col gap-4 rounded-2xl border border-brand-slate/25 p-7
          hover:border-brand-navy transition-colors duration-300"
        >
          <div
            className={`${geistMono.className} flex h-16 w-16 items-center justify-center rounded-full
            border border-brand-slate/40 bg-brand-navy/5 text-brand-black text-base tracking-widest`}
            aria-hidden
          >
            {member.initials}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-brand-black text-lg tracking-tight">
              {member.name}
            </h3>
            <p
              className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
            >
              {member.role.toUpperCase()}
            </p>
          </div>

          <p className="font-sans text-brand-ink/75 text-base leading-relaxed mt-auto">
            {member.focus}
          </p>
        </article>
      ))}
    </div>
  );
}
