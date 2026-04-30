"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/utils/utils"
import {
  ChartSquare,
  Layers,
  Database,
  Settings,
  Cpu
} from "@solar-icons/react"

const benefits = [
  {
    label: "01",
    category: "Escalabilidade",
    title: "Crescimento de operações",
    description: "Sua empresa escala sem que os problemas operacionais cresçam na mesma proporção. Infraestrutura que suporta o dobro da demanda com metade do esforço.",
    color: "from-blue-600 to-indigo-600",
    glow: "bg-blue-500",
    icon: ChartSquare
  },
  {
    label: "02",
    category: "Processos",
    title: "Estruturação operacional",
    description: "Processos bem definidos que garantem que a equipe saiba exatamente o que fazer. Eliminamos a confusão e padronizamos a excelência.",
    color: "from-indigo-600 to-purple-600",
    glow: "bg-indigo-500",
    icon: Layers
  },
  {
    label: "03",
    category: "Sistemas",
    title: "Software sob medida",
    description: "Ferramentas que se adaptam à sua empresa. Desenvolvemos tecnologias que potencializam a capacidade produtiva do seu time.",
    color: "from-purple-600 to-pink-600",
    glow: "bg-purple-500",
    icon: Database
  },
  {
    label: "04",
    category: "Fluxos",
    title: "Integração",
    description: "Sistemas conectados para que a informação flua sem gargalos. Visibilidade total de ponta a ponta na sua operação.",
    color: "from-pink-600 to-blue-600",
    glow: "bg-pink-500",
    icon: Cpu
  },
  {
    label: "05",
    category: "Eficiência",
    title: "Automações de fluxos",
    description: "Redução de tarefas manuais repetitivas. Liberamos seu talento humano para focar no que realmente gera valor e inovação.",
    color: "from-blue-600 to-cyan-600",
    glow: "bg-cyan-500",
    icon: Settings
  }
]

function BenefitCard({ benefit, i, total, scrollYProgress }: { benefit: any, i: number, total: number, scrollYProgress: any }) {
  const segment = 0.85 / total
  const start = i * segment
  const nextStart = (i + 1) * segment
  const nextEnd = (i + 2) * segment
  const stackOffset = (i - (total - 1)) * 15 // Reduced offset for mobile

  const x = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.15), start, nextStart, Math.min(1, nextEnd)],
    ["100vw", "0vw", "0vw", `${stackOffset}px`]
  )

  const y = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [0, stackOffset])
  const rotate = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [0, (i - 2) * 1])
  const scale = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [1, 0.98])

  const opacity = 1
  const isLast = i === total - 1
  const brightness = useTransform(
    scrollYProgress,
    [nextStart, Math.min(1, nextEnd)],
    [1, isLast ? 1 : 0.6]
  )

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: i,
        filter: useTransform(brightness, (v) => `brightness(${v})`)
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-6"
    >
      <div className="relative w-full max-w-2xl min-h-[320px] h-auto md:h-[280px] bg-black border border-white/20 rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center shadow-[0_40px_100px_rgba(0,0,0,1)]">

        {/* Visual Accent Side */}
        <div className="w-full md:w-[30%] h-[120px] md:h-full relative overflow-hidden flex items-center justify-center bg-black border-b md:border-b-0 md:border-r border-white/10 shrink-0">
          <div className={cn("absolute inset-0 blur-[60px] opacity-20 bg-gradient-to-br", benefit.color)} />

          <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
            <div className="absolute inset-2 border border-white/10 rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 md:inset-6 border border-white/20 rounded-full"
            >
              <div className={cn("absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shadow-[0_0_10px_white]", benefit.glow)} />
            </motion.div>
            <span className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none select-none relative z-10">
              {benefit.label}
            </span>
          </div>

          <benefit.icon className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 text-white/[0.04] -rotate-12 pointer-events-none" />
        </div>

        {/* Content Side */}
        <div className="flex-1 p-6 md:p-10 text-left relative z-20 bg-black flex flex-col justify-center">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-[8px] md:text-[9px] mb-2 block">
            {benefit.category}
          </span>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2 tracking-tight leading-tight">
            {benefit.title}
          </h3>
          <p className="text-[11px] md:text-sm text-neutral-300 leading-relaxed font-medium">
            {benefit.description}
          </p>

          <div className="mt-4 md:mt-6 h-px w-full bg-white/10 rounded-full overflow-hidden">
            <div className={cn("h-full w-full bg-gradient-to-r", benefit.color)} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PaginationIndicator({ i, total, scrollYProgress }: { i: number, total: number, scrollYProgress: any }) {
  const segment = 0.85 / total
  const start = i * segment
  const end = (i + 1) / total
  return (
    <motion.div
      style={{
        width: useTransform(scrollYProgress, [start, end], ["6px", "20px"]),
        opacity: useTransform(scrollYProgress, [start, end], [0.3, 1])
      }}
      className="h-1 bg-blue-500 rounded-full"
    />
  )
}

export function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section
      ref={containerRef}
      data-header-theme="dark"
      className="relative bg-[#050505] h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[150px] rounded-full opacity-50" />
        </div>

        <div className="absolute top-8 md:top-10 w-full text-center z-50 pointer-events-none px-6">
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[9px] mb-2 block">Propulsão Tecnológica</span>
          <h2 className="text-base md:text-2xl lg:text-3xl font-bold tracking-tight text-white/80 max-w-4xl mx-auto leading-tight">
            A Emetor ajuda empresas a crescer com <span className="text-blue-500">mais eficiência operacional, performance e controle.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-[400px] md:h-[300px] translate-y-24 md:translate-y-12">
          {benefits.map((benefit, i) => (
            <BenefitCard
              key={i}
              benefit={benefit}
              i={i}
              total={benefits.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className="absolute bottom-8 md:bottom-16 flex gap-1.5 z-50">
          {benefits.map((_, i) => (
            <PaginationIndicator key={i} i={i} total={benefits.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
