import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Software & Engineering Services | خدمات البرمجيات",
  description:
    "Web applications, mobile app development, enterprise CRM & ERP solutions, UI/UX design, branding, and digital growth marketing.",
  alternates: {
    canonical: "https://fourthedtion.vercel.app/services",
  },
  openGraph: {
    title: "Software & Engineering Services | Fourth Edition",
    description:
      "Web applications, mobile app development, enterprise CRM & ERP solutions, UI/UX design, branding, and digital growth marketing.",
    url: "https://fourthedtion.vercel.app/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
