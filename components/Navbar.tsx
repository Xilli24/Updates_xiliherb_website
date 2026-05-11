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

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="w-full px-8 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "rgba(247,246,242,0.97)",
          borderBottom: "1px solid #E0E0DA",
          transition: "background-color 0.3s ease",
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
                  style={{ color: isActive ? "#1E3F6E" : "#6B6B6B" }}
                >
                  {label}
                </span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-200"
                  style={{
                    background: "#5BAC2E",
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
          className="hidden md:inline-block text-[13px] font-medium px-5 py-2 transition-all duration-300 hover:opacity-90"
          style={{ background: "#5BAC2E", color: "#FFFFFF", borderRadius: "2px" }}
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
            style={{ background: "#1E3F6E", transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-200"
            style={{ background: "#1E3F6E", opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: "#1E3F6E", transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] z-40 px-8 py-6 flex flex-col gap-1"
          style={{ background: "rgba(247,246,242,0.99)", borderBottom: "1px solid #E0E0DA" }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] font-medium"
                style={{ color: isActive ? "#1E3F6E" : "#6B6B6B", borderBottom: "1px solid rgba(30,63,110,0.1)" }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-[13px] font-medium px-5 py-3 text-center"
            style={{ background: "#5BAC2E", color: "#FFFFFF", borderRadius: "2px" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
