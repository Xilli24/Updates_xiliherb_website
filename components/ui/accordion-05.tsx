"use client"

import type { ReactNode } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export interface AccordionItem05 {
  id: string
  title: string
  content: ReactNode
}

interface Accordion05Props {
  items: AccordionItem05[]
  defaultValue?: string
  className?: string
}

export function Accordion05({ items, defaultValue, className }: Accordion05Props) {
  return (
    <div className={cn("w-full", className)}>
      <Accordion type="single" defaultValue={defaultValue} collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="last:border-b"
            style={{ borderColor: "#E0E0DA" }}
          >
            <AccordionTrigger
              className={cn(
                "text-left py-6 pl-4 md:pl-10 overflow-hidden",
                "duration-300 hover:no-underline cursor-pointer",
                "-space-y-5 data-[state=open]:space-y-0",
                "text-[#2C2C2C]/20 data-[state=open]:text-[#1E3F6E]",
                "[&>svg]:hidden",
              )}
            >
              <div className="flex flex-1 items-start gap-5">
                <span
                  className="text-[11px] font-medium tracking-[0.1em] mt-2 shrink-0"
                  style={{ color: "#5BAC2E" }}
                >
                  {item.id}
                </span>
                <h2
                  className="uppercase text-3xl md:text-[42px] font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h2>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8 pl-4 md:pl-[72px] pr-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
