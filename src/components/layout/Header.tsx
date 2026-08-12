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


const TAB_PAD = 34
const TAB_SLANT = 32

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerContainerRef = useRef<HTMLDivElement>(null)
  const [tabMetrics, setTabMetrics] = useState<{ left: number; width: number } | null>(null)
  const [activeHref, setActiveHref] = useState<string>(pathname)
  const linkRefs = useRef<Map<string, HTMLAnchorElement | null>>(new Map())

  const updateTab = useCallback((href: string) => {
    const linkEl = linkRefs.current.get(href)
    const containerEl = headerContainerRef.current
    if (!linkEl || !containerEl) return
    const containerRect = containerEl.getBoundingClientRect()
    const linkRect = linkEl.getBoundingClientRect()
    setTabMetrics({
      left: linkRect.left - containerRect.left - TAB_PAD - TAB_SLANT,
      width: linkRect.width + (TAB_PAD + TAB_SLANT) * 2,
    })
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    setActiveHref(pathname)
    const timer = setTimeout(() => updateTab(pathname), 80)
    return () => clearTimeout(timer)
  }, [pathname, updateTab])

  const onNavHover = (href: string) => {
    setActiveHref(href)
    updateTab(href)
  }

  const onNavLeave = () => {
    setActiveHref(pathname)
    updateTab(pathname)
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  } as const

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-[60px] pt-0">
        <div ref={headerContainerRef} className="relative w-full h-[64px] md:h-[80px]">

          {/* HEADER BACKGROUND — fully black */}
          <div className="absolute inset-0 bg-[#0A0A0A] z-0 pointer-events-auto" />

          {/* LOGO */}
          <div className="absolute top-0 left-0 h-full flex items-center px-4 md:px-6 z-30 pointer-events-auto">
            <Link href="/" className="relative h-6 md:h-8 w-24 md:w-32 transition-transform hover:scale-105">
              <Image
                src={logoBranca}
                alt="Emetor Logo"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* MOVING FOLDER TAB matching HeroSection background color (#FFFFFF) */}
          {tabMetrics && (
            <motion.div
              className="absolute top-[16px] md:top-[20px] bottom-0 z-[22] pointer-events-none"
              animate={{ left: tabMetrics.left, width: tabMetrics.width }}
              initial={{ left: tabMetrics.left, width: tabMetrics.width }}
              transition={{ type: "spring", stiffness: 440, damping: 38 }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none" fill="none">
                <path
                  d="M 0 60 L 22 10 Q 26 0 36 0 L 64 0 Q 74 0 78 10 L 100 60 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </motion.div>
          )}

          {/* NAV LINKS — z-30 so they render above the moving tab */}
          <div className="absolute top-0 right-0 w-[80px] md:w-[900px] lg:w-[1020px] h-full pointer-events-auto flex items-center justify-end px-4 md:px-6 z-30">

            <nav
              onMouseLeave={onNavLeave}
              className="hidden md:flex h-full items-center gap-14 lg:gap-20 text-[11px] font-bold tracking-widest uppercase relative mr-12 lg:mr-16"
            >
              {navLinks.map((link) => {
                const isTabUnder = activeHref === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => { linkRefs.current.set(link.href, el) }}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onMouseEnter={() => onNavHover(link.href)}
                    onClick={(e) => {
                      if (link.href === "/diagnostico") {
                        e.preventDefault()
                        openDiagnostico()
                      }
                    }}
                    className={cn(
                      "h-full flex items-center relative transition-colors duration-300 font-bold",
                      isTabUnder ? "text-[#0A0A0A]" : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center">
              <button
                onClick={() => openDiagnostico()}
                className="group relative flex items-center font-bold py-1 px-1.5 rounded-full transition-all duration-500 ease-in-out min-w-[150px] h-10 overflow-hidden bg-white text-[#0A0A0A] hover:bg-[#b9915e] hover:text-white shadow-lg"
              >
                <span className="flex-1 text-center text-[10px] uppercase tracking-wider transition-all duration-500 ease-in-out group-hover:-translate-x-3 translate-x-3">
                  Fale Conosco
                </span>
                <div className="absolute left-1 group-hover:left-[calc(100%-36px)] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-500 ease-in-out bg-[#0A0A0A] text-white">
                  <AltArrowRight size={14} className="group-hover:text-white transition-colors duration-500" />
                </div>
              </button>
            </div>

            <button
              className="md:hidden relative z-[60] p-1 text-white hover:text-[#b9915e] transition-colors"
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
