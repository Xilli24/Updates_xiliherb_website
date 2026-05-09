"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/technology",   label: "Technology" },
  { href: "/sustainability",label: "Sustainability" },
  { href: "/innovation",   label: "Innovation & Ecosystem" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="w-full px-8 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(245,244,239,0.95)", borderBottom: "1px solid #E8E6DE" }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logoxili.svg"
          alt="XiliHerb"
          width={120}
          height={44}
          className="h-10 w-auto"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className="relative group py-1">
              <span
                className="text-[13px] transition-colors duration-150"
                style={{ color: isActive ? "#1A1A18" : "#6B6A62" }}
              >
                {label}
              </span>
              <span
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-200"
                style={{
                  background: "#1A1A18",
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
        className="hidden md:inline-block text-[13px] font-medium px-5 py-2 transition-all duration-150 hover:bg-[#1A1A18] hover:text-[#F5F4EF]"
        style={{
          color: "#1A1A18",
          border: "1px solid #1A1A18",
          borderRadius: "2px",
        }}
      >
        Contact Us
      </Link>

      <button className="md:hidden flex flex-col gap-[5px] p-1">
        <span className="block w-5 h-px" style={{ background: "#1A1A18" }} />
        <span className="block w-5 h-px" style={{ background: "#1A1A18" }} />
        <span className="block w-5 h-px" style={{ background: "#1A1A18" }} />
      </button>
    </nav>
  );
}
