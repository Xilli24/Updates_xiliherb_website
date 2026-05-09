"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function RevealImage({ src, alt, width, height, className, style, delay = 0 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.clipPath = "inset(0 100% 0 0)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        wrapper.style.transition = `clip-path 1s cubic-bezier(0.77, 0, 0.18, 1) ${delay}ms`;
        wrapper.style.clipPath = "inset(0 0% 0 0)";
      },
      { threshold: 0.2 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ width: "100%", height: "auto", display: "block", ...style }}
      />
    </div>
  );
}
