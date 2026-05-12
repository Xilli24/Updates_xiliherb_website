"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Entropy = dynamic(
  () => import("@/components/ui/entropy").then((m) => ({ default: m.Entropy })),
  { ssr: false }
);

const ParticlesComponent = dynamic(
  () => import("@/components/ui/particles-bg"),
  { ssr: false }
);

export default function HeroBgCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % 2), 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{ opacity: active === 0 ? 1 : 0 }}
      >
        <Entropy />
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{ opacity: active === 1 ? 1 : 0 }}
      >
        <ParticlesComponent id="particles-hero" />
      </div>
    </div>
  );
}
