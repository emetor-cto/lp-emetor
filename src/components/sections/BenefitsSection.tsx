"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/utils/utils"
import Image from "next/image"
import logoIcon from "@/assets/logo-icon-darkmode.png"
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
    color: "from-[#d3a871] to-[#8b6b4a]",
    glow: "bg-[#d3a871]",
    icon: ChartSquare
  },
  {
    label: "02",
    category: "Processos",
    title: "Estruturação operacional",
    description: "Processos bem definidos que garantem que a equipe saiba exatamente o que fazer. Eliminamos a confusão e padronizamos a excelência.",
    color: "from-[#60a5fa] to-[#1e3a8a]",
    glow: "bg-[#60a5fa]",
    icon: Layers
  },
  {
    label: "03",
    category: "Sistemas",
    title: "Software sob medida",
    description: "Ferramentas que se adaptam à sua empresa. Desenvolvemos tecnologias que potencializam a capacidade produtiva do seu time.",
    color: "from-[#e5e7eb] to-[#6b7280]",
    glow: "bg-[#e5e7eb]", // Prata/Branco
    icon: Database
  },
  {
    label: "04",
    category: "Fluxos",
    title: "Integração",
    description: "Sistemas conectados para que a informação flua sem gargalos. Visibilidade total de ponta a ponta na sua operação.",
    color: "from-[#fcd34d] to-[#b45309]",
    glow: "bg-[#fcd34d]", // Amarelo Gold
    icon: Cpu
  },
  {
    label: "05",
    category: "Eficiência",
    title: "Automações de fluxos",
    description: "Redução de tarefas manuais repetitivas. Liberamos seu talento humano para focar no que realmente gera valor e inovação.",
    color: "from-[#2dd4bf] to-[#0f766e]",
    glow: "bg-[#2dd4bf]", // Teal/Cyan tech
    icon: Settings
  }
]

function BenefitCard({ benefit, i, total, scrollYProgress }: { benefit: any, i: number, total: number, scrollYProgress: any }) {
  const segment = 0.85 / total
  const start = i * segment
  const nextStart = (i + 1) * segment
  const nextEnd = (i + 2) * segment
  const stackOffset = (i - (total - 1)) * 15

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
      <div className="relative w-full max-w-2xl min-h-[320px] md:min-h-[280px] h-auto bg-black border border-white/20 rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_100px_rgba(0,0,0,1)]">

        {/* Visual Accent Side */}
        <div className="w-full md:w-[30%] min-h-[120px] relative overflow-hidden flex items-center justify-center bg-black border-b md:border-b-0 md:border-r border-white/10 shrink-0">
          <div className={cn("absolute inset-0 blur-[60px] opacity-20 bg-gradient-to-br", benefit.color)} />

          <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center my-6 md:my-0">
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
        <div className="flex-1 p-6 md:p-10 text-left relative z-20 bg-black flex flex-col justify-center overflow-hidden">
          {/* Emetor Logo Watermark */}
          <div className="absolute -bottom-4 -right-4 w-40 h-40 md:w-56 md:h-56 opacity-15 pointer-events-none -rotate-12">
            <Image src={logoIcon} alt="Emetor Watermark" fill className="object-contain" />
          </div>
          <span className="text-[#afd2fa] font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-2 block relative z-10">
            {benefit.category}
          </span>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-3 tracking-tight leading-tight relative z-10">
            {benefit.title}
          </h3>
          <p className="text-[12px] md:text-sm text-neutral-300 leading-relaxed font-medium relative z-10">
            {benefit.description}
          </p>

          <div className="mt-6 md:mt-auto pt-6 h-px w-full bg-white/10 rounded-full overflow-hidden flex-shrink-0 relative z-10">
            <div className={cn("h-full w-full bg-gradient-to-r", benefit.color)} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PaginationIndicator({ i, total, scrollYProgress, benefit }: { i: number, total: number, scrollYProgress: any, benefit: any }) {
  const segment = 0.85 / total
  const start = i * segment
  const end = (i + 1) / total
  return (
    <motion.div
      style={{
        width: useTransform(scrollYProgress, [start, end], ["6px", "20px"]),
        opacity: useTransform(scrollYProgress, [start, end], [0.3, 1])
      }}
      className={cn("h-1 rounded-full", benefit.glow)}
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
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[150px] rounded-full opacity-50" />
        </div>

        <div className="relative w-full text-center z-50 pointer-events-none px-6 mb-8 md:mb-12 shrink-0">
          <span className="text-[#afd2fa] font-bold uppercase tracking-[0.4em] text-[8px] md:text-[9px] mb-2 block">Propulsão Tecnológica</span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
            A Emetor ajuda empresas a crescer com <span className="text-[#afd2fa]">mais eficiência operacional, performance e controle.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl flex-1 max-h-[500px] flex items-center justify-center">
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

        <div className="relative mt-8 md:mt-12 flex gap-1.5 z-50 shrink-0 pb-6">
          {benefits.map((benefit, i) => (
            <PaginationIndicator key={i} i={i} total={benefits.length} scrollYProgress={scrollYProgress} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
