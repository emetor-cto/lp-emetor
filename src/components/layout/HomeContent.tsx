"use client"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { BenefitsSection } from "@/components/sections/BenefitsSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { PartnersSection } from "@/components/sections/PartnersSection"

export function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <div className="flex flex-col min-h-[calc(100vh-88px)]">
          <HeroSection />
          <PartnersSection />
        </div>
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <MethodologySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
