"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Xylitol" },
  { href: "/process", label: "Process" },
  { href: "/sustainability", label: "Sustainability" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-8 py-3 flex justify-between items-center border-b sticky top-0 z-50 bg-white/90 backdrop-blur-md">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
  src="/logoxili.svg"
  alt="XiliHerb Logo"
  width={140}
  height={60}
  className="h-14 w-auto"
  priority
/>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">

        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link key={href} href={href} className="relative group">

              <span
                className={`text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-[#1E4D3A] font-semibold"
                    : "text-gray-600"
                } group-hover:text-[#14532d]`}
              >
                {label}
              </span>

              {/* Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#1E4D3A] rounded transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />

            </Link>
          );
        })}

        {/* CTA */}
        <Link
          href="/contact"
          className="ml-4 text-sm font-medium text-white px-5 py-2.5 rounded-md bg-[#1E4D3A] hover:opacity-90 transition"
        >
          Contact Us
        </Link>

      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <span className="block w-5 h-px bg-gray-700" />
        <span className="block w-5 h-px bg-gray-700" />
        <span className="block w-5 h-px bg-gray-700" />
      </button>

    </nav>
  );
}