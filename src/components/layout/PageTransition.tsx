"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import logoBranca from "@/assets/logo-branca.png"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname} className="w-full flex-1 flex flex-col min-h-full relative bg-white">
        {/* INSTANT WHITE BACKDROP OVERLAY (Ativa instantaneamente no clique por alguns milissegundos) */}
        <motion.div
          key={`backdrop-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.65 }}
          className="fixed inset-0 z-[9997] bg-white pointer-events-none"
        />

        {/* FULL SCREEN SLIDING CURTAIN OVERLAY (100vh x 100vw) */}
        <motion.div
          key={`curtain-${pathname}`}
          initial={{ y: "100%" }}
          animate={{ y: ["100%", "0%", "0%", "-100%"] }}
          transition={{
            duration: 1.0,
            times: [0, 0.38, 0.62, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] pointer-events-none flex items-center justify-center border-y-2 border-[#b9915e]/70 shadow-[0_0_60px_rgba(185,145,94,0.35)]"
        >
          {/* Logo Emetor 100% ESTÁTICA no centro da tela preta */}
          <div className="relative w-48 h-14 opacity-100">
            <Image
              src={logoBranca}
              alt="Emetor Logo"
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
              priority
            />
          </div>
        </motion.div>

        {/* PAGE CONTENT — Conteúdo de Início e Quem Somos vindo de baixo para cima */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.48,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full flex-1 flex flex-col min-h-full"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
