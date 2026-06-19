"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AltArrowRight, MenuDots, CloseCircle } from "@solar-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/utils"

import logoPreta from "@/assets/logo-preta.png"
import logoBranca from "@/assets/logo-branca.png"

export function Header() {
  const pathname = usePathname()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    const intersectingSections = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id || entry.target.className
          if (entry.isIntersecting) {
            intersectingSections.add(id)
          } else {
            intersectingSections.delete(id)
          }
          setIsDarkTheme(intersectingSections.size > 0)
        })
      },
      { threshold: [0], rootMargin: "-80px 0px 0px 0px" }
    )

    const darkSections = document.querySelectorAll('[data-header-theme="dark"]')
    darkSections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      darkSections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  } as const

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/diagnostico", label: "Diagnóstico" }
  ]

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 border-b",
        isDarkTheme 
          ? "bg-black/20 backdrop-blur-2xl border-white/10" 
          : "bg-white/30 backdrop-blur-xl border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
      )}>
        {/* Scroll Progress Bar */}
        <div
          className={cn(
            "absolute bottom-[-1px] left-0 h-[2px] bg-accent transition-all duration-150 ease-out z-10",
            isDarkTheme 
              ? "shadow-[0_0_15px_rgba(185,145,94,0.6)]" 
              : "shadow-[0_0_10px_rgba(185,145,94,0.3)]"
          )}
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto flex h-[80px] items-center justify-between px-6">
          <Link href="/" className="flex items-center group relative z-[60]">
            <div className="relative h-7 md:h-8 w-28 md:w-32 transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src={isDarkTheme || isMenuOpen ? logoBranca : logoPreta}
                alt="Emetor Logo"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden md:flex gap-12 text-[11px] font-bold tracking-widest uppercase transition-colors duration-500",
            isDarkTheme ? "text-white/60" : "text-neutral-600"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative transition-colors hover:text-accent group",
                  pathname === link.href ? 'text-accent' : '',
                  isDarkTheme && pathname !== link.href ? "hover:text-white" : ""
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/diagnostico">
              <button className={cn(
                "group relative flex items-center font-bold py-1.5 px-2 rounded-full transition-all duration-500 ease-in-out min-w-[180px] h-12 overflow-hidden shadow-lg hover:bg-accent hover:text-white",
                isDarkTheme 
                  ? "bg-white text-primary shadow-white/5" 
                  : "bg-primary text-white shadow-primary/5"
              )}>
                <span className="flex-1 text-center text-[11px] uppercase tracking-wider transition-all duration-500 ease-in-out group-hover:translate-x-[-12px] translate-x-[12px]">
                  Fale Conosco
                </span>
                <div className={cn(
                  "absolute left-2 group-hover:left-[calc(100%-40px)] rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-500 ease-in-out",
                  isDarkTheme ? "bg-neutral-100" : "bg-white"
                )}>
                  <AltArrowRight size={18} className="text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[60] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseCircle size={28} className="text-white" />
            ) : (
              <MenuDots 
                size={28} 
                className={cn(
                  "transition-colors",
                  isDarkTheme ? "text-white" : "text-neutral-900"
                )} 
              />
            )}
          </button>
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
            className="fixed inset-0 z-[55] bg-primary flex flex-col justify-center px-10"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-white/5 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-full h-full bg-black/10 blur-[120px] rounded-full" />
            </div>

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
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-4xl font-bold tracking-tighter transition-all hover:translate-x-4 inline-block",
                      pathname === link.href ? "text-accent" : "text-white/40"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 relative z-10"
            >
              <Link href="/diagnostico" onClick={() => setIsMenuOpen(false)}>
                <button className="flex items-center gap-4 text-white group">
                  <span className="text-lg font-bold tracking-widest uppercase">Iniciar Diagnóstico</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <AltArrowRight size={24} className="text-accent" />
                  </div>
                </button>
              </Link>
            </motion.div>

            <div className="absolute bottom-12 left-10 text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">
              Emetor © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
