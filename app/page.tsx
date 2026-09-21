"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/showcase/ShowcaseSection";
import ShowcaseCard from "./components/showcase/ShowcaseCard";
import { useLanguage } from "./context/LanguageContext";
import { dictionary } from "./data/translations";
import { geistMono } from "./fonts";

const IntroScreen = dynamic(() => import("./components/IntroScreen"), {
  ssr: false,
});

const MobileShowcase = dynamic(
  () => import("./components/mobile-showcase/MobileShowcase"),
  { ssr: false }
);

const WebShowcase = dynamic(
  () => import("./components/web-showcase/WebShowcase"),
  { ssr: false }
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { locale, isAr } = useLanguage();
  const tShowcase = dictionary[locale].showcase;
  const tNav = dictionary[locale].nav;

  useEffect(() => {
    setMounted(true);
    const completed = sessionStorage.getItem("fe_intro_completed");
    if (completed === "true") {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-brand-black" />;
  }

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      <div
        className={`w-full transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero play={!showIntro} />

        {/* What we build */}
        <ShowcaseSection>
          <ShowcaseCard
            label={tShowcase.mobileLabel}
            description={tShowcase.mobileDesc}
            ctaText={tShowcase.mobileCta}
          >
            <MobileShowcase />
          </ShowcaseCard>

          <ShowcaseCard
            label={tShowcase.webLabel}
            description={tShowcase.webDesc}
            ctaText={tShowcase.webCta}
          >
            <WebShowcase />
          </ShowcaseCard>
        </ShowcaseSection>

        {/* Contact CTA */}
        <div className="pb-16 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center space-y-4">
          <p className={`${isAr ? "font-bold text-base" : geistMono.className} text-brand-slate tracking-widest text-sm md:text-base`}>
            {isAr ? "لديك مشروع تريد بناءه؟" : "HAVE A PROJECT IN MIND? GET IN TOUCH"}
          </p>
          <Link
            href="/contact"
            className={`${isAr ? "font-bold text-sm font-sans-arabic" : geistMono.className} px-6 py-3.5 rounded bg-brand-navy hover:bg-brand-light text-white text-xs tracking-widest transition-colors duration-300 shadow-lg border border-brand-slate/20 hover:border-brand-light w-full sm:w-auto text-center`}
          >
            {tNav.contact}
          </Link>
        </div>
      </div>
    </>
  );
}
