"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#08090C] text-white pt-16 pb-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-8 border-b border-white/10">
          <div>
            <span className="text-xl font-extrabold tracking-tighter text-white uppercase">
              Emetor
            </span>
            <p className="text-xs text-neutral-400 mt-2 max-w-md">
              Estratégia de produto, engenharia e IA para levar oportunidades digitais do diagnóstico à primeira versão utilizável.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-[#E2C192] font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
              SEDE INSTITUCIONAL
            </span>
            <a
              href="https://maps.google.com/?q=MID+Work+Curitiba+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors duration-300"
            >
              <svg 
                className="w-4 h-4 text-[#E2C192] group-hover:scale-110 transition-transform duration-300 shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="group-hover:underline underline-offset-4">
                MID Work • Curitiba, PR - Brasil
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
            © 2026 EMETOR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
