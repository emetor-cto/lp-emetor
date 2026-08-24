"use client"
import Image from "next/image"
import { AltArrowRight } from "@solar-icons/react"
import { openDiagnostico } from "@/lib/open-diagnostico"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Award, Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-fit md:h-[calc(100vh+20px)] md:h-[calc(100dvh+20px)] flex items-center justify-center -mt-[80px] pt-[80px] md:pt-[90px] lg:pt-[100px] xl:pt-[80px] pb-8 md:pb-0 overflow-hidden bg-[radial-gradient(ellipse_at_75%_30%,#F3F5F8_0%,#DBDFE5_45%,#C2C7CF_100%)] rounded-t-[32px]">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 55%)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 h-full">
        
        <div className="flex-1 flex flex-col items-start justify-center max-w-full md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] 2xl:max-w-3xl pt-24 sm:pt-28 md:pt-16 lg:pt-14 xl:pt-10 pb-6 md:pb-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-2 sm:mb-2.5"
          >
            <div className="h-[1px] w-8 bg-[#b9915e]/50" />
            <span className="text-[#b9915e] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-xs">
              Processo, sistema e IA aplicada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] font-extrabold tracking-[-0.04em] text-[#0A0A0A] leading-[1.08] mb-3 sm:mb-4"
          >
            Sua empresa não precisa de mais uma planilha. Precisa de um sistema que devolva margem.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-neutral-700 mb-5 sm:mb-6 max-w-[340px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] xl:max-w-[640px] leading-[1.5] font-medium"
          >
            A Emetor desenha o processo, constrói o sistema sob medida e coloca IA onde ela reduz custo de verdade. Uma etapa por vez, com prazo e aceite formal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.14, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 sm:mb-6"
          >
            <button
              onClick={() => openDiagnostico()}
              className="group relative flex items-center bg-[#0A0A0A] hover:bg-[#b9915e] text-white font-bold py-2.5 px-3 rounded-full transition-all duration-300 ease-in-out min-w-[240px] sm:min-w-[270px] md:min-w-[285px] h-[56px] sm:h-[64px] overflow-hidden shadow-2xl"
            >
              <span className="flex-1 text-center text-[13px] sm:text-[14px] uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:translate-x-[-22px] translate-x-[22px]">
                Falar com a Emetor
              </span>
              <div className="absolute left-2.5 group-hover:left-[calc(100%-50px)] sm:group-hover:left-[calc(100%-56px)] bg-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out">
                <AltArrowRight size={20} className="text-[#0A0A0A] group-hover:text-[#b9915e] transition-colors duration-300" />
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t border-neutral-300/60 w-full max-w-xl text-xs sm:text-[13px] font-bold text-neutral-900"
          >
            <span className="flex items-center gap-2 text-neutral-900">
              <CheckCircle2 size={15} className="text-neutral-900 shrink-0" />
              Empresas em operação recorrente
            </span>

            <span className="flex items-center gap-2 text-neutral-900">
              <ShieldCheck size={15} className="text-neutral-900 shrink-0" />
              Método de 7 etapas com aceite formal
            </span>

            <span className="flex items-center gap-2 text-neutral-900">
              <Award size={15} className="text-neutral-900 shrink-0" />
              12 meses de garantia em contrato
            </span>

            <span className="flex items-center gap-2 text-neutral-900">
              <Lock size={15} className="text-neutral-900 shrink-0" />
              Código-fonte depositado em escrow
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="hidden min-[1150px]:flex absolute bottom-0 -right-56 xs:-right-64 sm:-right-72 md:-right-[140px] lg:-right-[180px] xl:-right-[260px] 2xl:-right-[380px] w-[480px] xs:w-[540px] sm:w-[620px] md:w-[740px] lg:w-[880px] xl:w-[1080px] 2xl:w-[1300px] h-[102%] xs:h-[108%] sm:h-[114%] md:h-[104%] lg:h-[110%] xl:h-[116%] 2xl:h-[122%] z-10 pointer-events-none items-end justify-end opacity-55 sm:opacity-70 md:opacity-85 lg:opacity-100 transition-opacity duration-300"
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
