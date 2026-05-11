import Link from "next/link";

const navLinks = [
  { href: "/about",         label: "About" },
  { href: "/technology",    label: "Technology" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/innovation",    label: "Innovation & Ecosystem" },
  { href: "/contact",       label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1E3F6E" }}>

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10 grid md:grid-cols-3 gap-12">

        <div>
          <p
            className="text-[15px] font-semibold mb-4"
            style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
          >
            XiliHerb
          </p>
          <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            Science-driven bio-innovation developing sustainable technologies
            for natural extracts and next-generation bio-based ingredient systems.
          </p>
        </div>

        <div>
          <h4
            className="text-[11px] uppercase tracking-[0.14em] mb-5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[13px] transition-colors hover:text-[#5BAC2E]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-[11px] uppercase tracking-[0.14em] mb-5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Connect
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Bangalore, India
            </li>
            <li>
              <a
                href="mailto:xilliherb@gmail.com"
                className="text-[13px] transition-colors hover:text-[#5BAC2E]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                xilliherb@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div
        className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap justify-between items-center gap-4 text-[11px]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <span style={{ color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} XiliHerb. All rights reserved.
        </span>
        <span className="uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.35)" }}>
          Science-Led · Sustainable · Bio-Based
        </span>
      </div>

    </footer>
  );
}
