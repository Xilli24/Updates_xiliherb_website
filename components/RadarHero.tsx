"use client";
import React from "react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import { Info, FlaskConical, Leaf, Users, Lightbulb, Mail } from "lucide-react";

const IC = "h-6 w-6 text-slate-600";

export default function RadarHero() {
  return (
    <div className="relative flex h-full min-h-[500px] w-full flex-col items-center justify-center space-y-8 px-4">

      {/* Row 1 — About · Xylitol Technology · Sustainability */}
      <div className="mx-auto w-full max-w-lg">
        <div className="flex w-full items-center justify-between">
          <IconContainer
            text="Our DNA"
            delay={0.2}
            href="/about"
            icon={<Info className={IC} />}
          />
          <IconContainer
            text="The Lab"
            delay={0.35}
            href="/xylitol-technology"
            icon={<FlaskConical className={IC} />}
          />
          <IconContainer
            text="Our Impact"
            delay={0.5}
            href="/sustainability"
            icon={<Leaf className={IC} />}
          />
        </div>
      </div>

      {/* Row 2 — Our Team · Innovation & Ecosystem */}
      <div className="mx-auto w-full max-w-[260px]">
        <div className="flex w-full items-center justify-between">
          <IconContainer
            text="The Builders"
            delay={0.65}
            href="/team"
            icon={<Users className={IC} />}
          />
          <IconContainer
            text="What's Next"
            delay={0.8}
            href="/innovation"
            icon={<Lightbulb className={IC} />}
          />
        </div>
      </div>

      {/* Row 3 — Contact (centred) */}
      <div className="mx-auto">
        <IconContainer
          text="Let's Talk"
          delay={0.95}
          href="/contact"
          icon={<Mail className={IC} />}
        />
      </div>

      {/* Radar — clipped inside its own isolated layer so the outer container stays transparent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Radar className="absolute left-1/2 -bottom-12 -translate-x-1/2" />
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}
