"use client";
import {Leaf, 
  FlaskConical, 
  Layers, 
  Droplets, 
  Sparkles  } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#F7F9F7] text-[#1F1F1F]">

      {/* 🔷 HERO */}
      <section className="relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 py-32 text-center">

    {/* Tag */}
    <span className="text-sm text-green-700 font-medium">
      Biomass-to-Ingredients Platform
    </span>

    {/* Headline */}
    <h1 className="text-5xl md:text-6xl font-semibold mt-4 leading-tight">
      Reimagining Ingredients —
      <br /> From Residues to Value
    </h1>

    {/* Subtext */}
    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
      Xiliherb is building a platform to convert agricultural biomass into high-value,
      sustainable ingredients — starting with xylitol.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex justify-center gap-4">
      <button className="px-6 py-3 bg-[#0F3D2E] text-white rounded-xl">
        Explore Our Approach
      </button>
      <button className="px-6 py-3 border border-gray-300 rounded-xl">
        Partner With Us
      </button>
    </div>

    {<div className="mt-16 flex justify-center">
  <svg
    width="520"
    height="240"
    viewBox="0 0 520 240"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-2xl"
  >
    <defs>
      {/* Gradient */}
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="50%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>

      {/* Glow */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background */}
    <rect width="520" height="240" rx="20" fill="#f7f9f7" />

    {/* Flow Line */}
    <path
      d="M 80 120 C 180 60, 340 180, 440 120"
      stroke="url(#flowGradient)"
      strokeWidth="3"
      fill="none"
      strokeDasharray="6 6"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;12"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>

    {/* Nodes */}
    <g filter="url(#glow)">
      <circle cx="80" cy="120" r="18" fill="#86efac" />
      <circle cx="260" cy="120" r="18" fill="#4ade80" />
      <circle cx="440" cy="120" r="18" fill="#22c55e" />
    </g>

    {/* Labels */}
    <text x="80" y="160" textAnchor="middle" fontSize="12" fill="#14532d">
      Biomass
    </text>
    <text x="260" y="160" textAnchor="middle" fontSize="12" fill="#14532d">
      Conversion
    </text>
    <text x="440" y="160" textAnchor="middle" fontSize="12" fill="#14532d">
      Ingredient
    </text>

    {/* Moving Particle */}
    <circle r="6" fill="#22c55e">
      <animateMotion
        dur="3s"
        repeatCount="indefinite"
        path="M 80 120 C 180 60, 340 180, 440 120"
      />
    </circle>

  </svg>
</div>}

    {/* Stats */}
    <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
      <div className="bg-white p-4 rounded-xl shadow-sm">Concept Stage</div>
      <div className="bg-white p-4 rounded-xl shadow-sm">Biomass Focus</div>
      <div className="bg-white p-4 rounded-xl shadow-sm">Platform in Development</div>
    </div>

  </div>
</section>

      {/* 🔷 WHAT WE'RE BUILDING */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <span className="text-green-700 text-sm">What We’re Building</span>
    <h2 className="text-4xl font-semibold mt-2">
      Designing a New Approach to Sustainable Ingredient Production
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "Feedstock Exploration",
        desc: "Evaluating agricultural residues as scalable raw materials.",
        icon: Leaf,
      },
      {
        title: "Conversion Pathways",
        desc: "Exploring bioconversion and green processing techniques.",
        icon: FlaskConical,
      },
      {
        title: "Platform Thinking",
        desc: "Designing a system for multiple ingredient outputs.",
        icon: Layers,
      },
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 mb-4">
            <Icon className="w-6 h-6 text-green-700" />
          </div>

          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-3 text-gray-600">{item.desc}</p>
        </motion.div>
      );
    })}
  </div>
</section>

      {/* 🔷 WHY XYLITOL */}
      <section className="bg-green-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-green-700 text-sm">Initial Focus</span>
          <h2 className="text-4xl font-semibold mt-2">
            Why Xylitol is Our Starting Point
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Xylitol represents a strong entry point due to its growing demand,
            established applications, and limitations in current production methods.
          </p>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are exploring more sustainable production pathways using agricultural biomass.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-semibold">
      A Platform, Not Just a Product
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Our approach is designed to extend beyond a single ingredient.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {["Xylitol", "Rare Sugars", "Functional Ingredients", "Bio-based Chemicals"].map((item, i) => (
        <div key={i} className="p-6 bg-green-50 rounded-xl">
          {item}
        </div>
      ))}
    </div>

  </div>
</section>

{/* 🔷 PROCESS SECTION */}
<section className="relative max-w-6xl mx-auto px-6 py-24">

  {/* 🔥 BACKGROUND TEXTURE */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,#bbf7d0,transparent_50%)]"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-green-700 text-sm">Approach</span>
      <h2 className="text-4xl font-semibold mt-2">
        From Biomass to Functional Ingredients
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We are building a structured pathway to convert agricultural residues into high-value ingredients.
      </p>
    </div>

    {/* Diagram */}
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">

      {/* Connection line (desktop only) */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-green-200 via-green-300 to-green-400" />

      {[
        { label: "Biomass", icon: Leaf },
        { label: "Conversion", icon: FlaskConical },
        { label: "Refinement", icon: Droplets },
        { label: "Ingredients", icon: Sparkles },
      ].map((step, i) => {
        const Icon = step.icon;

        return (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">

            {/* Circle with icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-green-200 shadow-sm">
              <Icon className="w-6 h-6 text-green-700" />
            </div>

            {/* Label */}
            <p className="mt-4 text-sm text-gray-700">{step.label}</p>

          </div>
        );
      })}
    </div>

    {/* Bottom text */}
    <p className="text-center mt-16 text-gray-600 max-w-2xl mx-auto">
      Our approach is designed as a scalable system — enabling multiple outputs from a single biomass feedstock.
    </p>

  </div>
</section>
      {/* 🔷 CTA */}
      <section className="bg-[#0F3D2E] text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold">
            Building the Future of Sustainable Ingredients
          </h2>

          <p className="mt-6 text-gray-200">
            We are in the early stages and actively looking to collaborate with partners,
            researchers, and early supporters.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-[#0F3D2E] rounded-xl font-medium hover:shadow-lg">
              Start a Conversation
            </button>
            <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10">
              Collaborate With Us
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}