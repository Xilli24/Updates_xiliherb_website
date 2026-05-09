"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface Props {
  steps: Step[];
}

const CARD_WIDTH = 320;
const CARD_GAP = 24;

export default function HorizontalScroll({ steps }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      const bar = barRef.current;
      if (!wrapper || !track || !bar) return;

      const wrapperHeight = wrapper.offsetHeight;
      const windowHeight = window.innerHeight;
      const top = wrapper.getBoundingClientRect().top;

      const raw = (top * -1) / (wrapperHeight - windowHeight);
      const progress = Math.min(1, Math.max(0, raw));

      const totalWidth = steps.length * CARD_WIDTH + (steps.length - 1) * CARD_GAP;
      const shift = progress * Math.max(0, totalWidth - window.innerWidth + 128);

      track.style.transform = `translateX(-${shift}px)`;
      bar.style.width = `${progress * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, steps.length]);

  if (isMobile) {
    return (
      <div aria-label="Process steps" className="px-6 py-16 space-y-6">
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              background: "#222220",
              border: "1px solid #2A2A28",
              borderRadius: 4,
              padding: 24,
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#C9CBBE" }}>{step.num}</p>
            <p style={{ fontSize: 17, fontWeight: 500, color: "#F5F4EF", marginTop: 12 }}>{step.title}</p>
            <p style={{ fontSize: 13, color: "#6B6A62", lineHeight: 1.6, marginTop: 8 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      aria-label="Process steps"
      style={{ height: `${steps.length * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#1A1A18",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Step counter / label */}
        <div className="px-16 mb-10">
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#44433E", fontWeight: 500 }}>
            Process &nbsp;·&nbsp; Scroll to explore
          </p>
        </div>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: CARD_GAP,
            paddingLeft: 64,
            paddingRight: 64,
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                width: CARD_WIDTH,
                flexShrink: 0,
                height: "60vh",
                padding: 32,
                background: "#222220",
                border: "1px solid #2A2A28",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: 11, color: "#C9CBBE" }}>{step.num}</p>
              <p style={{ fontSize: 17, fontWeight: 500, color: "#F5F4EF", marginTop: 12 }}>{step.title}</p>
              <p style={{ fontSize: 13, color: "#6B6A62", lineHeight: 1.6, marginTop: 8 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Progress line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "#2A2A28",
          }}
        >
          <div
            ref={barRef}
            style={{
              height: "100%",
              width: "0%",
              background: "linear-gradient(to right, #44433E, #C9CBBE)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
