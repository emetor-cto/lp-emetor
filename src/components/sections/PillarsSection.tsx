"use client"
import { motion } from "framer-motion"
import { Database, Settings, Code, TrendingUp } from "lucide-react"

const pillars = [
  {
    title: "Estrutura",
    description: "Organização cirúrgica de processos e fluxos operacionais para eliminar o caos.",
    icon: Settings,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Dados",
    description: "Conexão e inteligência de dados para decisões baseadas em fatos, não em intuição.",
    icon: Database,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Tecnologia",
    description: "Desenvolvimento de software e IA aplicados diretamente à performance do negócio.",
    icon: Code,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Performance",
    description: "Foco total em resultados mensuráveis, escalabilidade e eficiência operacional.",
    icon: TrendingUp,
    color: "bg-accent/10 text-accent",
  }
]

export function PillarsSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-premium transition-all duration-500"
            >
              <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
