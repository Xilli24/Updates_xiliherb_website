"use client";
import React from "react";
import Link from "next/link";
import { Mail, MapPin, Share2, FlaskConical } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const navLinks = [
  { href: "/about",          label: "About" },
  { href: "/technology",     label: "Technology" },
  { href: "/sustainability",  label: "Sustainability" },
  { href: "/innovation",     label: "Innovation & Ecosystem" },
  { href: "/team",           label: "Team" },
  { href: "/contact",        label: "Contact" },
];

const contactInfo = [
  {
    icon: <Mail size={16} className="shrink-0" style={{ color: "#5BAC2E" }} />,
    text: "xilliherb@gmail.com",
    href: "mailto:xilliherb@gmail.com",
  },
  {
    icon: <MapPin size={16} className="shrink-0" style={{ color: "#5BAC2E" }} />,
    text: "AIC & GKVK Innovation Hub, Bangalore, India",
  },
];

const socialLinks = [
  {
    icon: <Share2 size={18} />,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: <FlaskConical size={18} />,
    label: "Research",
    href: "#",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: "mailto:xilliherb@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0F1A2E" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

          {/* Brand */}
          <div className="flex flex-col space-y-4 lg:col-span-1">
            <p
              className="text-[18px] font-bold"
              style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
            >
              Xili<span style={{ color: "#5BAC2E" }}>Herb</span>
            </p>
            <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Science-driven bio-innovation developing sustainable technologies
              for natural extracts and next-generation bio-based ingredient systems.
            </p>
            <p
              className="text-[11px] uppercase tracking-[0.14em] pt-2"
              style={{ color: "rgba(91,172,46,0.7)" }}
            >
              Incubated at AIC-GKVK · UASB · 2026
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.14em] mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#5BAC2E")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.14em] mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Focus Areas
            </h4>
            <ul className="space-y-3">
              {[
                "Bio-Based Xylitol",
                "Enzymatic Hydrolysis",
                "Corn Cob Valorization",
                "Circular Bio-Economy",
                "Sustainable Ingredients",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.14em] mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[13px] leading-relaxed transition-colors"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#5BAC2E")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div
          className="py-6 flex flex-wrap justify-between items-center gap-4 text-[11px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex gap-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#5BAC2E")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {icon}
              </a>
            ))}
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} XiliHerb. All rights reserved.
          </span>
          <span
            className="uppercase tracking-[0.1em] hidden md:block"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Science-Led · Sustainable · Bio-Based
          </span>
        </div>

        {/* Text hover effect — sits flush below the copyright bar */}
        <Link href="/" className="lg:flex hidden h-[8rem]">
          <TextHoverEffect text="XiliHerb" />
        </Link>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
