import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project | تواصل معنا",
  description:
    "Get in touch with Fourth Edition software house for custom web apps, mobile applications, enterprise CRM systems, or branding projects.",
  alternates: {
    canonical: "https://fourthedtion.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Us — Start a Project | Fourth Edition",
    description:
      "Get in touch with Fourth Edition software house for custom web apps, mobile apps, enterprise systems, or branding.",
    url: "https://fourthedtion.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
