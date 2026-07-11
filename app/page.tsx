"use client";

import { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import MobileShowcase from "./components/mobile-showcase/MobileShowcase";
import ShowcaseSection from "./components/showcase/ShowcaseSection";
import ShowcaseCard from "./components/showcase/ShowcaseCard";
import { geistMono } from "./fonts";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const completed = sessionStorage.getItem("fe_intro_completed");
    if (completed === "true") {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    // sessionStorage.setItem("fe_intro_completed", "true");
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
        {/* Hero */}
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 w-full">
          <div className="space-y-4 text-center">
            <h1 className={`${geistMono.className} text-6xl`}>
              FOURTH EDITION
            </h1>

            <p className="text-brand-slate text-sm md:text-base max-w-md mx-auto leading-relaxed font-light">
              A software house building modern digital products. We are crafting
              our new site.
            </p>
          </div>
        </div>

        {/* What we build */}
        <ShowcaseSection>
          <ShowcaseCard
            label="MOBILE APPLICATIONS"
            description="Make your custom mobile app shine with a sleek, modern design. Our showcase highlights the intuitive interface and seamless user experience, ensuring your app stands out in the competitive market."
            ctaText="Convert your idea into the real world"
          >
            <MobileShowcase />
          </ShowcaseCard>
        </ShowcaseSection>

        {/* Contact CTA */}
        <div className="pb-24 px-6 flex flex-col items-center text-center space-y-4">
          <p className="text-[10px] font-mono text-brand-slate tracking-widest">
            HAVE A PROJECT IN MIND? GET IN TOUCH
          </p>
          <a
            href="mailto:hello@fourthedition.co"
            className="px-6 py-3 rounded bg-brand-navy hover:bg-[#1c2a8c] text-brand-light text-xs font-mono tracking-widest transition-colors shadow-lg border border-brand-slate/20"
          >
            CONTACT_US
          </a>
        </div>
      </div>
    </>
  );
}
