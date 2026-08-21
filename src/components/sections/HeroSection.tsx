"use client"
import Image from "next/image"
import { AltArrowRight } from "@solar-icons/react"
import { openDiagnostico } from "@/lib/open-diagnostico"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh+20px)] h-[calc(100dvh+20px)] flex items-center justify-center -mt-[80px] pt-[80px] md:pt-[90px] lg:pt-[100px] xl:pt-[80px] pb-0 overflow-hidden bg-[radial-gradient(ellipse_at_75%_30%,#F3F5F8_0%,#DBDFE5_45%,#C2C7CF_100%)] rounded-t-[32px]">
      
      {/* Studio Ambient Highlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 55%)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 h-full">
        
        <div className="flex-1 flex flex-col items-start justify-center max-w-[240px] xs:max-w-[270px] sm:max-w-md md:max-w-[380px] lg:max-w-[420px] xl:max-w-[560px] 2xl:max-w-2xl pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-12 pb-8 md:pb-12 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[27px] xs:text-[31px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[62px] 2xl:text-[76px] font-extrabold tracking-[-0.04em] text-[#0A0A0A] leading-[1.04] mb-4 sm:mb-5 md:mb-7"
          >
            Tecnologia para empresas que querem crescer sem o caos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] text-neutral-700 mb-6 sm:mb-8 max-w-[220px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[500px] 2xl:max-w-xl leading-[1.6] font-medium"
          >
            A Emetor estrutura processos complexos e implementa tecnologia de elite para sua empresa escalar com total fluidez operacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.14, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => openDiagnostico()}
              className="group relative flex items-center bg-[#0A0A0A] hover:bg-[#b9915e] text-white font-bold py-2.5 px-3 rounded-full transition-all duration-300 ease-in-out min-w-[205px] xs:min-w-[235px] sm:min-w-[270px] md:min-w-[285px] h-[52px] sm:h-[64px] overflow-hidden shadow-2xl"
            >
              <span className="flex-1 text-center text-[12px] sm:text-[14px] uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:translate-x-[-22px] translate-x-[22px]">
                Falar com a Emetor
              </span>
              <div className="absolute left-2.5 group-hover:left-[calc(100%-50px)] sm:group-hover:left-[calc(100%-56px)] bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out">
                <AltArrowRight size={18} className="text-[#0A0A0A] group-hover:text-[#b9915e] transition-colors duration-300" />
              </div>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="flex absolute bottom-0 -right-56 xs:-right-64 sm:-right-72 md:-right-[140px] lg:-right-[180px] xl:-right-[260px] 2xl:-right-[380px] w-[480px] xs:w-[540px] sm:w-[620px] md:w-[740px] lg:w-[880px] xl:w-[1080px] 2xl:w-[1300px] h-[102%] xs:h-[108%] sm:h-[114%] md:h-[104%] lg:h-[110%] xl:h-[116%] 2xl:h-[122%] z-10 pointer-events-none items-end justify-end opacity-55 sm:opacity-70 md:opacity-85 lg:opacity-100 transition-opacity duration-300"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero-guy-with-virtual-reality-device-on-the-face.png"
              alt="Profissional com dispositivo de realidade virtual"
              fill
              sizes="(max-width: 768px) 480px, (max-width: 1024px) 680px, 1300px"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
