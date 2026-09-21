import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Software Engineering Organization | عن الشركة",
  description:
    "Learn about Fourth Edition's mission, engineering philosophy, timeline, and leadership team delivering state-of-the-art digital products.",
  alternates: {
    canonical: "https://fourthedtion.vercel.app/about",
  },
  openGraph: {
    title: "About Us — Software Engineering Organization | Fourth Edition",
    description:
      "Learn about Fourth Edition's mission, engineering philosophy, timeline, and leadership team.",
    url: "https://fourthedtion.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
