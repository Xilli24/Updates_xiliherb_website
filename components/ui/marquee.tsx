"use client";

import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{ gap, ...style } as CSSProperties}
      className={cn(
        "group flex overflow-hidden p-2",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          style={{
            gap,
            ["--gap" as string]: gap,
            animationName: vertical ? "marquee-vertical" : "marquee",
            animationDuration: duration,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties}
          className={cn(
            "flex shrink-0 justify-around",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
