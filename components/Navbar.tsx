"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about",          label: "About" },
  { href: "/team",           label: "Team" },
  { href: "/technology",     label: "Technology" },
  { href: "/sustainability",  label: "Sustainability" },
  { href: "/innovation",     label: "Innovation & Ecosystem" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section="dark"], [data-section="light"]');
    const active = new Map<Element, "dark" | "light">();

    const pick = () => {
      if (active.size === 0) return;
      let nearest: Element | null = null;
      let nearestDist = Infinity;
      active.forEach((_, el) => {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < nearestDist) { nearestDist = dist; nearest = el; }
      });
      if (nearest) setIsDark(active.get(nearest) === "dark");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const type = entry.target.getAttribute("data-section") as "dark" | "light";
          if (entry.isIntersecting) active.set(entry.target, type);
          else active.delete(entry.target);
        });
        pick();
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const navBg      = isDark ? "rgba(26,26,24,0.97)"      : "rgba(245,244,239,0.95)";
  const navBorder  = isDark ? "1px solid rgba(201,203,190,0.10)" : "1px solid #E8E6DE";
  const linkColor  = isDark ? "#C9CBBE" : "#6B6A62";
  const activeColor = isDark ? "#F5F4EF" : "#1A1A18";
  const ctaColor   = isDark ? "#C9CBBE" : "#1A1A18";
  const ctaBorder  = isDark ? "1px solid rgba(201,203,190,0.35)" : "1px solid #1A1A18";
  const barColor   = isDark ? "#C9CBBE" : "#1A1A18";

  return (
    <>
      <nav
        className="w-full px-8 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: navBg,
          borderBottom: navBorder,
          transition: "background-color 0.5s ease, border-color 0.5s ease",
        }}
      >
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logoxili.svg"
            alt="XiliHerb"
            width={120}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="relative group py-1">
                <span
                  className="text-[13px] transition-colors duration-300"
                  style={{ color: isActive ? activeColor : linkColor }}
                >
                  {label}
                </span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-200"
                  style={{
                    background: activeColor,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block text-[13px] font-medium px-5 py-2 transition-all duration-300"
          style={{ color: ctaColor, border: ctaBorder, borderRadius: "2px" }}
        >
          Contact Us
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: barColor, transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-200"
            style={{ background: barColor, opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: barColor, transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] z-40 px-8 py-6 flex flex-col gap-1"
          style={{ background: "rgba(245,244,239,0.98)", borderBottom: "1px solid #E8E6DE" }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] font-medium"
                style={{ color: isActive ? "#1A1A18" : "#6B6A62", borderBottom: "1px solid #E8E6DE" }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-[13px] font-medium px-5 py-3 text-center"
            style={{ background: "#1A1A18", color: "#F5F4EF", borderRadius: "2px" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
