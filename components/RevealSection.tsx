"use client";

import type React from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface Props {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevealSection({ children, delay = 0, threshold = 0.15, className, style }: Props) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
