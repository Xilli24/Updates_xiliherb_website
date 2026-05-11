"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItem = {
  num: string;
  title: string;
  content: ReactNode;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid #E0E0DA" }}>

          {/* Header row */}
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-6 py-8 text-left group"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="shrink-0 text-[20px] font-light"
              style={{ color: "#5BAC2E", fontFamily: "var(--font-display)", width: "52px" }}
            >
              {item.num}.
            </span>
            <span
              className="flex-1 text-[28px] md:text-[36px] font-semibold leading-tight transition-colors duration-150"
              style={{
                color: open === i ? "#1E3F6E" : "#2C2C2C",
                fontFamily: "var(--font-display)",
              }}
            >
              {item.title}
            </span>
            <span
              className="shrink-0 text-[24px] font-light transition-transform duration-300 select-none"
              style={{
                color: "#6B6B6B",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              +
            </span>
          </button>

          {/* Collapsible content — CSS grid trick for smooth height animation */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: open === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.35s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div
                className="pb-12"
                style={{ paddingLeft: "76px" }}
              >
                {item.content}
              </div>
            </div>
          </div>

        </div>
      ))}

      {/* Bottom border */}
      <div style={{ borderTop: "1px solid #E0E0DA" }} />
    </div>
  );
}
