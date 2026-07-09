"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { AltArrowLeft } from "@solar-icons/react"
import { ChatSimulator } from "@/components/chat/ChatSimulator"
import { closeDiagnostico } from "@/lib/open-diagnostico"

export function DiagnosticoOverlay() {
  const pathname = usePathname()
  const router = useRouter()
  const [isClientOpen, setIsClientOpen] = useState(false)

  useEffect(() => {
    setIsClientOpen(pathname === "/diagnostico")
  }, [pathname])

  useEffect(() => {
    const handleOpen = () => setIsClientOpen(true)
    const handleClose = () => setIsClientOpen(false)
    const handlePopState = () => {
      setIsClientOpen(window.location.pathname === "/diagnostico")
    }

    window.addEventListener("open-diagnostico", handleOpen)
    window.addEventListener("close-diagnostico", handleClose)
    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("open-diagnostico", handleOpen)
      window.removeEventListener("close-diagnostico", handleClose)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const isOpen = isClientOpen || pathname === "/diagnostico"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col h-screen w-screen overflow-hidden"
        >
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="shrink-0 pt-12 pb-6 px-6 md:px-12 bg-white z-20">
              <div className="container mx-auto">
                <button
                  onClick={() => closeDiagnostico()}
                  className="group flex items-center gap-3 text-neutral-500 hover:text-neutral-900 transition-colors w-fit"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center bg-white shadow-sm group-hover:border-neutral-900 transition-all duration-300">
                    <AltArrowLeft size={24} />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-[0.2em] pt-0.5">Voltar</span>
                </button>
              </div>
            </div>

            <div
              id="diagnostico-scroll-container"
              className="flex-1 overflow-y-auto px-6 md:px-12 pb-20 flex flex-col items-center"
            >
              <main className="w-full max-w-4xl pt-4 flex flex-col items-center text-center">
                <h1 className="text-2xl md:text-[32px] font-bold tracking-tight text-neutral-900 leading-[1.2] mb-6 max-w-2xl">
                  Vamos estruturar sua <span className="text-primary">próxima solução</span> tecnológica!
                </h1>

                <div className="w-full pb-20">
                  <ChatSimulator />
                </div>
              </main>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

