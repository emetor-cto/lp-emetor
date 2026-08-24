"use client"
import Image from "next/image"
import { AltArrowRight } from "@solar-icons/react"
import { motion } from "framer-motion"
import { openDiagnostico } from "@/lib/open-diagnostico"
import aboutImg from "@/assets/pexels-ekaterina-bolovtsova-6192324-removebg-preview.png"

const expertiseTags = [
  "Engenharia de Processos",
  "Software Sob Medida",
  "IA Aplicada à Operação",
  "Diagnóstico Operacional",
  "Previsibilidade de Gestão",
  "Arquitetura Sistêmica"
]

export function AboutHero() {
  return (
    <section className="relative w-full min-h-screen xl:min-h-[calc(100vh+20px)] flex items-center justify-center -mt-[80px] pt-[130px] sm:pt-[140px] md:pt-[150px] xl:pt-[110px] pb-14 xl:pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10 w-full flex items-center justify-center h-full">
        <div className="grid grid-cols-12 gap-8 xl:gap-12 items-start xl:items-center w-full">
          
          <div className="col-span-12 xl:col-span-6 flex flex-col justify-center text-left py-2 sm:py-4">
            <motion.div
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="h-[1px] w-8 bg-accent/30" />
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                  Quem Somos
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[44px] font-extrabold tracking-tight text-neutral-900 leading-[1.08] mb-3 sm:mb-4">
                A Emetor existe para tirar empresas do improviso operacional
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 text-sm sm:text-base md:text-lg text-neutral-600 font-medium leading-relaxed mb-6 sm:mb-8 max-w-xl"
            >
              <p>
                Software house em Curitiba. Processo, sistema sob medida e IA aplicada para operações que precisam de previsibilidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start"
            >
              <button
                onClick={() => openDiagnostico()}
                className="group relative flex items-center bg-[#0A0A0A] hover:bg-[#b9915e] text-white font-bold py-2 px-3 rounded-full transition-all duration-300 ease-in-out min-w-[220px] lg:min-w-[260px] h-[58px] sm:h-[64px] lg:h-[72px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              >
                <span className="flex-1 text-center text-sm sm:text-base lg:text-lg transition-all duration-300 ease-in-out group-hover:translate-x-[-24px] translate-x-[24px]">
                  Agendar diagnóstico
                </span>
                <div className="absolute left-2.5 sm:left-3 group-hover:left-[calc(100%-52px)] lg:group-hover:left-[calc(100%-60px)] bg-white rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out">
                  <AltArrowRight size={22} className="text-[#0A0A0A] group-hover:text-[#b9915e] transition-colors duration-300" />
                </div>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 xl:col-span-6 relative w-full h-[340px] sm:h-[380px] md:h-[420px] xl:h-[480px] flex items-center justify-center mt-6 xl:mt-0 overflow-visible"
          >
            <div className="absolute inset-0 pointer-events-none z-20">
              <span className="absolute top-[2%] left-2 sm:left-4 md:left-[4%] xl:left-[8%] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[0]}
              </span>

              <span className="absolute top-[0%] right-2 sm:right-4 md:right-[4%] xl:right-[6%] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[1]}
              </span>

              <span className="absolute top-[44%] left-2 sm:left-4 md:left-4 xl:-left-[16px] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[2]}
              </span>

              <span className="absolute top-[44%] right-2 sm:right-4 md:right-4 xl:-right-[55px] 2xl:-right-[65px] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[3]}
              </span>

              <span className="absolute bottom-[4%] left-2 sm:left-4 md:left-[6%] xl:left-[12%] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[4]}
              </span>

              <span className="absolute bottom-[2%] right-2 sm:right-4 md:right-[4%] xl:right-[8%] pointer-events-auto px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-full shadow-md hover:border-[#b9915e] hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                {expertiseTags[5]}
              </span>
            </div>

            <div className="relative z-10 w-full flex items-center justify-center translate-x-0 lg:translate-x-2 xl:translate-x-5">
              <Image
                src={aboutImg}
                alt="Estrutura e Tecnologia Emetor"
                className="w-auto h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[330px] max-w-[380px] object-contain mx-auto"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
    </section>
  )
}
