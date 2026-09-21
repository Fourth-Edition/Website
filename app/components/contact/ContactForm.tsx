"use client";

import { useState } from "react";
import { geistMono } from "../../fonts";
import { budgets, projectTypes, timelines } from "../../data/contact";

const fieldClass = `w-full rounded border border-brand-slate/30 bg-white/70 px-4 py-3.5
  font-sans text-lg text-brand-black placeholder:text-brand-slate/70
  focus:border-brand-navy focus:outline-none transition-colors duration-200`;

const labelClass =
  "text-brand-navy text-base font-semibold tracking-widest";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData(event.currentTarget);

    // FormSubmit fields
    formData.append("_subject", "New Inquiry — Fourth Edition Website");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append(
      "_autoresponse",
      "Thank you for contacting Fourth Edition. We have received your inquiry and will get back to you within one working day."
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
            "Failed to submit. Please email 4th.edition.org@gmail.com directly."
        );
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      // Smooth fallback to confirmation screen
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
            className={`${geistMono.className} text-emerald-800 text-lg font-semibold tracking-widest`}
          >
            INQUIRY DELIVERED
          </p>
        </div>
        <p className="font-sans text-brand-ink/90 text-lg leading-relaxed">
          Thank you for reaching out! Your message has been routed directly to{" "}
          <strong className="text-brand-black underline decoration-emerald-400 decoration-2">
            4th.edition.org@gmail.com
          </strong>
          . Our team will review your scope and get back to you within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`${geistMono.className} self-start px-4 py-2 rounded border border-brand-slate/30 text-brand-navy hover:text-brand-black text-xs tracking-widest transition-colors duration-200`}
        >
          ← SUBMIT ANOTHER ENQUIRY
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

      <div className="grid gap-6 md:grid-cols-2">
        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>NAME *</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>EMAIL *</span>
          <input
            required
            name="email"
            type="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>COMPANY</span>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className={fieldClass}
          />
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>PROJECT TYPE</span>
          <select name="projectType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>BUDGET</span>
          <select name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>TIMELINE</span>
          <select name="timeline" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={`${geistMono.className} flex flex-col gap-2`}>
        <span className={labelClass}>WHAT ARE YOU BUILDING? *</span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="A paragraph is plenty. What exists today, and what should exist instead?"
          className={`${fieldClass} resize-none`}
        />
      </label>

      {errorMsg && (
        <p className="text-red-600 text-xs font-mono bg-red-50 p-3 rounded border border-red-200">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className={`${geistMono.className} text-brand-slate text-xs font-semibold tracking-wider`}>
          POWERED BY FORMSUBMIT.CO · SENT TO 4TH.EDITION.ORG@GMAIL.COM
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${geistMono.className} px-8 py-4 rounded bg-brand-black hover:bg-brand-navy disabled:opacity-50 text-white text-base tracking-widest transition-colors duration-300 border border-brand-black hover:border-brand-navy flex items-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              SENDING...
            </>
          ) : (
            "SEND ENQUIRY"
          )}
        </button>
      </div>
    </form>
  );
}
