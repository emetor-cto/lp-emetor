"use client"
import { AboutHero } from "@/components/sections/AboutHero"
import { FaqSection } from "@/components/sections/FaqSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { quemSomosFaqs } from "@/data/faqData"
import { motion } from "framer-motion"
import { openDiagnostico } from "@/lib/open-diagnostico"
import { AltArrowRight } from "@solar-icons/react"
import { FileCheck, ShieldCheck, CheckCircle2, Layers, Eye } from "lucide-react"

const principles = [
  {
    number: "01",
    title: "Diagnóstico antes de proposta",
    description: "Ninguém orça o que não entendeu.",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Escopo escrito e aceite formal",
    description: "Combinado que não está escrito não foi combinado.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Simplicidade obrigatória",
    description: "Se o cliente precisa de treinamento para entender o processo, o processo está errado.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Tecnologia depois do processo",
    description: "Sempre nessa ordem.",
    icon: Layers,
  },
  {
    number: "05",
    title: "Transparência técnica",
    description: "O que não vale a pena construir, a Emetor diz que não vale.",
    icon: Eye,
  },
]

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col bg-white">
      <AboutHero />

      <section className="w-full py-16 sm:py-24 bg-neutral-50/60 border-y border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-5xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[1px] w-8 bg-accent/40" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                O que a Emetor é
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-6">
              Uma software house que começa pelo processo
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
              <p>
                A maioria das empresas de tecnologia começa perguntando o que construir. A Emetor começa perguntando como a operação deveria funcionar. É por isso que todo trabalho começa por um diagnóstico e não por um orçamento.
              </p>
              <p className="text-neutral-900 font-semibold pt-2">
                A Emetor atende empresas em modelo recorrente, com sede em Curitiba, no Paraná, e atendimento em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[1px] w-8 bg-accent/40" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Quem está por trás
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4">
              Jean Gustavo, fundador
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed mb-6">
              Fundador e liderança estratégica da Emetor. Com trajetória focada em engenharia de processos e tecnologia de alta performance, criou a Emetor para eliminar o improviso nas operações e transformar a gestão em resultados previsíveis.
            </p>

            <div>
              <a
                href="https://www.linkedin.com/in/jeangustavomr"
                target="_blank"
                rel="me noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-accent border-b-2 border-neutral-900 hover:border-accent transition-colors pb-0.5"
              >
                <span>Conectar com Jean Gustavo no LinkedIn</span>
                <AltArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-5xl">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[1px] w-8 bg-accent/40" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Nossa Filosofia
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Como a Emetor trabalha
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-accent/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#b9915e] font-mono text-xs font-bold uppercase tracking-widest">
                        {p.number}
                      </span>
                      <IconComp size={22} className="text-neutral-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 font-medium leading-relaxed pt-2">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden" data-header-theme="dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-8 block"
            >
              Nosso Manifesto
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl leading-[1.3] font-medium text-center max-w-3xl mx-auto"
            >
              <p className="text-neutral-100">
                A Emetor nasceu para transformar caos operacional em operação previsível. Não vendemos inovação como enfeite. Entramos para organizar, simplificar e sustentar o crescimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={quemSomosFaqs}
        title="Atendimento & Abrangência Nacional"
        subtitle="Saiba mais sobre a presença da Emetor e atendimento remoto ou presencial em todo o Brasil."
        badge="SEDE & ATENDIMENTO"
      />

      <FinalCTASection />
    </div>
  )
}
