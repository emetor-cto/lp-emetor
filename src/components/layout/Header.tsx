"use client"
import { useState, useEffect, useRef } from "react"
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

// SVG for slanted (inclined) curve on the left - 30 degree diagonal with 12px smooth rounded corners
const SlantLeft = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {/* Main black shape with top-right rounded corner */}
    <path d="M64 0 L0 0 L0 80 L12 80 L45.5 30 Q52 20, 64 20 Z" fill="#0A0A0A" />
    {/* Gray corner cover to create the bottom-left rounded corner (negative space) */}
    <path d="M0 80 Q12 80, 18.5 70 L18.5 80 Z" fill="#EDEDEC" />
  </svg>
)

// SVG for slanted (inclined) curve on the right - 30 degree diagonal with 12px smooth rounded corners
const SlantRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {/* Main black shape with top-left rounded corner */}
    <path d="M0 0 L64 0 L64 80 L52 80 L18.5 30 Q12 20, 0 20 Z" fill="#0A0A0A" />
    {/* Gray corner cover to create the bottom-right rounded corner (negative space) */}
    <path d="M64 80 Q52 80, 45.5 70 L45.5 80 Z" fill="#EDEDEC" />
  </svg>
)

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number } | null>(null)
  const linkRefs = useRef<Map<string, HTMLAnchorElement | null>>(new Map())

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const activeLink = linkRefs.current.get(pathname)
    const navEl = navRef.current
    if (activeLink && navEl) {
      const navRect = navEl.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
    } else {
      setIndicatorStyle(null)
    }
  }, [pathname])

  const onNavHover = (href: string) => {
    const el = linkRefs.current.get(href)
    const navEl = navRef.current
    if (el && navEl) {
      const navRect = navEl.getBoundingClientRect()
      const linkRect = el.getBoundingClientRect()
      setIndicatorStyle({ left: linkRect.left - navRect.left, width: linkRect.width })
    }
  }

  const onNavLeave = () => {
    const activeLink = linkRefs.current.get(pathname)
    const navEl = navRef.current
    if (activeLink && navEl) {
      const navRect = navEl.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setIndicatorStyle({ left: linkRect.left - navRect.left, width: linkRect.width })
    } else {
      setIndicatorStyle(null)
    }
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  } as const

  return (
    <>
      {/* Padding matches the main layout container perfectly */}
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-3 md:px-4 lg:px-6 pt-0">
        <div className="relative w-full h-[64px] md:h-[80px]">
          
          {/* SOLID HEADER MASK to perfectly hide scrolling content underneath */}
          <div className="absolute top-0 left-0 w-full h-[16px] md:h-[20px] bg-[#0A0A0A] z-0 pointer-events-auto" />
          <div className="absolute top-[16px] md:top-[20px] left-0 w-full bottom-0 bg-[#EDEDEC] rounded-t-[24px] z-0 pointer-events-auto" />

          {/* =======================
              TOP-LEFT (LOGO) NOTCH 
              ======================= */}
          <div className="absolute top-0 left-0 w-[140px] md:w-[180px] lg:w-[200px] h-full bg-[#0A0A0A] pointer-events-auto flex items-center px-4 md:px-6 z-20">
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
          
          {/* Slanted Transition Curve for Left Notch */}
          <SlantLeft className="absolute top-0 left-[140px] md:left-[180px] lg:left-[200px] w-[56px] md:w-[64px] -translate-x-[12px] h-full pointer-events-none z-30" />

          {/* =======================
              TOP-RIGHT (NAV) NOTCH 
              ======================= */}
          <div className="absolute top-0 right-0 w-[80px] md:w-[580px] lg:w-[640px] h-full bg-[#0A0A0A] pointer-events-auto flex items-center justify-end px-4 md:px-6 z-20">
            
            {/* Desktop Navigation */}
            <nav
              ref={navRef}
              onMouseLeave={onNavLeave}
              className="hidden md:flex gap-8 lg:gap-10 text-[11px] font-bold tracking-widest uppercase text-white/70 relative mr-6"
            >
              {indicatorStyle && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-[20px] h-[2px] bg-[#b9915e]"
                  style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {navLinks.map((link) => {
                const isActive = !link.external && pathname === link.href
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
                      "relative transition-colors hover:text-white pb-1",
                      isActive ? "text-white" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
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

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[60] p-1 text-white hover:text-[#b9915e] transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuDots size={28} />
            </button>
          </div>

          {/* Slanted Transition Curve for Right Notch */}
          <SlantRight className="absolute top-0 right-[80px] md:right-[580px] lg:right-[640px] w-[56px] md:w-[64px] translate-x-[12px] h-full pointer-events-none z-30" />

        </div>
      </header>

      {/* Mobile Menu Overlay */}
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
