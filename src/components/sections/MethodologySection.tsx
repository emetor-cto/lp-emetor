"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/utils/utils"

const steps = [
  {
    number: "01",
    phase: "FASE 01 — DIAGNÓSTICO",
    title: "Diagnóstico de Profundidade",
    description: "Mergulhamos na sua operação atual para identificar exatamente onde o dinheiro está sendo perdido e onde estão os gargalos de eficiência."
  },
  {
    number: "02",
    phase: "FASE 02 — ESTRATÉGIA",
    title: "Direção & Estratégia",
    description: "Desenhamos o novo mapa de processos e escolhemos as tecnologias que farão a sua empresa escalar sem aumentar o caos."
  },
  {
    number: "03",
    phase: "FASE 03 — ESTRUTURAÇÃO",
    title: "Estruturação Sistêmica",
    description: "Implementamos as ferramentas, automatizamos fluxos e garantimos que os dados fluam sem interrupções entre as áreas."
  },
  {
    number: "04",
    phase: "FASE 04 — PERFORMANCE",
    title: "Cultura de Performance",
    description: "Treinamos seu time para operar sob o novo modelo e estabelecemos rituais de controle para garantir a melhoria contínua."
  }
]

export function MethodologySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth step index calculation based on scroll position
  const stepProgress = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3])

  useEffect(() => {
    const unsubscribe = stepProgress.on("change", (latest) => {
      const rounded = Math.min(Math.max(Math.round(latest), 0), steps.length - 1)
      if (rounded !== activeIndex) {
        setActiveIndex(rounded)
      }
    })
    return () => unsubscribe()
  }, [stepProgress, activeIndex])

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const targetScroll = containerTop + (containerHeight / (steps.length - 1)) * index
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="relative bg-white h-[320vh]">
      {/* Sticky Fullscreen Story Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden py-12">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 flex flex-col justify-center h-full max-h-[800px]">
          
          {/* Restored Section Header (Título + Subtítulo sempre visíveis) */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-accent/30" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Metodologia Emetor
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-4 max-w-3xl">
              Como transformamos sua <span className="text-accent font-medium">operação em vantagem competitiva.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-500 font-medium leading-relaxed max-w-2xl">
              Um processo linear e disciplinado focado em eliminar desperdícios e escalar performance através da tecnologia.
            </p>
          </div>

          {/* Interactive Story Container (Sem borda e sem sombra) */}
          <div className="relative bg-white rounded-[28px] py-4 md:py-6 px-2 md:px-4 overflow-hidden flex items-center gap-6 md:gap-10">
            
            {/* Left Side: Smaller, Closer Minimal Dots Perfectly Centered Vertically */}
            <div className="flex flex-col items-center justify-center gap-2.5 z-20 self-center">
              {steps.map((step, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToStep(idx)}
                    aria-label={`Ir para ${step.phase}`}
                    className="group relative flex items-center justify-center p-0.5 focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        backgroundColor: isActive ? "#0A0A0A" : "#D1D5DB",
                      }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        isActive
                          ? "w-2.5 h-2.5 opacity-100"
                          : "w-2 h-2 hover:bg-neutral-400 opacity-50"
                      )}
                    />
                  </button>
                )
              })}
            </div>

            {/* Right Side: Step Animated Content (Vertically centered) */}
            <div className="flex-1 min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start"
                >
                  <span className="text-[#b9915e] font-mono text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-2.5 block">
                    {steps[activeIndex].phase}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-3.5">
                    {steps[activeIndex].title}
                  </h3>

                  <p className="text-base sm:text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
