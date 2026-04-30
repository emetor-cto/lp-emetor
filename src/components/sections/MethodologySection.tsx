"use client"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/utils/utils"

const steps = [
  {
    number: "01",
    title: "Diagnóstico de Profundidade",
    description: "Mergulhamos na sua operação atual para identificar exatamente onde o dinheiro está sendo perdido e onde estão os gargalos de eficiência."
  },
  {
    number: "02",
    title: "Direção & Estratégia",
    description: "Desenhamos o novo mapa de processos e escolhemos as tecnologias que farão a sua empresa escalar sem aumentar o caos."
  },
  {
    number: "03",
    title: "Estruturação Sistêmica",
    description: "Implementamos as ferramentas, automatizamos fluxos e garantimos que os dados fluam sem interrupções entre as áreas."
  },
  {
    number: "04",
    title: "Cultura de Performance",
    description: "Treinamos seu time para operar sob o novo modelo e estabelecemos rituais de controle para garantir a melhoria contínua."
  }
]

function MethodologyStep({
  step,
  i,
  total,
  scrollYProgress,
  isLast = false
}: {
  step: typeof steps[0],
  i: number,
  total: number,
  scrollYProgress: MotionValue<number>,
  isLast?: boolean
}) {
  const segment = 1 / total
  const start = i * segment
  const end = (i + 1) * segment

  const isActive = useTransform(scrollYProgress, [start, end], [0.3, 1])
  const dotScale = useTransform(scrollYProgress, [start, end], [0.8, 1.2])
  const dotColor = useTransform(
    scrollYProgress,
    [start, end],
    ["#e5e7eb", "#0000FF"]
  )

  return (
    <div className={cn(
      "group relative pl-12 md:pl-20 py-16 md:py-32",
      isLast ? "pb-0" : ""
    )}>
      <div className="absolute left-0 top-[68px] md:top-[140px] w-8 h-8 md:w-[50px] md:h-[50px] rounded-full bg-white border border-neutral-100 flex items-center justify-center z-20 shadow-sm">
        <motion.div
          style={{ backgroundColor: dotColor, scale: dotScale }}
          className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full"
        />
      </div>

      <div className="relative">
        <motion.span
          style={{ opacity: isActive }}
          className="text-blue-600 font-mono text-[10px] md:text-xs font-bold mb-3 md:mb-4 block uppercase tracking-[0.2em]"
        >
          Fase {step.number}
        </motion.span>
        <h3 className="text-xl md:text-4xl font-bold text-neutral-900 mb-4 md:mb-6 tracking-tight">
          {step.title}
        </h3>
        <p className="text-sm md:text-xl text-neutral-500 font-medium leading-relaxed max-w-xl">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 md:py-0"
      data-header-theme="light"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="lg:hidden mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Metodologia Emetor</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Como transformamos sua <span className="text-blue-600 italic">operação em vantagem competitiva.</span>
          </h2>
          <p className="text-lg text-neutral-500 font-medium leading-relaxed">
            Um processo linear e disciplinado focado em eliminar desperdícios e escalar performance através da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-0 h-screen flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Metodologia Emetor</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-8">
                  Como transformamos sua <span className="text-blue-600 italic">operação em vantagem competitiva.</span>
                </h2>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-md">
                  Um processo linear e disciplinado focado em eliminar desperdícios e escalar performance através da tecnologia.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 relative pt-0 lg:pt-[30vh] pb-0 lg:pb-[60vh]">
            <div className="relative">
              <div
                ref={timelineRef}
                className="absolute left-[15px] md:left-[25px] top-[84px] md:top-[165px] bottom-[160px] md:bottom-[250px] w-px pointer-events-none"
              >
                <div className="w-full h-full bg-neutral-100" />
                <motion.div
                  style={{ scaleY, originY: 0 }}
                  className="absolute inset-0 w-[2px] bg-blue-600 z-10"
                >
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 blur-lg rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <div className="flex flex-col">
                {steps.map((step, i) => (
                  <MethodologyStep
                    key={i}
                    step={step}
                    i={i}
                    total={steps.length}
                    scrollYProgress={scrollYProgress}
                    isLast={i === steps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
