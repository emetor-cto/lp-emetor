"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AltArrowRight } from "@solar-icons/react"
import { motion } from "framer-motion"

export function AboutHero() {
  const router = useRouter()

  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10" />
        <Image
          src="/about-hero.png"
          alt="Emetor Technology"
          fill
          className="object-cover object-center grayscale-[0.2] opacity-40"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium tracking-tight text-neutral-900 leading-[1] mb-8 uppercase italic">
              A EMETOR É ESTRUTURA <br />
              <span className="text-primary not-italic">OPERACIONAL &</span> <br />
              TECNOLOGIA APLICADA.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl leading-relaxed"
          >
            Estruturamos operações, organizamos processos, conectamos dados e aplicamos
            inteligência artificial para empresas que precisam de eficiência máxima e
            crescimento sustentável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <button
              onClick={() => router.push("/diagnostico")}
              className="group relative flex items-center bg-neutral-900 hover:bg-primary text-white font-bold py-2.5 px-3 rounded-full transition-all duration-500 ease-in-out min-w-[260px] h-[72px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]">
              <span className="flex-1 text-center text-lg transition-all duration-500 ease-in-out group-hover:translate-x-[-24px] translate-x-[24px]">
                Falar com a Emetor
              </span>
              <div className="absolute left-3 group-hover:left-[calc(100%-60px)] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out">
                <AltArrowRight size={26} className="text-neutral-900 group-hover:text-primary transition-colors duration-500" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
    </section>
  )
}
