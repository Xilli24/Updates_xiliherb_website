import {
  Leaf, FlaskConical, Recycle, Zap, Layers, Globe, Users, Microscope,
  Droplets, BarChart2, Heart, Shield, Sprout, TrendingUp, Building2,
} from "lucide-react";
import type React from "react";

type IconComp = React.ComponentType<{ style?: React.CSSProperties }>;

const ICON_MAP: Record<string, IconComp> = {
  Leaf, FlaskConical, Recycle, Zap, Layers, Globe, Users, Microscope,
  Droplets, BarChart2, Heart, Shield, Sprout, TrendingUp, Building2,
};

type FeatureItem = { icon: string; title: string; desc: string };

export default function FeatureCards({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mt-5">
      {items.map((item, i) => {
        const Icon = ICON_MAP[item.icon];
        return (
          <div
            key={i}
            className="flex gap-3 p-4"
            style={{ border: "1px solid #E8E6DE", borderRadius: "4px" }}
          >
            <div
              className="shrink-0 w-9 h-9 flex items-center justify-center"
              style={{ background: "#E8E6DE", borderRadius: "4px" }}
            >
              {Icon && <Icon style={{ width: "16px", height: "16px", color: "#6B6A62" }} />}
            </div>
            <div>
              <p
                className="text-[13px] font-medium mb-1"
                style={{ color: "#1A1A18" }}
              >
                {item.title}
              </p>
              <p
                className="text-[12px] leading-[1.6]"
                style={{ color: "#6B6A62" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
