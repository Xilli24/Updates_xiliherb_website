"use client";

import type React from "react";
import { useState } from "react";
import { Children } from "react";
import { Lightbulb, FlaskConical, Leaf } from "lucide-react";

const sectionIcons = [Lightbulb, FlaskConical, Leaf];

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
          const Icon = sectionIcons[i];
          return (
            <div
              key={s.num}
              role="button"
              tabIndex={0}
              onClick={() => toggle(i)}
              onKeyDown={(e) => e.key === "Enter" && toggle(i)}
              className="cursor-pointer flex flex-col transition-colors duration-300"
              style={{
                background: isActive ? "#1E3F6E" : "#F7F6F2",
                border: `1px solid ${isActive ? "#1E3F6E" : "#E0E0DA"}`,
                borderTop: `3px solid ${isActive ? "#5BAC2E" : "#E0E0DA"}`,
                borderRadius: 2,
                padding: "28px 28px 24px",
                userSelect: "none",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <p
                  className="text-[72px] font-bold leading-none select-none"
                  style={{
                    color: isActive ? "rgba(91,172,46,0.12)" : "#E0E0DA",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {s.num}
                </p>
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  style={{ color: isActive ? "#5BAC2E" : "rgba(91,172,46,0.45)", flexShrink: 0 }}
                />
              </div>

              <span
                className="text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: "#5BAC2E" }}
              >
                {s.label}
              </span>

              <h3
                className="text-[17px] font-semibold mt-2 mb-4 leading-snug flex-1"
                style={{
                  color: isActive ? "#F7F6F2" : "#1E3F6E",
                  fontFamily: "var(--font-display)",
                }}
              >
                {s.title}
              </h3>

              <p
                className="text-[13px] leading-[1.7] mb-6"
                style={{ color: "#6B6B6B" }}
              >
                {s.teaser}
              </p>

              <div
                className="flex items-center gap-2 mt-auto pt-4"
                style={{ borderTop: `1px solid ${isActive ? "rgba(91,172,46,0.2)" : "#E0E0DA"}` }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.14em] font-medium"
                  style={{ color: isActive ? "#5BAC2E" : "#2C2C2C" }}
                >
                  {isActive ? "Close" : "Explore"}
                </span>
                <span
                  style={{
                    color: isActive ? "#5BAC2E" : "#2C2C2C",
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
              background: "#F7F6F2",
              border: "1px solid #E0E0DA",
              borderTop: "3px solid #1E3F6E",
              borderRadius: 2,
              padding: "40px 40px 44px",
            }}
          >
            {active !== null && (
              <div className="mb-8 pb-6" style={{ borderBottom: "1px solid #E0E0DA" }}>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] font-medium"
                  style={{ color: "#5BAC2E" }}
                >
                  {sections[active]?.label}
                </span>
                <p
                  className="text-[22px] font-semibold mt-1 leading-snug"
                  style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
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
