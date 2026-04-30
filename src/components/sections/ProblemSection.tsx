"use client"
import { Badge } from "@/components/ui/badge"
import { Chart, Eye, Refresh, Letter, Settings, User } from "@solar-icons/react"
import { motion } from "framer-motion"
import { cn } from "@/utils/utils"

const tags = [
  "Processos manuais",
  "Desalinhamento",
  "Sistemas avulsos",
  "Falta de dados centralizados",
  "Retrabalho",
  "Controle difuso"
]

const problems = [
  {
    title: "Falta de Visibilidade",
    description: "Áreas e equipes operam em silos que nunca se comunicam, gerando um apagão de informações estratégicas.",
    icon: Eye,
  },
  {
    title: "Retrabalho diário",
    description: "Refazer atividades se tornou padrão porque ninguém segue processos claros e bem definidos.",
    icon: Refresh,
  },
  {
    title: "Repasses picados",
    description: "Comunicação por canais paralelos e e-mails dispersos que se perdem no dia a dia.",
    icon: Letter,
  },
  {
    title: "Muito esforço braçal",
    description: "Tarefas altamente operacionais que consomem horas e poderiam ser totalmente automatizadas.",
    icon: Settings,
  },
  {
    title: "Controle difuso",
    description: "Projetos e demandas esbarram na falta de dados centralizados e visibilidade das tarefas.",
    icon: Chart,
  },
  {
    title: "Crescimento caótico",
    description: "Contratações sem onboarding eficiente e estrutura sistêmica sólida, gerando prejuízo operacional.",
    icon: User,
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

export function ProblemSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-y border-neutral-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary/30" />
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">O Custo da Ineficiência</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -250px 0px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6"
            >
              Crescer sem estrutura <br />
              <span className="text-[#0000FF] font-medium">custa caro.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -300px 0px" }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-500 max-w-2xl leading-relaxed"
            >
              Muitas empresas crescem pagando o preço da desorganização. O que antes era agilidade se torna um gargalo invisível.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            className="flex flex-wrap gap-2 max-w-md justify-start md:justify-end"
          >
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                className="bg-white text-neutral-500 border border-neutral-100 px-4 py-2 text-[10px] font-bold uppercase tracking-wider shadow-sm hover:border-primary/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-100 rounded-xl overflow-hidden shadow-sm"
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative p-8 bg-white border-r border-b border-neutral-100 transition-colors hover:bg-neutral-50/50"
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                    <Icon size={20} weight="Bold" className="text-neutral-400 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">
                    {problem.title}
                  </h4>
                  
                  <p className="text-neutral-500 leading-relaxed text-sm font-medium">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4 text-neutral-400"
        >
          <div className="h-[1px] flex-1 bg-neutral-100 max-w-[100px]" />
          <p className="text-xs font-bold uppercase tracking-widest text-center">
            Projetos e demandas esbarram na falta de dados e visibilidade
          </p>
          <div className="h-[1px] flex-1 bg-neutral-100 max-w-[100px]" />
        </motion.div>
      </div>
    </section>
  )
}
