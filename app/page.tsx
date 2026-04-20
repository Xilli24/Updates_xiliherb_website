import Link from "next/link";
import Image from "next/image";

/* ─── small reusable pieces ─────────────────────────────────────── */

function CheckIcon() {
  return (
    <span
      className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full"
      style={{ background: "rgba(122,182,72,0.18)" }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5l2 2 4-4"
          stroke="#7AB648"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PurityBar({
  label,
  value,
  pct,
}: {
  label: string;
  value: string;
  pct: number;
}) {
  return (
    <div>
      <p
        className="text-xs uppercase tracking-widest mb-2"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </p>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: "#7AB648" }}
        />
      </div>
      <p
        className="mt-2 text-2xl"
        style={{ fontFamily: "var(--font-display)", color: "#fff" }}
      >
        {value}
      </p>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[520px]">

        {/* Left — headline + CTA */}
        <div
          className="flex flex-col justify-center px-10 py-20"
          style={{ background: "var(--color-forest)" }}
        >
          {/* Tag */}
          <span
            className="inline-block self-start text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(122,182,72,0.18)",
              color: "#a8d87a",
            }}
          >
            Sustainable Biotechnology
          </span>

          <h1
            className="text-4xl md:text-5xl leading-tight font-semibold mb-5"
            style={{ color: "#fff", fontFamily: "var(--font-display)" }}
          >
            Plant-Derived Xylitol for a{" "}
            <em className="not-italic" style={{ color: "#a8d87a" }}>
              Cleaner
            </em>{" "}
            Industry
          </h1>

          <p
            className="text-base leading-relaxed mb-10 max-w-sm font-light"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            High-purity xylitol produced from agricultural biomass —
            consistent, scalable, and designed for food, oral care, and
            pharmaceutical sectors.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-white px-6 py-3 rounded transition-opacity hover:opacity-90"
              style={{ background: "#7AB648" }}
            >
              Request a Sample
            </Link>
            <Link
              href="/process"
              className="text-sm px-6 py-3 rounded transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              View Our Process
            </Link>
          </div>
        </div>

        {/* Right — hero image with stat cards */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src="/biomass.jpg"
            alt="Agricultural biomass used as raw material for xylitol production"
            fill
             className="object-cover rounded-xl"
  sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Dark overlay so stat cards are readable */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(30,77,58,0.55)" }}
          />

          {/* Stat cards */}
          <div className="relative z-10 flex flex-col gap-4 p-8">
            {[
              { num: "99.2%", label: "Purity Grade" },
              { num: "100%",  label: "Plant-Based Input" },
              { num: "3+",    label: "Industry Applications" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="px-6 py-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <p
                  className="text-3xl font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#fff",
                  }}
                >
                  {num}
                </p>
                <p
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────── */}
      <div
        className="border-y py-4 px-6 flex flex-wrap justify-center gap-8"
        style={{ background: "#fff", borderColor: "var(--color-border)" }}
      >
        {[
          "Headquartered in Bangalore",
          "Serving Global Markets",
          "Research-Backed Process",
          "Agricultural Biomass Input",
        ].map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#7AB648" }}
            />
            {item}
          </span>
        ))}
      </div>

      {/* ── WHAT WE DO ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: "var(--color-leaf)" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-14 leading-snug"
            style={{
              color: "var(--color-forest)",
              fontFamily: "var(--font-display)",
            }}
          >
            Engineered for Efficiency,
            <br />
            Built for Scale
          </h2>

          {/* Feature grid */}
          <div
            className="grid md:grid-cols-3 rounded-xl overflow-hidden"
            style={{
              border: "1px solid var(--color-border)",
              gap: "1px",
              background: "var(--color-border)",
            }}
          >
            {[
              {
                title: "Sustainable Input",
                body: "Utilizing agricultural biomass and plant-based raw materials to drive resource efficiency and reduce industrial waste streams.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1E4D3A" strokeWidth="1.5" width="20" height="20">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Refined Conversion",
                body: "A controlled, process-driven approach that ensures batch-to-batch consistency and high xylitol yield at every stage.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1E4D3A" strokeWidth="1.5" width="20" height="20">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                ),
              },
              {
                title: "Industrial Readiness",
                body: "Designed from day one for scalability — adaptable across food, oral care, and pharmaceutical manufacturing environments.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1E4D3A" strokeWidth="1.5" width="20" height="20">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map(({ title, body, icon }) => (
              <div
                key={title}
                className="bg-white p-8"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "var(--color-leaf-light)" }}
                >
                  {icon}
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT ──────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--color-forest)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3 font-medium"
              style={{ color: "#7AB648" }}
            >
              Our Product
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5 leading-snug"
              style={{ color: "#fff", fontFamily: "var(--font-display)" }}
            >
              Xylitol — High Purity,
              <br />
              Reliable Supply
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 font-light"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Plant-derived, consistently graded, and suitable for demanding
              applications in food manufacturing, oral health, and
              pharmaceutical formulation.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Food-grade certification ready",
                "Pharmaceutical applications",
                "Oral care formulations",
                "Bulk & custom order quantities",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — spec card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-8"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <PurityBar label="Purity Grade"       value="99.2%" pct={99} />
            <PurityBar label="Biomass Utilisation" value="87%"   pct={87} />
            <PurityBar label="Plant-Based Input"   value="100%"  pct={100} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT IMAGE ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3 font-medium"
              style={{ color: "var(--color-leaf)" }}
            >
              Grade & Specification
            </p>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "var(--color-forest)",
                fontFamily: "var(--font-display)",
              }}
            >
              Xylitol (High Purity)
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
              Plant-derived, consistent, and suitable for food, oral care,
              and pharmaceutical applications. Available for bulk orders and
              custom specifications on request.
            </p>
            <Link
              href="/product"
              className="text-sm font-medium underline underline-offset-4"
              style={{ color: "var(--color-forest)" }}
            >
              View full specification →
            </Link>
          </div>

          <Image
            src="/xylitol.jpg"
            alt="High purity xylitol crystals produced by XiliHerb"
            width={600}
            height={256}
            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "var(--color-cream)" }}
      >
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{
            color: "var(--color-forest)",
            fontFamily: "var(--font-display)",
          }}
        >
          Looking for a Reliable Xylitol Supply Partner?
        </h2>
        <p className="text-gray-500 text-base mb-10 font-light max-w-lg mx-auto">
          Talk to our team about your requirements — volume, purity grade,
          and application.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium text-white px-8 py-3.5 rounded transition-opacity hover:opacity-90"
            style={{ background: "var(--color-forest)" }}
          >
            Get in Touch
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium px-8 py-3.5 rounded border transition-colors hover:bg-gray-50"
            style={{
              color: "var(--color-forest)",
              borderColor: "var(--color-forest)",
            }}
          >
            Download Spec Sheet
          </Link>
        </div>
      </section>
    </>
  );
}
