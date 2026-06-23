"use client"
import { usePathname, useRouter } from "next/navigation"
import { AltArrowRight, ArrowRight } from "@solar-icons/react"
import { HeroBackground } from "./HeroBackground"

/**
 * HeroSection Component
 * Sunny Summer Sky edition of the 'Digital Aurora' effect.
 */
export function HeroSection() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <section className="relative w-full bg-white flex-1 flex items-center overflow-hidden min-h-[calc(100vh-88px)]">
      <HeroBackground />
      <div className="absolute inset-0 z-0 bg-white/10 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center max-w-5xl">
        <h1 className="text-[44px] md:text-[64px] lg:text-[82px] font-medium tracking-[-0.06em] text-white leading-[0.95] mb-10">
          Tecnologia para empresas que querem <span className="text-primary">crescer</span> sem o caos.
        </h1>

        <p className="text-lg md:text-[22px] text-neutral-700 mb-16 max-w-3xl leading-[1.6] font-medium">
          A Emetor estrutura processos complexos e implementa tecnologia de elite para sua empresa escalar com total fluidez operacional.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          <button
            onClick={() => router.push("/diagnostico", { scroll: false })}
            className="group relative flex items-center bg-primary hover:bg-accent text-white font-bold py-2.5 px-3 rounded-full transition-all duration-500 ease-in-out min-w-[260px] h-[72px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]">
            <span className="flex-1 text-center text-lg transition-all duration-500 ease-in-out group-hover:translate-x-[-24px] translate-x-[24px]">
              Falar com a Emetor
            </span>
            <div className="absolute left-3 group-hover:left-[calc(100%-60px)] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out">
              <AltArrowRight size={26} className="text-primary group-hover:text-accent transition-colors duration-500" />
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}
