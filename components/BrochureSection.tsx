import { Download } from "lucide-react";

const PDF_PATH = "/XiliHerb Naturals — Brochure.pdf";

export default function BrochureSection() {
  return (
    <section
      data-section="dark"
      className="relative overflow-hidden"
      style={{ background: "#1E3F6E" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(91,172,46,0.4) 50%, transparent 95%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(91,172,46,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <p
          className="text-[11px] uppercase tracking-[0.2em] font-medium mb-6"
          style={{ color: "#5BAC2E" }}
        >
          Company Brochure
        </p>
        <h2
          className="text-4xl md:text-[44px] font-semibold leading-[1.1] mb-6"
          style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
        >
          Everything About{" "}
          <span style={{ color: "#5BAC2E" }}>XiliHerb</span>{" "}
          in One Document
        </h2>
        <p
          className="text-[15px] leading-[1.8] mb-8 max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Our company brochure covers XiliHerb's technology platform,
          sustainability approach, and partnership opportunities.
        </p>
        <a
          href={PDF_PATH}
          download="XiliHerb Naturals — Brochure.pdf"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-medium transition-opacity hover:opacity-80"
          style={{ background: "#5BAC2E", color: "#fff" }}
        >
          <Download size={14} />
          Download Brochure
        </a>
      </div>
    </section>
  );
}
