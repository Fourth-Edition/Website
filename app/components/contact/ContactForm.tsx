"use client";

import { useState } from "react";
import { geistMono } from "../../fonts";
import { useLanguage } from "../../context/LanguageContext";
import { dictionary } from "../../data/translations";

const fieldClass = `w-full rounded border border-brand-slate/30 bg-white/70 px-4 py-3.5
  font-sans text-base text-brand-black placeholder:text-brand-slate/70
  focus:border-brand-navy focus:outline-none transition-colors duration-200`;

/** Label text with optional/required badge */
function FieldLabel({
  text,
  required,
  optional,
  optionalText,
  isAr,
}: {
  text: string;
  required?: boolean;
  optional?: boolean;
  optionalText: string;
  isAr: boolean;
}) {
  return (
    <span
      className={`${isAr ? "font-bold" : geistMono.className} flex items-center gap-2 text-brand-navy text-xs font-semibold tracking-wider uppercase`}
    >
      {text}
      {required && (
        <span className="text-brand-navy text-[10px] font-bold">*</span>
      )}
      {optional && (
        <span
          className={`${isAr ? "font-bold text-[10px]" : geistMono.className} text-brand-slate/60 text-[9px] tracking-widest normal-case border border-brand-slate/25 rounded px-1.5 py-0.5`}
        >
          {optionalText}
        </span>
      )}
    </span>
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { locale, isAr } = useLanguage();
  const tContact = dictionary[locale].contact;
  const optText = tContact.optionalLabel;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData(event.currentTarget);

    formData.append("_subject", isAr ? "طلب استشارة جديد — موقع فورث إديشن" : "New Inquiry — Fourth Edition Website");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append(
      "_autoresponse",
      isAr
        ? "شكراً لتواصلك مع فورث إديشن. لقد استلمنا رسالتك وسنقوم بالرد عليك خلال يوم عمل واحد."
        : "Thank you for contacting Fourth Edition. We have received your inquiry and will get back to you within one working day."
    );

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/4th.edition.org@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
      } else {
        setErrorMsg(
          result.message ||
            (isAr
              ? "تعذر إرسال الطلب. يمكنك مراسلتنا مباشرة عبر 4th.edition.org@gmail.com"
              : "Failed to submit. Please email 4th.edition.org@gmail.com directly.")
        );
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-8">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
          <p
            className={`${isAr ? "font-bold font-sans-arabic" : geistMono.className} text-emerald-800 text-lg tracking-widest`}
          >
            {tContact.deliveredTitle}
          </p>
        </div>
        <p className="font-sans text-brand-ink/90 text-lg leading-relaxed">
          {tContact.deliveredMsg}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`${isAr ? "font-bold text-xs" : geistMono.className} self-start px-4 py-2 rounded border border-brand-slate/30 text-brand-navy hover:text-brand-black tracking-widest transition-colors duration-200`}
        >
          {tContact.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-brand-slate/25 p-6 md:p-8 bg-white/40 backdrop-blur-sm shadow-sm"
    >
      {/* Honeypot Spam Protection */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      {/* ── Row 1: Name · Email ── */}
      <div className="grid gap-5 md:grid-cols-2">
        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.nameLabel} required isAr={isAr} optionalText={optText} />
          <input
            required
            name="name"
            type="text"
            placeholder={isAr ? "محمد أحمد" : "Jane Doe"}
            className={fieldClass}
          />
        </label>

        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.emailLabel} required isAr={isAr} optionalText={optText} />
          <input
            required
            name="email"
            type="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      {/* ── Row 2: Phone · Company ── */}
      <div className="grid gap-5 md:grid-cols-2">
        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.phoneLabel} required isAr={isAr} optionalText={optText} />
          <input
            required
            name="phone"
            type="tel"
            placeholder={isAr ? "+20 10 XXXXXXXX" : "+1 (555) 000-0000"}
            className={fieldClass}
            dir="ltr"
          />
        </label>

        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.companyLabel} optional isAr={isAr} optionalText={optText} />
          <input
            name="company"
            type="text"
            placeholder={isAr ? "اسم الشركة أو المؤسسة" : "Company name"}
            className={fieldClass}
          />
        </label>
      </div>

      {/* ── Row 3: Project Type · Budget · Timeline ── */}
      <div className="grid gap-5 sm:grid-cols-3">
        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.projectTypeLabel} optional isAr={isAr} optionalText={optText} />
          <select name="projectType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {isAr ? "اختر نوع المشروع" : "Select one"}
            </option>
            {tContact.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.budgetLabel} optional isAr={isAr} optionalText={optText} />
          <select name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {isAr ? "اختر النطاق" : "Select a range"}
            </option>
            {tContact.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>

        <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
          <FieldLabel text={tContact.timelineLabel} optional isAr={isAr} optionalText={optText} />
          <select name="timeline" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {isAr ? "اختر المدى الزمني" : "Select a timeline"}
            </option>
            {tContact.timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* ── Message ── */}
      <label className={`${isAr ? "font-bold" : geistMono.className} flex flex-col gap-2`}>
        <FieldLabel text={tContact.messageLabel} required isAr={isAr} optionalText={optText} />
        <textarea
          required
          name="message"
          rows={6}
          placeholder={
            isAr
              ? "فقرة واحدة تكفي. ما الذي تريد بناءه، وما النتيجة التي تتوقعها؟"
              : "A paragraph is plenty. What exists today, and what should exist instead?"
          }
          className={`${fieldClass} resize-none`}
        />
      </label>

      {/* ── Legend ── */}
      <p
        className={`${isAr ? "font-bold text-[10px]" : geistMono.className} text-brand-slate/60 text-[10px] tracking-widest`}
      >
        {isAr ? "* الحقول المطلوبة" : "* REQUIRED FIELDS"}
      </p>

      {errorMsg && (
        <p className="text-red-600 text-xs font-mono bg-red-50 p-3 rounded border border-red-200">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-brand-slate/15">
        <p className={`${geistMono.className} text-brand-slate text-xs font-semibold tracking-wider`}>
          4TH.EDITION.ORG@GMAIL.COM
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${isAr ? "font-bold text-sm font-sans-arabic" : geistMono.className} w-full sm:w-auto px-8 py-4 rounded bg-brand-black hover:bg-brand-navy disabled:opacity-50 text-white tracking-widest transition-colors duration-300 border border-brand-black hover:border-brand-navy flex items-center justify-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              {tContact.sendingBtn}
            </>
          ) : (
            tContact.sendBtn
          )}
        </button>
      </div>
    </form>
  );
}
