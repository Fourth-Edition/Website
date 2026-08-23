"use client";

import { useState } from "react";
import { geistMono } from "../../fonts";
import { budgets, projectTypes, timelines } from "../../data/contact";

const fieldClass = `w-full rounded border border-brand-slate/30 bg-white/70 px-4 py-3.5
  font-sans text-lg text-brand-black placeholder:text-brand-slate/70
  focus:border-brand-navy focus:outline-none transition-colors duration-200`;

const labelClass =
  "text-brand-navy text-base font-semibold tracking-widest";

/**
 * Placeholder enquiry form. Nothing is sent anywhere yet — submitting
 * just flips to a confirmation state. Wire `handleSubmit` to a route
 * handler or form service when the backend exists.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy bg-brand-navy/5 p-8">
        <p
          className={`${geistMono.className} text-brand-navy text-lg font-semibold tracking-widest`}
        >
          MESSAGE QUEUED
        </p>
        <p className="font-sans text-brand-ink/80 text-lg leading-relaxed">
          This form is a placeholder — nothing has been sent. Once it is wired
          up you will get a reply within one working day. In the meantime, email{" "}
          <a
            href="mailto:hello@fourthedition.co"
            className="text-brand-black underline underline-offset-4"
          >
            hello@fourthedition.co
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`${geistMono.className} self-start text-brand-navy hover:text-brand-black text-sm tracking-widest transition-colors duration-200`}
        >
          ← BACK TO FORM
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-brand-slate/25 p-6 md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>NAME</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </label>

        <label className={`${geistMono.className} flex flex-col gap-2`}>
          <span className={labelClass}>EMAIL</span>
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
        <span className={labelClass}>WHAT ARE YOU BUILDING?</span>
        {/* No free resize — dragging the handle used to let the field grow
            past the layout. Fixed height, scrolls once it's full. */}
        <textarea
          required
          name="message"
          rows={6}
          placeholder="A paragraph is plenty. What exists today, and what should exist instead?"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p
          className={`${geistMono.className} text-brand-slate text-base font-semibold tracking-widest`}
        >
          PLACEHOLDER FORM — NOT YET CONNECTED
        </p>
        <button
          type="submit"
          className={`${geistMono.className} px-8 py-4 rounded bg-brand-black hover:bg-brand-navy text-white text-base tracking-widest transition-colors duration-300 border border-brand-black hover:border-brand-navy`}
        >
          SEND ENQUIRY
        </button>
      </div>
    </form>
  );
}
