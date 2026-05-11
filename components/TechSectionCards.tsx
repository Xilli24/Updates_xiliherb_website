"use client"

import { Component } from "@/components/ui/morphing-card-stack"
import { Leaf, FlaskConical, Recycle, Zap, Layers, Globe, Users, Microscope } from "lucide-react"

const extractionCards = [
  {
    id: "1",
    title: "Renewable feedstock",
    description: "Non-GMO corn cob residues — a crop byproduct with no competing use.",
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Enzymatic hydrolysis",
    description: "Breaks xylan polysaccharides into fermentable xylose without strong acids.",
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "Solvent recovery",
    description: "Process solvents are recovered and recycled within the same batch cycle.",
    icon: <Recycle className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "Low energy input",
    description: "Ambient-temperature bioconversion significantly reduces thermal energy load.",
    icon: <Zap className="h-5 w-5" />,
  },
]

const visionCards = [
  {
    id: "1",
    title: "Multi-output platform",
    description: "Same biomass feedstock can yield xylose, arabinoxylan, and lignin derivatives.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Export readiness",
    description: "Targeting EU and US food-grade certifications for international supply.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "FPO integration",
    description: "Direct sourcing partnerships with farmer producer organisations across Karnataka.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "R&D pipeline",
    description: "Three second-generation extraction protocols currently in lab-scale testing.",
    icon: <Microscope className="h-5 w-5" />,
  },
]

export function ExtractionCards() {
  return <Component cards={extractionCards} defaultLayout="grid" />
}

export function VisionCards() {
  return <Component cards={visionCards} defaultLayout="grid" />
}
