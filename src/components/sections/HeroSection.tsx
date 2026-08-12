"use client"
import Image from "next/image"
import { AltArrowRight } from "@solar-icons/react"
import { openDiagnostico } from "@/lib/open-diagnostico"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center pt-[100px] md:pt-[120px] lg:pt-[140px] pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left side: Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-neutral-300 bg-white/60 backdrop-blur-sm text-[12px] font-semibold tracking-widest uppercase text-neutral-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Disponível para projetos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[52px] md:text-[68px] lg:text-[80px] font-bold tracking-[-0.04em] text-neutral-900 leading-[1.0] mb-6"
          >
            Tecnologia para empresas que querem{" "}
            <span className="text-[#b9915e]">crescer</span>{" "}
            sem o caos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[17px] md:text-[19px] text-neutral-500 mb-12 max-w-xl leading-[1.65] font-medium"
          >
            A Emetor estrutura processos complexos e implementa tecnologia de elite para sua empresa escalar com total fluidez operacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          >
            <button
              onClick={() => openDiagnostico()}
              className="group relative flex items-center bg-[#0A0A0A] hover:bg-[#b9915e] text-white font-bold py-2.5 px-3 rounded-full transition-all duration-500 ease-in-out min-w-[240px] h-[64px] overflow-hidden shadow-2xl"
            >
              <span className="flex-1 text-center text-[14px] uppercase tracking-wider transition-all duration-500 ease-in-out group-hover:translate-x-[-20px] translate-x-[20px]">
                Falar com a Emetor
              </span>
              <div className="absolute left-2.5 group-hover:left-[calc(100%-54px)] bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-500 ease-in-out">
                <AltArrowRight size={20} className="text-[#0A0A0A] group-hover:text-[#b9915e] transition-colors duration-500" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end items-end relative"
        >
          <div className="relative w-[320px] md:w-[400px] lg:w-[480px] xl:w-[520px] h-[440px] md:h-[560px] lg:h-[640px] xl:h-[700px]">
            <Image
              src="/hero-guy-with-virtual-reality-device-on-the-face.png"
              alt="Profissional com dispositivo de realidade virtual"
              fill
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 520px"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
