"use client"
import { HeroSection } from "@/components/sections/HeroSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { PartnersSection } from "@/components/sections/PartnersSection"

export function HomeContent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-[calc(100vh-88px)]">
        <HeroSection />
        <PartnersSection />
      </div>
      <MethodologySection />
      <SolutionSection />
      <FinalCTASection />
    </div>
  )
}
