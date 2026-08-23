/**
 * Placeholder contact details and form options. The form itself does not
 * submit anywhere yet — wire it to a route handler or form service later.
 */

export interface Channel {
  label: string;
  value: string;
  href: string;
  note: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const channels: Channel[] = [
  {
    label: "New projects",
    value: "hello@fourthedition.co",
    href: "mailto:hello@fourthedition.co",
    note: "Scoping questions, quotes, and timelines. We reply within one working day.",
  },
  {
    label: "Existing clients",
    value: "support@fourthedition.co",
    href: "mailto:support@fourthedition.co",
    note: "Live-site issues and change requests. Priority queue for retainer clients.",
  },
  {
    label: "Careers",
    value: "work@fourthedition.co",
    href: "mailto:work@fourthedition.co",
    note: "No open roles right now, but we read everything that comes in.",
  },
];

export const projectTypes: string[] = [
  "Website or web app",
  "Mobile application",
  "Enterprise system (CRM / ERP)",
  "Branding & identity",
  "Marketing & growth",
  "Something else",
];

export const budgets: string[] = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

export const timelines: string[] = [
  "As soon as possible",
  "Within a quarter",
  "This year",
  "Just exploring",
];

export const faqs: Faq[] = [
  {
    question: "How quickly can you start?",
    answer:
      "Usually within two to three weeks. Sprint engagements can sometimes start sooner if a slot opens up.",
  },
  {
    question: "Do you work with fixed prices?",
    answer:
      "Yes for scoped projects. Discovery is billed separately so the fixed price is based on a real plan rather than a guess.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do, from the first commit. Repositories live in your organisation and we work in it as collaborators.",
  },
  {
    question: "Can you take over an existing build?",
    answer:
      "Often. We start with a paid audit so both sides know what the codebase actually looks like before committing to anything.",
  },
];

export const studio = {
  location: "Remote-first · Central European Time",
  hours: "Mon–Fri, 09:00–18:00 CET",
  responseTime: "Within one working day",
};
