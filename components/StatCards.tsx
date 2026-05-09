"use client";

import { useEffect, useRef } from "react";

type StatItem = { num: string; unit: string; label: string };

function parseNum(str: string): { prefix: string; value: number; suffix: string } | null {
  const match = str.match(/^(\D*)([\d.]+)(\D*)$/);
  if (!match) return null;
  const value = parseFloat(match[2]);
  if (isNaN(value) || value === 0) return null;
  return { prefix: match[1], value, suffix: match[3] };
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatCards({ items }: { items: StatItem[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const triggered = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        items.forEach((item, i) => {
          const span = spanRefs.current[i];
          if (!span) return;
          const parsed = parseNum(item.num);
          if (!parsed) return;
          const { prefix, value, suffix } = parsed;
          const isFloat = item.num.includes(".");
          const duration = 1400;
          const startTime = performance.now();

          span.textContent = prefix + "0" + suffix;

          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const current = value * easeOutCubic(t);
            const display = isFloat ? current.toFixed(1) : Math.round(current).toString();
            span.textContent = prefix + display + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, [items]);

  return (
    <div ref={gridRef} className="grid grid-cols-3 gap-3 mt-5">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-5 flex flex-col"
          style={{ background: "#1A1A18", borderRadius: "4px" }}
        >
          <span
            ref={(el) => { spanRefs.current[i] = el; }}
            className="text-[28px] font-semibold leading-none"
            style={{ color: "#C9CBBE" }}
          >
            {item.num}
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.08em] mt-1 mb-3"
            style={{ color: "#6B6A62" }}
          >
            {item.unit}
          </span>
          <span
            className="text-[13px] leading-[1.55]"
            style={{ color: "#F5F4EF" }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
