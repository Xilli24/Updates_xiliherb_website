"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";

const people = [
  { slug: "mallikarjuna-g", initials: "MK", gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)", name: "Mallikarjuna G.", role: "Founder & CEO" },
  { slug: "sourabh-prabha", initials: "SP", gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)", name: "Sourabh Prabha", role: "Senior Research Associate" },
  { slug: "ananya-a-b", initials: "AA", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", name: "Ananya A.B", role: "Research Associate" },
  { slug: "sakshi-raibagi", initials: "SR", gradient: "linear-gradient(135deg, #1A9BA0 0%, #5BAC2E 100%)", name: "Sakshi Raibagi", role: "Research Intern" },
  { slug: "savita-manganavar", initials: "SS", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", name: "Dr. Savita S. Manganavar", role: "Academic Advisor" },
  { slug: "umashankar-n", initials: "UN", gradient: "linear-gradient(135deg, #1A9BA0 0%, #1E3F6E 100%)", name: "Dr. Umashankar N.", role: "Academic Advisor" },
];

function Card({ person }: { person: (typeof people)[number] }) {
  return (
    <Link
      href={`#${person.slug}`}
      className="flex w-40 shrink-0 flex-col overflow-hidden transition-opacity hover:opacity-80"
      style={{
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{ height: 140, background: person.gradient }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 52,
            height: 52,
            background: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,255,255,0.32)",
            fontFamily: "var(--font-display)",
            fontSize: 18,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "0.04em",
          }}
        >
          {person.initials}
        </div>
      </div>
      <div className="p-2.5">
        <p
          className="text-[12px] font-semibold leading-snug truncate"
          style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
        >
          {person.name}
        </p>
        <p className="text-[10px] mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.5)" }}>
          {person.role}
        </p>
      </div>
    </Link>
  );
}

export default function TeamMarquee() {
  return (
    <div className="hidden lg:block relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-14"
        style={{ background: "linear-gradient(to right, #1E3F6E, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-14"
        style={{ background: "linear-gradient(to left, #1E3F6E, transparent)" }}
      />
      <Marquee gap="0.75rem" duration="26s" pauseOnHover>
        {people.map((person) => (
          <Card key={person.name} person={person} />
        ))}
      </Marquee>
    </div>
  );
}
