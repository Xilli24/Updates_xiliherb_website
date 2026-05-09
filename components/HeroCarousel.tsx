"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MolecularGraph from "@/components/MolecularGraph";

const slides = [
  { src: "/bio.png",      alt: "Bio-based ingredient research" },
  { src: "/womenlab.png", alt: "Laboratory innovation" },
  { src: "/mol.png",      alt: "Molecular science" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", height: "68vh", borderRadius: 2, overflow: "hidden" }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Left-edge blend into dark hero background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #1A1A18 0%, transparent 28%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background: "linear-gradient(to top, rgba(26,26,24,0.55) 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Molecular graph overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          opacity: 0.45,
          pointerEvents: "none",
        }}
      >
        <MolecularGraph fillParent />
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 18,
          right: 18,
          display: "flex",
          gap: 7,
          zIndex: 2,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 22 : 6,
              height: 6,
              borderRadius: 3,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === current ? "#C9CBBE" : "rgba(201,203,190,0.3)",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
