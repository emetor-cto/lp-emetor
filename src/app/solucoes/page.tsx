import type { Metadata } from "next";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { solucoesFaqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Soluções em Processos, Aplicativos e Software Sob Medida | Emetor",
  description: "Desenvolvimento de aplicativos, sistemas sob medida e integração de ferramentas para operações complexas. Conheça as soluções da Emetor.",
};

export default function SolucoesPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-[#0A0A0A] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden rounded-t-[32px]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl text-center relative z-10">
          <span className="text-[#b9915e] font-bold uppercase tracking-[0.25em] text-xs block mb-4">
            Ecossistema de Tecnologia
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Soluções de Tecnologia Desenhadas para a Sua Operação
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Software sob medida, aplicativos para times de campo e automação inteligente construídos sobre o processo real da sua empresa.
          </p>
        </div>
      </section>

      <SolutionSection />

      <FaqSection
        faqs={solucoesFaqs}
        title="Dúvidas sobre Nossas Soluções"
        subtitle="Entenda as diferenças entre software sob medida, aplicativos e integração de sistemas."
        badge="SOLUÇÕES & PROPRIEDADE"
      />

      <FinalCTASection />
    </div>
  );
}
