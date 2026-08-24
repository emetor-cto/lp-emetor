"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaqItem } from "@/data/faqData";

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export function FaqSection({
  faqs,
  title = "Perguntas Frequentes",
  subtitle = "Respostas diretas sobre como a Emetor opera, cobra e entrega resultados.",
  badge = "AEO & DÚVIDAS",
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full bg-neutral-50/70 border-t border-neutral-100 py-16 sm:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#b9915e]/40" />
            <span className="text-[#b9915e] font-bold uppercase tracking-[0.2em] text-xs">
              {badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-3">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>

        <div className="border-t border-b border-neutral-200/80 divide-y divide-neutral-200/80">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors duration-200">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 cursor-pointer group focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#b9915e] transition-colors duration-200 leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-light text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0 leading-none select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm sm:text-base text-neutral-600 leading-relaxed font-medium max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
