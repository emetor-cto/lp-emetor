"use client"
import { Folder, Database, Settings, ChartSquare, UsersGroupTwoRounded } from "@solar-icons/react"
import { motion } from "framer-motion"
import { cn } from "@/utils/utils"

const solutions = [
  {
    title: "Mapeamento de Processos",
    description: "Desenhamos o fluxo ideal da sua operação para garantir que todos saibam o que fazer, reduzindo gargalos e eliminando ambiguidades.",
    icon: Folder,
    className: "md:col-span-8 md:row-span-1"
  },
  {
    title: "Estruturação de Sistemas",
    description: "Implementamos e conectamos as ferramentas certas para a sua equipe não perder tempo com tarefas burocráticas.",
    icon: Database,
    className: "md:col-span-4 md:row-span-1"
  },
  {
    title: "Automação de Tarefas",
    description: "Reduzimos o trabalho manual com integrações inteligentes que fazem as ferramentas conversarem entre si.",
    icon: Settings,
    className: "md:col-span-4 md:row-span-1"
  },
  {
    title: "Painéis de Controle",
    description: "Criamos dashboards para você acompanhar os indicadores que realmente importam para o negócio.",
    icon: ChartSquare,
    className: "md:col-span-4 md:row-span-1"
  },
  {
    title: "Treinamento & Cultura",
    description: "Garantimos que sua equipe saiba utilizar os novos processos e ferramentas com eficiência máxima.",
    icon: UsersGroupTwoRounded,
    className: "md:col-span-4 md:row-span-1"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
} as const

export function SolutionSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-b border-neutral-100 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">A Entrega da Emetor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Estrutura técnica para <br />
            <span className="text-[#0000FF] font-medium">resultados previsíveis.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            É exatamente esse cenário que a Emetor ajuda a resolver com precisão cirúrgica.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={cn(
                  "group relative p-8 md:p-10 bg-white rounded-3xl border border-neutral-100 transition-all duration-500 overflow-hidden",
                  "hover:shadow-[0_20px_50px_rgba(0,0,255,0.08)] hover:-translate-y-1 hover:border-primary/20",
                  solution.className
                )}
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col h-full z-10">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-all duration-500">
                    <Icon size={24} weight="Bold" className="text-neutral-400 group-hover:text-primary transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                      {solution.title}
                    </h4>
                    <p className="text-neutral-500 leading-relaxed font-medium text-sm md:text-base">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
