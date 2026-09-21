"use client";

import { geistMono } from "../../fonts";
import { type Channel, socialLinks } from "../../data/contact";
import { useLanguage } from "../../context/LanguageContext";
import { dictionary } from "../../data/translations";

export default function ChannelList({ channels }: { channels: Channel[] }) {
  const { locale, isAr } = useLanguage();
  const tContact = dictionary[locale].contact;

  const translatedChannels = channels.map((c) => {
    if (c.label === "Phone & WhatsApp") {
      return {
        ...c,
        label: isAr ? "الهاتف والواتساب" : c.label,
        note: isAr ? "راسلنا عبر واتساب أو اتصل بنا مباشرة خلال ساعات العمل." : c.note,
      };
    }
    if (c.label === "Official Email" || c.label === "New projects") {
      return {
        ...c,
        label: isAr ? "البريد الإلكتروني" : c.label,
        note: isAr ? "للاستفسارات وطلبات التسعير. نرد خلال يوم عمل واحد." : c.note,
      };
    }
    return c;
  });

  return (
    <div className="flex flex-col gap-10">
      <ul className="flex flex-col gap-7">
        {translatedChannels.map((channel) => (
          <li key={channel.label} className="flex flex-col gap-2">
            <p
              className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
            >
              {channel.label}
            </p>
            <a
              href={channel.href}
              target={channel.isExternal ? "_blank" : undefined}
              rel={channel.isExternal ? "noopener noreferrer" : undefined}
              className="font-sans text-brand-black text-lg font-medium relative inline-block w-fit
              after:absolute after:bottom-0 after:left-0
              after:h-px after:w-full after:origin-left after:scale-x-0
              after:bg-brand-navy
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100 flex items-center gap-2"
            >
              {channel.value}
              {channel.isExternal && (
                <span className="text-xs text-brand-navy font-mono">↗</span>
              )}
            </a>
            <p className="font-sans text-brand-ink/75 text-sm leading-relaxed max-w-sm">
              {channel.note}
            </p>
          </li>
        ))}
      </ul>

      {/* Social Media Links Section */}
      <div className="flex flex-col gap-3 pt-6 border-t border-brand-slate/25">
        <p
          className={`${isAr ? "font-bold text-xs" : geistMono.className} text-brand-navy text-xs font-semibold tracking-widest uppercase`}
        >
          {tContact.socialTitle}
        </p>
        <div className="flex flex-col gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-brand-slate/20 bg-slate-50 hover:bg-white hover:border-brand-navy hover:shadow-md transition-all group"
            >
              <span className="font-sans text-sm font-semibold text-brand-black group-hover:text-brand-navy">
                {social.name}
              </span>
              <span className={`${geistMono.className} text-xs text-brand-slate group-hover:text-brand-black`}>
                {social.handle} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
