"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const navLinks = [
  { href: "/about",          label: "About" },
  { href: "/xylitol-technology", label: "Xylitol Technology" },
  { href: "/sustainability",  label: "Sustainability" },
  { href: "/innovation",     label: "Innovation & Ecosystem" },
  { href: "/team",           label: "Team" },
  { href: "/contact",        label: "Contact" },
];

const contactInfo = [
  {
    icon: <Mail size={16} className="shrink-0" style={{ color: "#5BAC2E" }} />,
    text: "info@xiliherb.com",
    href: "mailto:info@xiliherb.com",
  },
  {
    icon: <Phone size={16} className="shrink-0" style={{ color: "#5BAC2E" }} />,
    text: "+91 81055 18379",
    href: "tel:+918105518379",
  },
  {
    icon: <MapPin size={16} className="shrink-0" style={{ color: "#5BAC2E" }} />,
    text: "No. 472/7, Balaji Arcade, 20th L Cross Rd, Ejipura, Koramangala VI Bk, Bangalore South, Bangalore - 560095",
    href: "https://www.google.com/maps/search/?api=1&query=No.+472%2F7%2C+Balaji+Arcade%2C+20th+L+Cross+Rd%2C+Ejipura%2C+Koramangala+VI+Bk%2C+Bangalore+South%2C+Bangalore+-+560095",
  },
];

const socialLinks = [
  {
    icon: <XIcon />,
    label: "X (Twitter)",
    href: "https://x.com/xiliherb",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xiliherb-naturals-private-limited",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    href: "https://wa.me/918105518379",
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
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
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
          <div className="flex gap-5">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_8px_#5BAC2E]"
                style={{ color: "#5BAC2E" }}
              >
                {icon}
              </a>
            ))}
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Xiliherb Naturals Pvt Ltd. All rights reserved.
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
