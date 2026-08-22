"use client"
import Image from "next/image"

import empresa1 from "@/assets/empresa1.png"
import empresa2 from "@/assets/empresa2.png"
import empresa3 from "@/assets/empresa3.png"
import empresa4 from "@/assets/empresa4.png"
import empresa5 from "@/assets/empresa5.png"
import empresa6 from "@/assets/empresa6.png"
import empresa7 from "@/assets/empresa7.png"
import empresa8 from "@/assets/empresa8.png"
import empresa9 from "@/assets/empresa9.png"

const clientLogos = [
  { id: 1, name: "Empresa 1", src: empresa1, darkCard: false },
  { id: 2, name: "Empresa 2", src: empresa2, darkCard: false },
  { id: 3, name: "Empresa 3", src: empresa3, darkCard: false },
  { id: 4, name: "Empresa 4", src: empresa4, darkCard: false },
  { id: 5, name: "Empresa 5", src: empresa5, darkCard: true },
  { id: 6, name: "Empresa 6", src: empresa6, darkCard: false },
  { id: 7, name: "Empresa 7", src: empresa7, darkCard: false },
  { id: 8, name: "Empresa 8", src: empresa8, darkCard: true },
  { id: 9, name: "Empresa 9", src: empresa9, darkCard: false },
]

export function PartnersSection() {
  return (
    <section className="w-full bg-white border-y border-neutral-100/80 py-10 sm:py-14 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
        <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 tracking-[0.25em] uppercase block text-center mb-6 sm:mb-9">
          Empresas que confiam e escalam com a Emetor
        </span>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 items-center justify-center">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className={`flex items-center justify-center h-20 sm:h-24 md:h-26 w-full p-3 sm:p-3.5 rounded-xl transition-all duration-300 group ${
                logo.darkCard
                  ? "bg-[#0A0A0A] border border-neutral-800 shadow-sm hover:shadow-lg hover:border-neutral-700"
                  : "bg-neutral-50/80 hover:bg-white border border-neutral-100/90 hover:border-neutral-200 hover:shadow-md"
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className={`max-h-13 sm:max-h-16 md:max-h-18 w-auto max-w-full object-contain transition-all duration-300 ease-out group-hover:scale-105 ${
                  logo.darkCard
                    ? "opacity-90 group-hover:opacity-100"
                    : "filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

