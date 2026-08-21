"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AltArrowRight, MenuDots, CloseCircle } from "@solar-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/utils"

import logoBranca from "@/assets/logo-branca.png"
import { openDiagnostico } from "@/lib/open-diagnostico"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "https://eventos.emetor.com.br/", label: "Bootcamp", external: true },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  } as const

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 sm:px-8 md:px-[60px] pt-0">
        <div className="relative w-full h-[64px] md:h-[80px]">

          <svg className="block md:hidden absolute inset-0 w-full h-[112px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1200 112" preserveAspectRatio="none">
            <path
              d="M 0 0 L 1200 0 L 1200 112 Q 1200 80, 1100 80 L 100 80 Q 0 80, 0 112 Z"
              fill="#0A0A0A"
            />
          </svg>

          <svg className="hidden md:block xl:hidden absolute inset-0 w-full h-[112px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1200 112" preserveAspectRatio="none">
            <path
              d="M 0 0 L 1200 0 L 1200 112 Q 1200 80, 1157 80 L 43 80 Q 0 80, 0 112 Z"
              fill="#0A0A0A"
            />
          </svg>

          <svg className="hidden xl:block absolute inset-0 w-full h-[112px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1200 112" preserveAspectRatio="none">
            <path
              d="M 0 0 L 1200 0 L 1200 112 Q 1200 80, 1160 80 L 640 80 C 604 80, 586 20, 550 20 L 230 20 C 194 20, 176 80, 140 80 L 40 80 Q 0 80, 0 112 Z"
              fill="#0A0A0A"
            />
          </svg>

          {/* LOGO */}
          <div className="absolute top-0 left-0 w-[130px] sm:w-[170px] md:w-[200px] h-full pointer-events-auto flex items-center px-3 sm:px-6 z-30">
            <Link href="/" className="relative h-6 sm:h-7 md:h-9 w-24 sm:w-28 md:w-36 transition-transform hover:scale-105">
              <Image
                src={logoBranca}
                alt="Emetor Logo"
                fill
                sizes="(max-width: 768px) 110px, 180px"
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          {/* RIGHT NAV & CTA NOTCH */}
          <div className="absolute top-0 right-0 w-[420px] xl:w-[560px] h-full pointer-events-auto flex items-center justify-end px-3 sm:px-6 z-30">

            <nav className="hidden xl:flex h-full items-center gap-6 text-[11px] font-bold tracking-widest uppercase relative mr-8">
              {navLinks.map((link) => {
                const isActive = !link.external && pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={(e) => {
                      if (link.href === "/diagnostico") {
                        e.preventDefault()
                        openDiagnostico()
                      }
                    }}
                    className={cn(
                      "h-full flex items-center justify-center text-center leading-none whitespace-nowrap relative transition-colors duration-300 font-bold",
                      isActive ? "text-[#b9915e]" : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden xl:flex items-center">
              <button
                onClick={() => openDiagnostico()}
                className="group relative flex items-center font-bold py-1 px-1.5 rounded-full transition-all duration-300 ease-in-out min-w-[150px] h-10 overflow-hidden bg-white text-[#0A0A0A] hover:bg-[#b9915e] hover:text-white shadow-lg"
              >
                <span className="flex-1 text-center text-[10px] uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:-translate-x-3 translate-x-3">
                  Fale Conosco
                </span>
                <div className="absolute left-1 group-hover:left-[calc(100%-36px)] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 ease-in-out bg-[#0A0A0A] text-white">
                  <AltArrowRight size={14} className="group-hover:text-white transition-colors duration-300" />
                </div>
              </button>
            </div>

            <button
              className="xl:hidden relative z-[60] p-1 text-white hover:text-[#b9915e] transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuDots size={28} />
            </button>
          </div>

        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col justify-center px-10"
          >
            <button
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseCircle size={32} />
            </button>

            <nav className="relative z-10 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={(e) => {
                      setIsMenuOpen(false)
                      if (link.href === "/diagnostico") {
                        e.preventDefault()
                        openDiagnostico()
                      }
                    }}
                    className={cn(
                      "text-4xl font-bold tracking-tighter transition-all hover:translate-x-4 inline-block",
                      !link.external && pathname === link.href ? "text-[#b9915e]" : "text-white/40"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
