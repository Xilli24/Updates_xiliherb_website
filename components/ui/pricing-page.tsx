import React from "react";
import Link from "next/link";
import { Microscope, Sprout, TrendingUp, Building2 } from "lucide-react";

// --- CheckIcon ---
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10" height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0F2A18"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// --- Types ---
interface PartnerCardProps {
  name: string;
  tagline: string;
  typeLabel: string;
  typeDesc: string;
  features: string[];
  icon: React.ReactNode;
  iconBgClass: string;
  accentFrom: string;
  accentMid: string;
  accentTo: string;
  isFeatured?: boolean;
  buttonText: string;
  buttonHref: string;
}

// --- PartnerCard ---
function PartnerCard({
  name,
  tagline,
  typeLabel,
  typeDesc,
  features,
  icon,
  iconBgClass,
  accentFrom,
  accentMid,
  accentTo,
  isFeatured = false,
  buttonText,
  buttonHref,
}: PartnerCardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "hsla(215, 40%, 8%, 1)",
    backgroundImage: [
      "radial-gradient(at 88% 40%, hsla(215, 40%, 8%, 1) 0px, transparent 85%)",
      "radial-gradient(at 49% 30%, hsla(215, 40%, 8%, 1) 0px, transparent 85%)",
      "radial-gradient(at 14% 26%, hsla(215, 40%, 8%, 1) 0px, transparent 85%)",
      `radial-gradient(at 0% 64%, ${accentFrom} 0px, transparent 85%)`,
      `radial-gradient(at 41% 94%, ${accentMid} 0px, transparent 85%)`,
      `radial-gradient(at 100% 99%, ${accentTo} 0px, transparent 85%)`,
    ].join(", "),
    boxShadow: "0px -16px 24px 0px rgba(255,255,255,0.06) inset",
  };

  const borderContainerStyle: React.CSSProperties = {
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% + 2px)",
    height: "calc(100% + 2px)",
    backgroundImage: "linear-gradient(0deg, rgba(255,255,255,0.12) -50%, rgba(255,255,255,0.04) 100%)",
    borderRadius: "1rem",
  };

  const rotatingBorderStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    transformOrigin: "center",
    width: "200%",
    height: "10rem",
    backgroundImage:
      "linear-gradient(0deg, hsla(0,0%,100%,0) 0%, hsla(97,48%,43%,0.6) 40%, hsla(97,48%,43%,0.6) 60%, hsla(0,0%,40%,0) 100%)",
    animation: "xili-rotate 8s linear infinite",
  };

  return (
    <div
      className="relative hover:scale-[1.02] transition-all duration-300 rounded-2xl p-4 flex flex-col overflow-hidden"
      style={cardStyle}
    >
      <style>{`@keyframes xili-rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

      {isFeatured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
          <span
            className="text-white text-[10px] font-semibold px-4 py-1 rounded-full tracking-widest uppercase"
            style={{ background: "linear-gradient(90deg, #1E3F6E, #5BAC2E)" }}
          >
            Key Partner
          </span>
        </div>
      )}

      {/* Animated border */}
      <div style={borderContainerStyle}>
        <div style={rotatingBorderStyle} />
      </div>

      {/* Card content — above border layers */}
      <div className="relative z-10 flex-grow">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-xl border border-white/15 bg-gradient-to-br ${iconBgClass} flex items-center justify-center`}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight text-white">{name}</h3>
              <p className="text-[11px] leading-tight mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                {tagline}
              </p>
            </div>
          </div>
          <div className="h-4 w-4 rounded-full border-2 border-white/20 shrink-0" />
        </div>

        {/* Type label (replaces price) */}
        <div className="mb-5">
          <div className="flex items-baseline gap-2">
            <span
              className="text-2xl font-semibold tracking-tight"
              style={{ color: "#5BAC2E" }}
            >
              {typeLabel}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {typeDesc}
            </span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
            Open for partnership enquiries
          </p>
        </div>

        <ul className="space-y-2.5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-[12px]" style={{ color: "rgba(255,255,255,0.75)" }}>
              <div
                className="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                style={{ background: "#5BAC2E" }}
              >
                <CheckIcon />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-5">
        <Link
          href={buttonHref}
          className="flex items-center justify-center w-full h-10 rounded-lg text-[13px] font-semibold transition-all hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #1E3F6E 0%, #2D6B35 100%)", color: "#F7F6F2" }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

