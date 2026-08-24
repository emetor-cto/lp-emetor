import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { sistemaIaFaqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Auditoria e Segurança em Sistemas feitos com IA | Emetor",
  description: "Descubra se seu sistema feito no Claude Code, Lovable, Cursor ou Replit é seguro. A Emetor realiza auditorias completas de arquitetura e segurança.",
};

export default function SistemaFeitoComIaPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-[#0A0A0A] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden rounded-t-[32px]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl text-center relative z-10">
          <span className="text-[#b9915e] font-bold uppercase tracking-[0.25em] text-xs block mb-4">
            Auditoria & Arquitetura
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Sistemas Criados por IA: Segurança e Estrutura de Operação
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Ferramentas como Claude Code, Lovable e Cursor aceleram o desenvolvimento, mas exigem auditoria técnica de segurança, controle de acesso e LGPD.
          </p>
        </div>
      </section>

      <FaqSection
        faqs={sistemaIaFaqs}
        title="Perguntas Frequentes sobre Sistemas Gerados por IA"
        subtitle="Entenda como a Emetor audita, corrige e eleva a segurança de aplicações criadas por ferramentas de IA."
        badge="SEGURANÇA & AUDITORIA"
      />

      <FinalCTASection />
    </div>
  );
}
