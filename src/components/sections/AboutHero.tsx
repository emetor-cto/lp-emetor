"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AltArrowRight } from "@solar-icons/react"
import { motion } from "framer-motion"
import { openDiagnostico } from "@/lib/open-diagnostico"
import emetor1 from "@/assets/emetor1.webp"
import emetor2 from "@/assets/emetor2.webp"

export function AboutHero() {
  const router = useRouter()

  return (
    <section className="relative w-full pt-12 sm:pt-16 pb-16 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-5 items-start max-w-[480px] mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <Image
                src={emetor1}
                alt="Emetor 1"
                className="w-full h-auto rounded-[24px] shadow-lg border border-neutral-100"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="w-full mt-6 md:mt-10"
            >
              <Image
                src={emetor2}
                alt="Emetor 2"
                className="w-full h-auto rounded-[24px] shadow-lg border border-neutral-100"
                priority
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-left lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#1e3a8a] font-extrabold uppercase tracking-[0.25em] text-[11px] mb-2.5 block">
                Quem Somos
              </span>
              <h1 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold tracking-tight text-neutral-900 leading-[1.25] mb-4 uppercase">
                A EMETOR É ESTRUTURA OPERACIONAL <br className="hidden sm:block" />
                <span className="text-primary">& TECNOLOGIA APLICADA.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-[16px] text-neutral-500 mb-8 max-w-lg leading-relaxed font-medium"
            >
              A Emetor não vende software. Nós reestruturamos as bases da sua empresa com tecnologia de elite, para que você possa escalar sem o caos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <button
                onClick={() => openDiagnostico()}
                className="group relative flex items-center bg-accent hover:bg-accent-hover text-white font-bold py-2.5 px-3 rounded-full transition-all duration-500 ease-in-out min-w-[260px] h-[72px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              >
                <span className="flex-1 text-center text-lg transition-all duration-500 ease-in-out group-hover:translate-x-[-24px] translate-x-[24px]">
                  Falar com a Emetor
                </span>
                <div className="absolute left-3 group-hover:left-[calc(100%-60px)] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out">
                  <AltArrowRight size={26} className="text-accent group-hover:text-accent-hover transition-colors duration-500" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
    </section>
  )
}
