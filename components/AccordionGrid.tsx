"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type GridItem = {
  num: string;
  title: string;
  content: ReactNode;
};

export default function AccordionGrid({ items }: { items: GridItem[] }) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div
      className="grid md:grid-cols-2"
      style={{ border: "1px solid #E8E6DE" }}
    >
      {items.map((item, i) => {
        const isOpen = openSet.has(i);
        const isLeft = i % 2 === 0;
        const isTop  = i < 2;

        return (
          <div
            key={i}
            style={{
              borderRight:  isLeft ? "1px solid #E8E6DE" : undefined,
              borderBottom: isTop  ? "1px solid #E8E6DE" : undefined,
            }}
          >
            {/* Box header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start justify-between gap-6 p-8 text-left"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-[16px] font-light shrink-0"
                  style={{ color: "#C9CBBE", fontFamily: "var(--font-display)", marginTop: "4px" }}
                >
                  {item.num}.
                </span>
                <span
                  className="text-[20px] md:text-[24px] font-semibold leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </span>
              </div>
              <span
                className="shrink-0 text-[22px] font-light select-none"
                style={{
                  color: "#6B6A62",
                  marginTop: "2px",
                  display: "inline-block",
                  lineHeight: 1,
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>

            {/* Collapsible content */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="px-8 pb-8">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