// --- CollaborationCards (XiliHerb partnership section) ---
export function CollaborationCards() {
  const cards: PartnerCardProps[] = [
    {
      name: "Research Collaborators",
      tagline: "University labs and independent researchers working on biomass or ingredient science",
      typeLabel: "Academic",
      typeDesc: "partnership",
      icon: <Microscope size={18} style={{ color: "#1A9BA0" }} />,
      iconBgClass: "from-teal-500/20 to-cyan-500/20",
      accentFrom: "hsla(182,73%,35%,0.5)",
      accentMid:  "hsla(182,73%,35%,0.3)",
      accentTo:   "hsla(215,57%,30%,0.4)",
      isFeatured: false,
      features: [
        "Biomass Research Partnerships",
        "Academic Innovation Network",
        "Bio-Based Research Alliances",
        "Scientific Collaboration Ecosystem",
      ],
      buttonText: "Explore Collaboration",
      buttonHref: "/contact",
    },
    {
      name: "Agricultural Partners",
      tagline: "FPOs and sourcing networks in corn-growing regions of Karnataka and Maharashtra",
      typeLabel: "Sourcing",
      typeDesc: "network",
      icon: <Sprout size={18} style={{ color: "#5BAC2E" }} />,
      iconBgClass: "from-green-500/20 to-emerald-500/20",
      accentFrom: "hsla(97,48%,35%,0.55)",
      accentMid:  "hsla(131,42%,28%,0.4)",
      accentTo:   "hsla(97,48%,25%,0.3)",
      isFeatured: false,
      features: [
        "Agricultural Sourcing Networks",
        "Regional Farmer Partnerships",
        "Sustainable Feedstock Networks",
        "Corn Supply Collaborations",
      ],
      buttonText: "Join Network",
      buttonHref: "/contact",
    },
    {
      name: "Investors",
      tagline: "Seed and pre-Series A investors aligned with deep-tech and agri-biotech",
      typeLabel: "Seed · Pre-A",
      typeDesc: "stage",
      icon: <TrendingUp size={18} style={{ color: "#F7F6F2" }} />,
      iconBgClass: "from-blue-500/20 to-indigo-500/20",
      accentFrom: "hsla(215,57%,30%,0.7)",
      accentMid:  "hsla(215,57%,45%,0.4)",
      accentTo:   "hsla(97,48%,35%,0.35)",
      isFeatured: false,
      features: [
        "Agri-Biotech Investor Network",
        "Early-Stage Innovation Capital",
        "Biotech Growth Investors",
        "Bioeconomy Investment Ecosystem",
      ],
      buttonText: "Investment Inquiry",
      buttonHref: "/contact",
    },
    {
      name: "Industry Partners",
      tagline: "Food, pharma, and FMCG companies seeking natural ingredient supply alternatives",
      typeLabel: "B2B",
      typeDesc: "supply chain",
      icon: <Building2 size={18} style={{ color: "#E0D5A8" }} />,
      iconBgClass: "from-amber-500/15 to-yellow-500/10",
      accentFrom: "hsla(131,42%,28%,0.5)",
      accentMid:  "hsla(215,57%,28%,0.4)",
      accentTo:   "hsla(182,73%,30%,0.35)",
      isFeatured: false,
      features: [
        "Natural Ingredient Partnerships",
        "Sustainable Supply Alliances",
        "FMCG Innovation Partners",
        "Industrial Ingredient Collaborations",
      ],
      buttonText: "Partner With Us",
      buttonHref: "/contact",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <PartnerCard key={card.name} {...card} />
      ))}
    </div>
  );
}

export default CollaborationCards;
