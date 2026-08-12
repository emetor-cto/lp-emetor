"use client"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { PartnersSection } from "@/components/sections/PartnersSection"

export function HomeContent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-[calc(100vh-88px)]">
        <HeroSection />
        <PartnersSection />
      </div>
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <FinalCTASection />
    </div>
  )
}
