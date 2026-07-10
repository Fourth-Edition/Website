"use client";

import { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import { geistMono } from "./fonts";
import Image from "next/image";

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

  const services = [
    {
      name: "Websites & Web Apps",
      desc: "Custom marketing platforms and rich application interfaces.",
    },
    {
      name: "Mobile Applications",
      desc: "Native and cross-platform experiences for iOS and Android.",
    },
    {
      name: "Systems (CRM / ERP)",
      desc: "Tailored databases and internal workflow automation.",
    },
    {
      name: "Branding & Identity",
      desc: "Visual guidelines, logos, and coherent corporate design.",
    },
    {
      name: "Marketing & Strategy",
      desc: "Search visibility, optimization, and conversion consulting.",
    },
  ];

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      <div className="relative min-h-screen  flex flex-col items-center justify-center px-6 py-24  w-full">
        <main
          className={`relative z-10  w-full flex flex-col items-center text-center space-y-12 transition-opacity duration-700 ${
            showIntro ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className={`${geistMono.className} text-6xl`}>
              FOURTH EDITION
            </h1>

            <p className="text-brand-slate text-sm md:text-base max-w-md mx-auto leading-relaxed font-light">
              A software house building modern digital products. We are crafting
              our new site.
            </p>
          </div>
          <div className="flex flex-row w-full">
            <Image
              src="/mobile.png"
              alt="Fourth Edition"
              width={1400}
              height={300}
              className="w-1/2"
            />
            <div className="bg-amber-50 w-1/2"> </div>
          </div>
          {/* Offerings Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl text-left pt-4">
            {services.map((svc, i) => (
              <div
                key={i}
                className="p-5 rounded border border-brand-navy/60 bg-brand-navy/10 hover:border-brand-slate/40 transition-colors duration-300"
              >
                <h3 className="text-sm font-medium text-brand-light mb-1">
                  {svc.name}
                </h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div> */}

          {/* Contact CTA */}
          <div className="pt-6 flex flex-col items-center space-y-4">
            <p className="text-[11px] font-mono text-brand-slate tracking-wider">
              HAVE A PROJECT IN MIND? GET IN TOUCH
            </p>
            <a
              href="mailto:hello@fourthedition.co"
              className="px-6 py-3 rounded bg-brand-navy hover:bg-[#1c2a8c] text-brand-light text-xs font-mono tracking-widest transition-colors shadow-lg border border-brand-slate/20"
            >
              CONTACT_US
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
