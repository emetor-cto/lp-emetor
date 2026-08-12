"use client"
import Image from "next/image"
import { AltArrowRight } from "@solar-icons/react"
import { openDiagnostico } from "@/lib/open-diagnostico"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] min-h-[620px] max-h-[920px] flex items-center justify-center -mt-[80px] pt-[80px] pb-0 overflow-hidden bg-[radial-gradient(ellipse_at_75%_30%,#F3F5F8_0%,#DBDFE5_45%,#C2C7CF_100%)] rounded-t-[32px]">
      
      {/* Studio Ambient Highlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 55%)'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 h-full">
        
        {/* Left side: Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl pt-4 md:pt-8 pb-8 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="text-[42px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-extrabold tracking-[-0.04em] text-[#0A0A0A] leading-[1.02] mb-5 md:mb-7"
          >
            Tecnologia para empresas que querem crescer sem o caos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="text-[16px] md:text-[18px] lg:text-[19px] text-neutral-700 mb-8 max-w-xl leading-[1.6] font-medium"
          >
            A Emetor estrutura processos complexos e implementa tecnologia de elite para sua empresa escalar com total fluidez operacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
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

        {/* Right side: Enlarged Image locked flush to bottom and further right */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 -right-32 md:-right-52 lg:-right-72 xl:-right-[380px] w-[580px] sm:w-[720px] md:w-[940px] lg:w-[1140px] xl:w-[1300px] h-[85%] md:h-[108%] lg:h-[118%] z-10 pointer-events-none flex items-end justify-end"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero-guy-with-virtual-reality-device-on-the-face.png"
              alt="Profissional com dispositivo de realidade virtual"
              fill
              sizes="(max-width: 768px) 580px, (max-width: 1024px) 940px, 1300px"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
