"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/utils/utils"
import Image from "next/image"
import logoIcon from "@/assets/logo-icon-darkmode.png"
import coverImg from "@/assets/cover.jpeg"
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
    metric: "+100% DE CAPACIDADE",
    color: "from-[#d3a871] to-[#8b6b4a]",
    glow: "bg-[#d3a871]",
    icon: ChartSquare
  },
  {
    label: "02",
    category: "Processos",
    title: "Estruturação operacional",
    description: "Processos bem definidos que garantem que a equipe saiba exatamente o que fazer. Eliminamos a confusão e padronizamos a excelência.",
    metric: "ZERO RETRABALHO",
    color: "from-[#60a5fa] to-[#1e3a8a]",
    glow: "bg-[#60a5fa]",
    icon: Layers
  },
  {
    label: "03",
    category: "Sistemas",
    title: "Software sob medida",
    description: "Ferramentas que se adaptam à sua empresa. Desenvolvemos tecnologias que potencializam a capacidade produtiva do seu time.",
    metric: "TECNOLOGIA PRÓPRIA",
    color: "from-[#e5e7eb] to-[#6b7280]",
    glow: "bg-[#e5e7eb]", // Prata/Branco
    icon: Database
  },
  {
    label: "04",
    category: "Fluxos",
    title: "Integração",
    description: "Sistemas conectados para que a informação flua sem gargalos. Visibilidade total de ponta a ponta na sua operação.",
    metric: "VISIBILIDADE TOTAL",
    color: "from-[#fcd34d] to-[#b45309]",
    glow: "bg-[#fcd34d]", // Amarelo Gold
    icon: Cpu
  },
  {
    label: "05",
    category: "Eficiência",
    title: "Automações de fluxos",
    description: "Redução de tarefas manuais repetitivas. Liberamos seu talento humano para focar no que realmente gera valor e inovação.",
    metric: "FOCO NO QUE IMPORTA",
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

  const y = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [0, -18])
  const rotate = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [0, (i - 2) * 0.8])
  const scale = useTransform(scrollYProgress, [nextStart, Math.min(1, nextEnd)], [1, 0.94])

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        zIndex: i
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-6"
    >
      <div className="relative w-full max-w-2xl min-h-[310px] md:min-h-[270px] h-auto bg-white/15 md:bg-white/20 backdrop-blur-[40px] border border-white/60 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.1),_inset_0_1px_3px_rgba(255,255,255,0.9),_inset_0_-1px_2px_rgba(255,255,255,0.2)] transition-all duration-500 ring-1 ring-white/30">

        <div className="w-full md:w-[32%] min-h-[130px] relative overflow-hidden flex items-center justify-center bg-white/30 border-b md:border-b-0 md:border-r border-white/50 shrink-0 p-6">

          <div className={cn("absolute inset-0 blur-[60px] opacity-[0.05]", benefit.glow)} />

          <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center my-4 md:my-0">

            <div className="absolute inset-0 border-[0.5px] border-slate-300/40 rounded-full" />

            <span className="text-4xl md:text-5xl font-light tracking-tight leading-none select-none relative z-10 text-slate-800">
              {benefit.label}
            </span>
          </div>

          <benefit.icon className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 text-slate-900/[0.03] -rotate-12 pointer-events-none" />
        </div>

        <div className="flex-1 p-6 md:p-10 text-left relative z-20 bg-transparent flex flex-col justify-center overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 opacity-15 pointer-events-none -rotate-12 z-0">
            <Image src={logoIcon} alt="Emetor Watermark" fill className="object-contain" />
          </div>

          <span className="text-[#1e3a8a] font-black uppercase tracking-[0.25em] text-[10px] md:text-[11px] mb-2.5 block relative z-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            {benefit.category}
          </span>
          <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-3.5 tracking-tight leading-snug relative z-10 drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]">
            {benefit.title}
          </h3>
          <p className="text-[13.5px] md:text-[15px] text-slate-700 leading-relaxed font-medium relative z-10 mb-5 md:mb-7">
            {benefit.description}
          </p>

          <div className="mt-auto">
            <div className="flex items-center mb-3">
              <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-widest">{benefit.metric}</span>
            </div>

            <div className="p-[1px] h-1 w-full bg-white/30 rounded-full overflow-hidden flex-shrink-0 relative z-10 border-[0.5px] border-white/60 shadow-sm">
              <div className={cn("h-full rounded-full bg-gradient-to-r", benefit.color)} />
            </div>
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
      className={cn("h-1 rounded-full shadow-[0_0_8px_rgba(30,58,138,0.2)]", benefit.glow)}
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
      data-header-theme="light"
      className="relative bg-white h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={coverImg}
            alt="Emetor Cover Background"
            fill
            priority
            className="object-cover opacity-100 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="relative w-full text-center z-50 pointer-events-none px-6 mb-8 md:mb-12 shrink-0">
          <span className="text-[#1e3a8a] font-extrabold uppercase tracking-[0.4em] text-[8px] md:text-[9.5px] mb-2 block">Propulsão Tecnológica</span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-2 leading-tight">
            A Emetor ajuda empresas a crescer com <span className="text-[#1e3a8a]">mais eficiência operacional, performance e controle.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl flex-1 max-h-[500px] flex items-center justify-center z-20">
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
