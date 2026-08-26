import type { Metadata } from "next";
import { GRAIN } from "@/lib/constants";
import { SITE } from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";
import ContactOrbitBanner from "@/components/ui/contact-orbit-banner";

export const metadata: Metadata = {
  title: `Contact — ${SITE.brand}`,
  description:
    `Reach out to ${SITE.brand} for partnership inquiries, research collaborations, investment conversations, or to learn more about our sustainable bio-based ingredient technology.`,
  alternates: {
    canonical: `${SITE.canonicalBase}/contact`,
  },
};

export default function Contact() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#1E3F6E", minHeight: "480px" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(26,155,160,0.15) 0%, transparent 60%)" }}
        />

        {/* Orbit half-circle — centre sits on the right border, left half visible */}
        <div
          className="hidden lg:flex absolute right-0 top-0 bottom-0 items-center z-[5] pointer-events-none"
          style={{ transform: "translateX(50%)" }}
        >
          <ContactOrbitBanner />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 pt-28 pb-24">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
            style={{ color: "#5BAC2E" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
            style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
          >
            Work <span style={{ color: "#5BAC2E" }}>With Us</span>
          </h1>
          <p
            className="text-[15px] leading-[1.8] max-w-xl"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Whether you&apos;re a researcher, investor, sustainability partner, or agricultural
            stakeholder — we&apos;d love to hear from you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr,420px] gap-20 items-start">

            {/* Left: contact info */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-8"
                style={{ color: "#5BAC2E" }}
              >
                Contact
              </p>
              <h2
                className="text-[28px] font-semibold leading-snug mb-6"
                style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
              >
                We welcome conversations aligned with our vision
              </h2>
              <p className="text-[15px] leading-[1.8] mb-10" style={{ color: "#6B6B6B" }}>
                {SITE.brand} is open to partnerships, research collaborations, and inquiries
                from those who share our commitment to sustainable bio-based innovation.
              </p>
              <div style={{ borderTop: "1px solid #E0E0DA", paddingTop: "28px" }} className="space-y-6">
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#5BAC2E" }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[15px]"
                    style={{ color: "#1E3F6E" }}
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#5BAC2E" }}
                  >
                    Phone
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="text-[15px]"
                    style={{ color: "#1E3F6E" }}
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#5BAC2E" }}
                  >
                    Office
                  </p>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#6B6B6B" }}>
                    {SITE.registeredAddress.full}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#5BAC2E" }}
                  >
                    Ecosystem
                  </p>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#6B6B6B" }}>
                    {SITE.incubation}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />

          </div>
        </div>
      </section>

    </div>
  );
}
