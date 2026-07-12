"use client";

import { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import Hero from "./components/Hero";
import MobileShowcase from "./components/mobile-showcase/MobileShowcase";
import ShowcaseSection from "./components/showcase/ShowcaseSection";
import ShowcaseCard from "./components/showcase/ShowcaseCard";

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
        <Hero play={!showIntro} />

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
          <p className="text-sm font-mono text-brand-slate tracking-widest">
            HAVE A PROJECT IN MIND? GET IN TOUCH
          </p>
          <a
            href="mailto:hello@fourthedition.co"
            className="px-6 py-3 rounded bg-brand-navy hover:bg-brand-stale text-white text-xs font-mono tracking-widest transition-colors shadow-lg border border-brand-slate/20"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
}
