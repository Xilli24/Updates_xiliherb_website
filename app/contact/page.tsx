import type { Metadata } from "next";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — XiliHerb",
  description:
    "Reach out to XiliHerb for partnership inquiries, research collaborations, investment conversations, or to learn more about our sustainable bio-based ingredient technology.",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FAFAF8",
  border: "1px solid #E8E6DE",
  borderRadius: "2px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#1A1A18",
  outline: "none",
  display: "block",
};

export default function Contact() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#1A1A18" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(201,203,190,0.07) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pt-28 pb-24">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
            style={{ color: "#C9CBBE" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
            style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
          >
            Work With Us
          </h1>
          <p
            className="text-[15px] leading-[1.8] max-w-xl"
            style={{ color: "rgba(245,244,239,0.78)" }}
          >
            Whether you&apos;re a researcher, investor, sustainability partner, or agricultural
            stakeholder — we&apos;d love to hear from you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24" style={{ background: "#F5F4EF" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr,420px] gap-20 items-start">

            {/* Left: contact info */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-8"
                style={{ color: "#C9CBBE" }}
              >
                Contact
              </p>
              <h2
                className="text-[28px] font-semibold leading-snug mb-6"
                style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
              >
                We welcome conversations aligned with our vision
              </h2>
              <p className="text-[15px] leading-[1.8] mb-10" style={{ color: "#6B6A62" }}>
                XiliHerb is open to partnerships, research collaborations, and inquiries
                from those who share our commitment to sustainable bio-based innovation.
              </p>
              <div style={{ borderTop: "1px solid #E8E6DE", paddingTop: "28px" }} className="space-y-6">
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#C9CBBE" }}
                  >
                    Email
                  </p>
                  <p className="text-[15px]" style={{ color: "#1A1A18" }}>
                    xilliherb@gmail.com
                  </p>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#C9CBBE" }}
                  >
                    Ecosystem
                  </p>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#6B6A62" }}>
                    AIC &amp; GKVK Innovation Hub
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company / Organisation"
                style={inputStyle}
              />
              <select
                style={{ ...inputStyle, color: "#6B6A62", appearance: "none" }}
                defaultValue=""
              >
                <option value="" disabled style={{ color: "#6B6A62" }}>Nature of Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="research">Research Collaboration</option>
                <option value="investment">Investment</option>
                <option value="sourcing">Agricultural Sourcing</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your message"
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                type="submit"
                className="w-full text-[12px] uppercase tracking-[0.14em] font-medium transition-colors duration-150"
                style={{
                  background: "#1A1A18",
                  color: "#F5F4EF",
                  borderRadius: "2px",
                  padding: "15px 24px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit Inquiry
              </button>
              <p className="text-[12px] text-center" style={{ color: "#C9CBBE" }}>
                We typically respond within 2–3 business days.
              </p>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}
