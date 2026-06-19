"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AltArrowRight } from "@solar-icons/react"
import Image from "next/image"
import logoBranca from "@/assets/logo-branca.png"

export function FinalCTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section
      id="final-cta"
      ref={containerRef}
      className="w-full bg-[#020202] pt-20 md:pt-32 pb-48 md:pb-64 relative overflow-hidden"
      data-header-theme="dark"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[180px] rounded-full"
        />

        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[500px] bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30"
        />

        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light opacity-50" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 opacity-80"
          >
            <div className="relative w-64 md:w-[400px] lg:w-[600px] h-12 md:h-[66px] lg:h-[100px]">
              <Image 
                src={logoBranca} 
                alt="Emetor" 
                fill 
                className="object-contain" 
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-12 leading-[0.9] max-w-5xl"
          >
            PRONTO PARA CONSTRUIR O <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 italic">INABALÁVEL?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl lg:text-3xl text-neutral-400 mb-20 max-w-3xl leading-relaxed font-medium"
          >
            A Emetor estrutura os processos, otimiza as ferramentas e implementa tecnologia de ponta para sua empresa crescer <span className="text-white">sem atritos.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <button
              className="group relative flex items-center bg-white text-neutral-900 font-bold rounded-full transition-all duration-500 ease-in-out min-w-[320px] md:min-w-[400px] h-[84px] overflow-hidden shadow-[0_30px_70px_rgba(255,255,255,0.1)] hover:shadow-[0_40px_90px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <span className="flex-1 text-center text-lg md:text-xl transition-all duration-500 ease-in-out group-hover:translate-x-[-24px] translate-x-[24px]">
                Falar com a Emetor
              </span>
              <div className="absolute left-3 group-hover:left-[calc(100%-74px)] bg-neutral-100 rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out">
                <AltArrowRight size={28} className="text-neutral-900 transition-colors duration-500" />
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 pt-12 border-t border-white/5 w-full max-w-4xl flex justify-center items-center gap-4 md:gap-12 text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.3em] text-neutral-600 uppercase"
          >
            <span>Sistemas</span>
            <div className="w-1 h-1 rounded-full bg-neutral-800" />
            <span>Protocolos</span>
            <div className="w-1 h-1 rounded-full bg-neutral-800" />
            <span>Inteligência</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}
