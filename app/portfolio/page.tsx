import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Engineering Portfolio & Case Studies | معرض الأعمال",
  description:
    "Explore our featured engineering case studies, enterprise CRM systems, healthcare platforms, and web applications built by Fourth Edition.",
  alternates: {
    canonical: "https://fourthedtion.vercel.app/portfolio",
  },
  openGraph: {
    title: "Engineering Portfolio & Case Studies | Fourth Edition",
    description:
      "Explore featured engineering case studies, enterprise CRM systems, and custom web applications.",
    url: "https://fourthedtion.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
