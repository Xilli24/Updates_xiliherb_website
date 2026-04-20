import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/product",      label: "Xylitol" },
  { href: "/process",      label: "Process" },
  { href: "/sustainability",label: "Sustainability" },
];

export default function Navbar() {
  return (
    <nav
      className="w-full px-8 py-0 flex justify-between items-center border-b sticky top-0 z-50 h-16"
      style={{
        background: "#fff",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Logo — clicking takes user to homepage */}
      <Link href="/" aria-label="XiliHerb Home" className="flex items-center">
        <img
  src="/logo.png"
  alt="XiliHerb Logo"
  className="h-14 w-auto"
/>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-gray-600 hover:text-[#1E4D3A] transition-colors duration-150 tracking-wide"
          >
            {label}
          </Link>
        ))}

        {/* CTA button */}
        <Link
          href="/contact"
          className="text-sm font-medium text-white px-5 py-2 rounded transition-opacity duration-150 hover:opacity-90"
          style={{ background: "var(--color-forest)" }}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile placeholder — hamburger menu can be added later */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Open menu"
      >
        <span className="block w-5 h-px bg-gray-700" />
        <span className="block w-5 h-px bg-gray-700" />
        <span className="block w-5 h-px bg-gray-700" />
      </button>
    </nav>
  );
}
