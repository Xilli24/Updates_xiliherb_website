"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bar = barRef.current;
      if (!bar) return;
      const progress =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      bar.style.width = `${Math.min(1, Math.max(0, progress)) * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        height: 2,
        width: "0%",
        background: "#5BAC2E",
        willChange: "width",
        pointerEvents: "none",
      }}
    />
  );
}
