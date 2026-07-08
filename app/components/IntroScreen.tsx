"use client";

import { useEffect, useRef, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  const statusMessages = [
    "CONNECTING TO COGNITIVE CORE...",
    "RETRIEVING LATEST BUILD VECTORS...",
    "DECRYPTING ARCHIVAL SHADERS...",
    "PARSING FOURTH EDITION DATASETS...",
    "ESTABLISHING SYNAPSE PROTOCOLS...",
    "OPTIMIZING WEB INTERFACE...",
    "SYNCHRONIZING GRAPHICS ENGINE...",
    "SYSTEM DEPLOYMENT SUCCESSFUL.",
  ];

  // Progress simulation
  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const intervalTime = 40;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment + Math.random() * 0.8, 100);
        if (next >= 100) {
          clearInterval(timer);
          // Auto complete shortly after hitting 100
          setTimeout(() => {
            handleComplete();
          }, 600);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Update status messages based on progress
  useEffect(() => {
    const index = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatusIndex(index);
  }, [progress]);

  // Particle background logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1;
        this.color = `rgba(168, 85, 247, ${Math.random() * 0.3 + 0.15})`; // Violet glow
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Attract/Repel mouse
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowBlur = 8;
        c.shadowColor = "rgba(168, 85, 247, 0.4)";
        c.fill();
        c.shadowBlur = 0; // Reset
      }
    }

    const particles: Particle[] = Array.from(
      { length: 60 },
      () => new Particle()
    );

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw starry ambient gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "rgba(10, 10, 15, 1)");
      gradient.addColorStop(1, "rgba(3, 3, 5, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Grid overlay
      ctx.strokeStyle = "rgba(147, 197, 253, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and connect particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw lines between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 100) {
            const alpha = ((100 - dist) / 100) * 0.15;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800); // match exit transition duration
  };

  const currentStatus = statusMessages[statusIndex];
  const roundedProgress = Math.floor(progress);

  // Monospace progress bar characters
  const barLength = 20;
  const filledChars = Math.floor((progress / 100) * barLength);
  const emptyChars = barLength - filledChars;
  const barString = "█".repeat(filledChars) + "░".repeat(emptyChars);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none backdrop-blur-2xl"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Dynamic Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Futuristic Grid Circle Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center space-y-10">
        {/* Animated Geometric Orbit Icon */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Inner Glowing Point */}
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75" />
          <div className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]" />

          {/* Orbiting Ring 1 (Cyan/Blue-ish) */}
          <svg
            className="absolute w-full h-full animate-[spin_6s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="2"
              strokeDasharray="40 180"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbiting Ring 2 (Purple/Pink-ish, Reverse dir) */}
          <svg
            className="absolute w-full h-full animate-[spin_10s_linear_infinite_reverse]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="1.5"
              strokeDasharray="80 100"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hexagonal Outer Frame */}
          <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
        </div>

        {/* Elegant Title Display */}
        <div className="space-y-2">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-purple-200 to-zinc-400">
            FOURTH EDITION
          </h1>
          <p className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
            INTELLIGENT COMPILATION SYSTEMS
          </p>
        </div>

        {/* Technical Progress Section */}
        <div className="w-80 font-mono text-left border border-zinc-800/60 bg-zinc-950/40 p-5 rounded-lg backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          {/* Progress bar and counter */}
          <div className="flex justify-between items-center text-xs mb-3">
            <span className="text-zinc-500 font-semibold tracking-wider">
              SYSTEM INITIALIZATION
            </span>
            <span className="text-purple-400 font-bold">
              {roundedProgress}%
            </span>
          </div>

          {/* ASCII Bar */}
          <div className="text-zinc-700 text-sm tracking-tighter leading-none select-none mb-3">
            <span className="text-purple-500">
              {barString.slice(0, filledChars)}
            </span>
            <span>{barString.slice(filledChars)}</span>
          </div>

          {/* Status Line */}
          <div className="h-6 overflow-hidden flex items-center mb-3">
            <span className="text-[10px] text-zinc-400 tracking-wider flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse" />
              {currentStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
