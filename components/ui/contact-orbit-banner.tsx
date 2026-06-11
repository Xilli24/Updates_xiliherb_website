"use client";

import React from "react";
import {
  FlaskConical,
  GraduationCap,
  TrendingUp,
  Landmark,
  Rocket,
  Sprout,
  Factory,
  Building2,
  Leaf,
  type LucideIcon,
} from "lucide-react";

interface OrbitItem {
  Icon: LucideIcon;
  color: string;
  label: string;
}

const innerOrbit: OrbitItem[] = [
  { Icon: FlaskConical,  color: "#1A9BA0", label: "Researchers" },
  { Icon: GraduationCap, color: "#60A5FA", label: "Universities" },
  { Icon: TrendingUp,    color: "#F59E0B", label: "Investors" },
  { Icon: Landmark,      color: "#A78BFA", label: "Government" },
];

const outerOrbit: OrbitItem[] = [
  { Icon: Rocket,    color: "#FB923C", label: "Incubators" },
  { Icon: Sprout,    color: "#5BAC2E", label: "Agriculture" },
  { Icon: Factory,   color: "#94A3B8", label: "Manufacturing" },
  { Icon: Building2, color: "#22D3EE", label: "Corporate" },
];

const orbits = [
  { icons: innerOrbit, durationSec: 20, sizeRem: 18 },
  { icons: outerOrbit, durationSec: 32, sizeRem: 30 },
];

export default function ContactOrbitBanner() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: "32rem", height: "32rem" }}>
      {/* Center leaf */}
      <div
        className="absolute z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: "rgba(91,172,46,0.15)",
          border: "2px solid rgba(91,172,46,0.45)",
        }}
      >
        <Leaf className="w-8 h-8" style={{ color: "#5BAC2E" }} />
      </div>

      {orbits.map(({ icons, durationSec, sizeRem }, orbitIdx) => {
        const angleStep = (2 * Math.PI) / icons.length;
        return (
          <div
            key={orbitIdx}
            className="absolute rounded-full"
            style={{
              width: `${sizeRem}rem`,
              height: `${sizeRem}rem`,
              border: "1px dashed rgba(255,255,255,0.18)",
              animation: `orbit-spin ${durationSec}s linear infinite`,
            }}
          >
            {icons.map((cfg, iconIdx) => {
              const angle = iconIdx * angleStep - Math.PI / 2;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);
              return (
                <div
                  key={iconIdx}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  {/* Counter-rotate so icons and labels always face upward */}
                  <div
                    className="flex flex-col items-center gap-1"
                    style={{ animation: `orbit-counter-spin ${durationSec}s linear infinite` }}
                  >
                    <div
                      className="rounded-full p-2.5 shadow-lg"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.22)",
                      }}
                    >
                      <cfg.Icon className="w-5 h-5" style={{ color: cfg.color }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold text-center leading-tight px-1.5 py-0.5 rounded-full"
                      style={{
                        color: "#ffffff",
                        background: "rgba(0,0,0,0.45)",
                        maxWidth: "72px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
