"use client";

import type React from "react";
import { useRef } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export default function MagneticButton({ children, href, onClick, style, className }: Props) {
  const elRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    el.style.transition = "transform 0.15s ease";
  };

  const onMouseLeave = () => {
    const el = elRef.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.4s ease";
  };

  if (href) {
    return (
      <Link
        ref={elRef as React.Ref<HTMLAnchorElement>}
        href={href}
        style={style}
        className={className}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={elRef as React.Ref<HTMLButtonElement>}
      style={style}
      className={className}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
