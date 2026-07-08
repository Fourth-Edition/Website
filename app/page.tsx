"use client";

import { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";

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
    sessionStorage.setItem("fe_intro_completed", "true");
    setShowIntro(false);
  };

  if (!mounted) {
    // Keep a dark background during hydration/loading to prevent flash
    return <div className="min-h-screen bg-zinc-950" />;
  }

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Radial background glowing spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />

        {/* Content wrapper with fade-in animation */}
        <main className={`relative z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-16 px-4 py-20 transition-all duration-1000 ${
          showIntro ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}>
          
          {/* Header Section */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-950/20 text-[10px] tracking-widest font-mono uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>Version 4.0 // ACTIVE</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
              A New Paradigm of <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-zinc-200">
                Web Synthesis
              </span>
            </h1>
            
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Welcome to the next iteration of intelligent interfaces. The Fourth Edition compiles dynamic ideas into visual systems with absolute precision.
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-left">
            
            {/* Card 1 */}
            <div className="group relative p-8 rounded-xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="font-mono text-xs text-purple-400 tracking-wider">01 // NEURAL CORE</div>
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-purple-300 transition-colors duration-300">Dynamic Synthesizer</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Real-time compilation engines processing vector configurations and layout grids instantly.
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-200 tracking-wider inline-flex items-center transition-colors">
                    EXECUTE STACK <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="font-mono text-xs text-purple-400 tracking-wider">02 // LATTICE LINK</div>
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-purple-300 transition-colors duration-300">Synchronized Node</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Federated pipeline for cloud asset delivery with local database cache optimization.
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-200 tracking-wider inline-flex items-center transition-colors">
                    CONNECT NODE <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="font-mono text-xs text-purple-400 tracking-wider">03 // CRYPTO KEY</div>
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-purple-300 transition-colors duration-300">Security Vault</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Encrypted authorization logs and user settings secured via edge runtime protocols.
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-200 tracking-wider inline-flex items-center transition-colors">
                    DECRYPT KEYS <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Reset Intro Button */}
          <div className="pt-8">
            <button
              onClick={() => {
                sessionStorage.removeItem("fe_intro_completed");
                setShowIntro(true);
              }}
              className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 font-mono text-[10px] tracking-widest text-zinc-400 hover:text-zinc-200 transition-all duration-300 cursor-pointer shadow-lg"
            >
              REPLAY CINEMATIC INTRO_
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
