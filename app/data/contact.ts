/**
 * Official Fourth Edition Contact Details, Social Channels & FAQs.
 */

export interface Channel {
  label: string;
  value: string;
  href: string;
  note: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const phone = {
  display: "+20 10 42256411",
  telHref: "tel:+201042256411",
  whatsappHref: "https://wa.me/201042256411",
};

export const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    url: "https://wa.me/201042256411",
    handle: "+20 10 42256411",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/fourthEdition.software",
    handle: "Fourth Edition Software",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/4.th.editionn/",
    handle: "@4.th.editionn",
  },
];

export const channels: Channel[] = [
  {
    label: "Phone & WhatsApp",
    value: "+20 10 42256411",
    href: "https://wa.me/201042256411",
    note: "Instant WhatsApp messaging or direct call. We reply within working hours.",
    isExternal: true,
  },
  {
    label: "Official Email",
    value: "4th.edition.org@gmail.com",
    href: "mailto:4th.edition.org@gmail.com",
    note: "Scoping questions, quotes, and project timelines. We reply within one working day.",
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
  "Under 50,000 EGP",
  "50,000 – 100,000 EGP",
  "100,000 – 250,000 EGP",
  "250,000 – 500,000 EGP",
  "500,000+ EGP",
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
    question: "How does working with a fully remote company work?",
    answer:
      "We operate transparently with daily async check-ins, continuous live staging URLs, and dedicated communication channels (WhatsApp, Slack, or email).",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Usually within two to three weeks. Urgent sprint engagements can sometimes start sooner if a slot opens up.",
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
];

export const studio = {
  location: "Fully Remote Company",
  hours: "Sun–Thu, 09:00–18:00 (GMT+2 / EET)",
  responseTime: "Within a few hours",
};
