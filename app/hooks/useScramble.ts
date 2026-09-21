"use client";

import { useEffect, useRef, useState } from "react";

const EN_SCRAMBLE_CHARS = "ABCDEFGHIJKLMN23456789";
const AR_SCRAMBLE_CHARS = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";

const TICK_MS = 25;
const BUFFER_TICKS = 6;

/**
 * Scrambles `label` character by character before resolving back to the
 * real text. Automatically detects Arabic characters and uses Arabic scramble glyphs.
 */
export function useScramble(label: string, onComplete?: () => void) {
  const [text, setText] = useState(label);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync state immediately when label changes (e.g., when language toggles)
  useEffect(() => {
    if (frameRef.current) clearTimeout(frameRef.current);
    setText(label);
  }, [label]);

  function scramble() {
    const isArabic = /[\u0600-\u06FF]/.test(label);
    const scrambleChars = isArabic ? AR_SCRAMBLE_CHARS : EN_SCRAMBLE_CHARS;

    const totalTicks = label.length + BUFFER_TICKS;
    let count = 0;

    const tick = () => {
      setText(
        label
          .split("")
          .map((char, i) => {
            if (char === " " || char === "\n" || char === "·" || char === "-") return char;
            if (i < count - BUFFER_TICKS) return char;
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      count++;
      if (count <= totalTicks) {
        frameRef.current = setTimeout(tick, TICK_MS);
      } else {
        setText(label);
        onComplete?.();
      }
    };

    tick();
  }

  function reset() {
    if (frameRef.current) clearTimeout(frameRef.current);
    setText(label);
  }

  return { text, scramble, reset };
}
