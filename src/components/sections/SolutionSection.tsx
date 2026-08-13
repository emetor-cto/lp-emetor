"use client"
import { motion } from "framer-motion"
import { cn } from "@/utils/utils"

const solutions = [
  {
    number: "01",
    category: "PROCESSOS",
    title: "Mapeamento de Processos",
    description: "Desenhamos o fluxo ideal da sua operação para garantir que todos saibam exatamente o que fazer, eliminando gargalos e ambiguidades.",
    type: "sparkline",
    className: "md:col-span-7"
  },
  {
    number: "02",
    category: "SISTEMAS",
    title: "Estruturação de Sistemas",
    description: "Conectamos as ferramentas certas para a sua equipe não perder tempo com tarefas burocráticas.",
    type: "none",
    className: "md:col-span-5"
  },
  {
    number: "03",
    category: "AUTOMAÇÃO",
    title: "Automação de Tarefas",
    description: "Reduzimos o trabalho manual com integrações inteligentes entre sistemas.",
    type: "none",
    className: "md:col-span-4"
  },
  {
    number: "04",
    category: "DASHBOARDS",
    title: "Painéis de Controle",
    description: "Dashboards centralizados para acompanhar indicadores em tempo real.",
    type: "barchart",
    className: "md:col-span-4"
  },
  {
    number: "05",
    category: "CULTURA",
    title: "Treinamento & Cultura",
    description: "Garantimos que sua equipe opere os novos processos com eficiência máxima.",
    type: "none",
    className: "md:col-span-4"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
} as const

export function SolutionSection() {
  return (
    <section className="w-full bg-white lg:h-[calc(100vh-60px)] lg:h-[calc(100dvh-60px)] flex flex-col justify-center overflow-hidden relative py-6 lg:py-8 border-b border-neutral-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-center h-full max-h-[820px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-2.5"
          >
            <div className="h-[1px] w-8 bg-accent/30" />
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">A Entrega da Emetor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.08] mb-2 max-w-3xl"
          >
            Estrutura técnica para <br className="hidden sm:block" />
            <span className="text-accent font-medium">resultados previsíveis.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base lg:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed font-medium"
          >
            É exatamente esse cenário que a Emetor ajuda a resolver com precisão cirúrgica.
          </motion.p>
        </div>

        {/* Flat Clean Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5"
        >
          {solutions.map((solution, i) => {
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={cn(
                  "group relative p-5 lg:p-6 bg-white rounded-[22px] md:rounded-[24px] border border-neutral-200/80 hover:border-[#b9915e]/50 transition-colors duration-300 overflow-hidden flex flex-col justify-between min-h-[155px] lg:min-h-[170px]",
                  solution.className
                )}
              >
                {/* Visual Micro-Illustration Area (Apenas onde faz sentido real) */}
                {solution.type !== "none" ? (
                  <div className="h-8 mb-2 flex items-center justify-start relative">
                    {/* Sparkline Graphic (Card 01 - Processos) */}
                    {solution.type === "sparkline" && (
                      <div className="flex items-center gap-2">
                        <svg className="w-20 h-7 overflow-visible" viewBox="0 0 100 40">
                          <path
                            d="M 5 30 Q 25 25, 45 15 T 85 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="text-neutral-300 group-hover:text-[#b9915e] transition-colors duration-300"
                          />
                          <circle
                            cx="85"
                            cy="8"
                            r="4"
                            className="fill-neutral-400 group-hover:fill-[#b9915e] transition-colors duration-300"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Animated Bar Chart Graphic (Card 04 - Dashboards) */}
                    {solution.type === "barchart" && (
                      <div className="flex items-end gap-1.5 h-7">
                        <div className="w-2.5 h-3 bg-neutral-200 group-hover:bg-[#b9915e]/50 rounded-sm transition-colors duration-300" />
                        <div className="w-2.5 h-5 bg-neutral-300 group-hover:bg-[#b9915e]/80 rounded-sm transition-colors duration-300" />
                        <div className="w-2.5 h-3.5 bg-neutral-200 group-hover:bg-[#b9915e]/60 rounded-sm transition-colors duration-300" />
                        <div className="w-2.5 h-7 bg-neutral-400 group-hover:bg-[#b9915e] rounded-sm transition-colors duration-300" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-2" />
                )}

                {/* Content Block */}
                <div>
                  <span className="text-[#b9915e] font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1.5 block">
                    {solution.category}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 tracking-tight">
                    {solution.title}
                  </h3>

                  <p className="text-neutral-500 leading-relaxed font-medium text-xs md:text-sm">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
