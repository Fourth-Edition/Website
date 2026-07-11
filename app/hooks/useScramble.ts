"use client";

import { useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMN23456789";
const TICK_MS = 25;
// Random-scramble ticks before any character starts resolving. Total
// duration is (label.length + BUFFER_TICKS) * TICK_MS — kept small so
// long labels don't drag out the reveal.
const BUFFER_TICKS = 6;

/**
 * Scrambles `label` character by character before resolving back to the
 * real text, left-to-right — mechanical, deliberate. Shared by the navbar
 * hover links and the showcase scroll reveal.
 *
 * `onComplete` fires once the scramble finishes on its own (not when cut
 * short by `reset`), so callers can chain a follow-up animation.
 */
export function useScramble(label: string, onComplete?: () => void) {
  const [text, setText] = useState(label);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scramble() {
    const totalTicks = label.length + BUFFER_TICKS;
    let count = 0;

    const tick = () => {
      setText(
        label
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < count - BUFFER_TICKS) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
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
