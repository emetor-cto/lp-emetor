import type { Metadata } from "next";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { trilhaFaqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Trilha Emetor - Metodologia de Entrega e Ciclos | Emetor",
  description: "Conheça a Trilha Emetor: metodologia de 7 etapas para entregas estruturadas, com critérios de aceite transparentes e prazos definidos.",
};

export default function TrilhaEmetorPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-[#0A0A0A] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden rounded-t-[32px]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl text-center relative z-10">
          <span className="text-[#b9915e] font-bold uppercase tracking-[0.25em] text-xs block mb-4">
            Metodologia de Entrega
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Trilha Emetor: Previsibilidade do Diagnóstico à Operação
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Nossa metodologia em 7 etapas garante entregas em ciclos, validação constante e aprovação formal em cada fase do projeto.
          </p>
        </div>
      </section>

      <MethodologySection />

      <FaqSection
        faqs={trilhaFaqs}
        title="Dúvidas sobre a Trilha Emetor"
        subtitle="Entenda como funcionam os prazos, etapas e critérios de aceite na metodologia da Emetor."
        badge="MÉTODO & ETAPAS"
      />

      <FinalCTASection />
    </div>
  );
}
