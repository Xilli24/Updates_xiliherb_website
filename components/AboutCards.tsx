"use client";

import type React from "react";
import { useState } from "react";
import { Children } from "react";

export interface SectionMeta {
  num: string;
  label: string;
  title: string;
  teaser: string;
}

interface Props {
  sections: SectionMeta[];
  children?: React.ReactNode;
}

export default function AboutCards({ sections, children }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const panels = Children.toArray(children);

  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i));

  return (
    <div>
      {/* ── Card grid ── */}
      <div className="grid md:grid-cols-3 gap-4">
        {sections.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={s.num}
              role="button"
              tabIndex={0}
              onClick={() => toggle(i)}
              onKeyDown={(e) => e.key === "Enter" && toggle(i)}
              className="cursor-pointer flex flex-col transition-colors duration-300"
              style={{
                background: isActive ? "#1A1A18" : "#FAFAF8",
                border: `1px solid ${isActive ? "#1A1A18" : "#E8E6DE"}`,
                borderTop: `3px solid ${isActive ? "#C9CBBE" : "#E8E6DE"}`,
                borderRadius: 2,
                padding: "28px 28px 24px",
                userSelect: "none",
              }}
            >
              <p
                className="text-[72px] font-bold leading-none select-none mb-5"
                style={{
                  color: isActive ? "rgba(201,203,190,0.12)" : "#EEECE6",
                  fontFamily: "var(--font-display)",
                }}
              >
                {s.num}
              </p>

              <span
                className="text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: "#C9CBBE" }}
              >
                {s.label}
              </span>

              <h3
                className="text-[17px] font-semibold mt-2 mb-4 leading-snug flex-1"
                style={{
                  color: isActive ? "#F5F4EF" : "#1A1A18",
                  fontFamily: "var(--font-display)",
                }}
              >
                {s.title}
              </h3>

              <p
                className="text-[13px] leading-[1.7] mb-6"
                style={{ color: "#6B6A62" }}
              >
                {s.teaser}
              </p>

              <div
                className="flex items-center gap-2 mt-auto pt-4"
                style={{ borderTop: `1px solid ${isActive ? "rgba(201,203,190,0.12)" : "#E8E6DE"}` }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.14em] font-medium"
                  style={{ color: isActive ? "#C9CBBE" : "#44433E" }}
                >
                  {isActive ? "Close" : "Explore"}
                </span>
                <span
                  style={{
                    color: isActive ? "#C9CBBE" : "#44433E",
                    display: "inline-block",
                    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: 15,
                    lineHeight: 1,
                  }}
                >
                  →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Expandable content panel ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: active !== null ? "1fr" : "0fr",
          transition: "grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          marginTop: active !== null ? 4 : 0,
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div
            style={{
              background: "#FAFAF8",
              border: "1px solid #E8E6DE",
              borderTop: "3px solid #1A1A18",
              borderRadius: 2,
              padding: "40px 40px 44px",
            }}
          >
            {active !== null && (
              <div className="mb-8 pb-6" style={{ borderBottom: "1px solid #E8E6DE" }}>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] font-medium"
                  style={{ color: "#C9CBBE" }}
                >
                  {sections[active]?.label}
                </span>
                <p
                  className="text-[22px] font-semibold mt-1 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  {sections[active]?.title}
                </p>
              </div>
            )}
            {active !== null && panels[active]}
          </div>
        </div>
      </div>
    </div>
  );
}
