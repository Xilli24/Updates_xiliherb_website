import Link from "next/link";

const navLinks = [
  { href: "/",              label: "Home" },
  { href: "/about",         label: "About" },
  { href: "/product",       label: "Xylitol" },
  { href: "/process",       label: "Process" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact",       label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "rgba(255,255,255,0.5)" }}>

      {/* Main grid */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <p
            className="text-lg font-semibold mb-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "#fff",
            }}
          >
            XiliHerb
          </p>
          <p className="text-sm leading-relaxed font-light">
            Plant-derived xylitol production focused on efficiency,
            consistency, and sustainable industrial supply.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-light">
            <li>Bangalore, India</li>
            <li>
              <a
                href="mailto:info@xiliherb.com"
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                info@xiliherb.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span>© {new Date().getFullYear()} XiliHerb. All rights reserved.</span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>
          Plant-Derived · Research-Backed · Globally Supplied
        </span>
      </div>

    </footer>
  );
}
