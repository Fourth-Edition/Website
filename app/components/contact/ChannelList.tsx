import { geistMono } from "../../fonts";
import type { Channel } from "../../data/contact";

/** Direct email routes, for people who would rather skip the form. */
export default function ChannelList({ channels }: { channels: Channel[] }) {
  return (
    <ul className="flex flex-col gap-7">
      {channels.map((channel) => (
        <li key={channel.label} className="flex flex-col gap-2">
          <p
            className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
          >
            {channel.label.toUpperCase()}
          </p>
          <a
            href={channel.href}
            className="font-sans text-brand-black text-lg relative inline-block w-fit
            after:absolute after:bottom-0 after:left-0
            after:h-px after:w-full after:origin-left after:scale-x-0
            after:bg-brand-navy
            after:transition-transform after:duration-300 after:ease-out
            hover:after:scale-x-100"
          >
            {channel.value}
          </a>
          <p className="font-sans text-brand-ink/75 text-base leading-relaxed max-w-sm">
            {channel.note}
          </p>
        </li>
      ))}
    </ul>
  );
}
