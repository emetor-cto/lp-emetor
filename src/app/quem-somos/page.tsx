"use client"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AboutHero } from "@/components/sections/AboutHero"
import { PillarsSection } from "@/components/sections/PillarsSection"
import { motion } from "framer-motion"

export default function QuemSomosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <AboutHero />

        {/* Pillars Section */}
        <PillarsSection />

        {/* Manifesto Section */}
        <section className="w-full py-32 bg-neutral-950 text-white relative overflow-hidden" data-header-theme="dark">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-12 block text-center"
              >
                Nosso Manifesto
              </motion.span>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.2] font-medium text-center space-y-8"
              >
                <p>
                  Nosso trabalho não é vender tecnologia por vaidade. É fazer a empresa <span className="text-primary italic">operar melhor</span>, o time produzir mais e a liderança decidir com clareza.
                </p>
                
                <p className="text-neutral-400">
                  Não somos uma software house genérica. Não vendemos inovação como enfeite. Entramos para organizar, simplificar e <span className="text-white">sustentar o crescimento.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-neutral-500 text-lg leading-relaxed">
              A Emetor nasceu da necessidade de transformar o caos operacional em máquinas de performance. 
              Combinamos consultoria estratégica com desenvolvimento tecnológico de ponta para 
              entregar o que realmente importa: **Resultado.**
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
