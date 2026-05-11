"use client";
import { Leaf, Zap, FlaskConical, Activity, Droplets, Gem } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const processTimelineData = [
  {
    id: 1,
    title: "Harvest",
    date: "Step 01",
    content: "Post-harvest corn cobs collected from partner farms across Karnataka and Maharashtra.",
    category: "Feedstock",
    icon: Leaf,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Pretreat",
    date: "Step 02",
    content: "Steam explosion breaks down the lignocellulosic structure of corn cob biomass.",
    category: "Pre-treatment",
    icon: Zap,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Hydrolyse",
    date: "Step 03",
    content: "Enzymatic hydrolysis releases xylose sugars from hemicellulose fractions.",
    category: "Hydrolysis",
    icon: FlaskConical,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Ferment",
    date: "Step 04",
    content: "Xylose converted to xylitol via microbial bioconversion pathway.",
    category: "Bioconversion",
    icon: Activity,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Purify",
    date: "Step 05",
    content: "Chromatographic separation removes impurities and concentrates xylitol.",
    category: "Purification",
    icon: Droplets,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 6,
    title: "Crystallise",
    date: "Step 06",
    content: "Food-grade xylitol crystals formed through controlled crystallisation and drying.",
    category: "Crystallisation",
    icon: Gem,
    relatedIds: [5],
    status: "pending" as const,
    energy: 20,
  },
];

export default function TechnologyTimeline() {
  return <RadialOrbitalTimeline timelineData={processTimelineData} />;
}
