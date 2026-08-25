"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plain, CheckRead, Restart } from "@solar-icons/react"
import { cn } from "@/utils/utils"
import { submitDiagnostico } from "@/lib/submit-diagnostico"
import { isValidEmail } from "@/lib/validate-email"

import logoIcon from "@/assets/logo-icon-darkmode.png"

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
}

const botQuestions = [
  "Hoje, quantos sistemas, planilhas e controles paralelos vocês usam para tocar a operação, e onde a informação mais se perde, duplica ou precisa ser recadastrada?",
  "Se você olhar para a operação de ponta a ponta, qual processo hoje mais consome tempo do time e mais depende de trabalho manual, conferência ou correção?",
  "Quando você precisa tomar uma decisão rápida, em quanto tempo consegue acessar um dado confiável? E você confia 100% nas planilhas e relatórios que recebe hoje?",
  "Quais áreas mais sofrem com falha de comunicação ou falta de integração entre sistemas e equipes? O que costuma dar errado na prática?",
  "Se nada mudar nos próximos 6 meses, qual é o custo real disso para a empresa e para você como dono: em atraso, erro, dinheiro, cliente perdido, desgaste do time e tempo preso no operacional?",
  "Perfeito! Para que possamos te enviar uma análise detalhada desse cenário, qual é o seu melhor e-mail de contato?",
]

const quickSuggestions: Record<number, string[]> = {
  1: ["Mais de 5 planilhas e sistemas paralelos", "Falta de integração entre ERP e CRM", "Cadastros duplicados e 100% manuais"],
  2: ["Emissão de relatórios e faturamento", "Conferência manual de pedidos e estoques", "Acompanhamento diário de tarefas"],
  3: ["Demoramos dias para consolidar relatórios", "Dados desatualizados e dependem de conferência", "Decisões baseadas em estimativas"],
  4: ["Falta de integração entre Vendas e Operação", "Desalinhamento entre Financeiro e Projetos", "Gargalos na passagem de bastão"],
  5: ["Perda de margem e dinheiro por ineficiência", "Atraso nas entregas e insatisfação de clientes", "Dono preso no operacional sem tempo para crescer"],
}

const STORAGE_KEY = "emetor_diagnosis_state"

export function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", text: "Olá! Para iniciarmos o diagnóstico, qual o nome da sua empresa?", sender: "bot" }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setMessages(parsed.messages)
        setQuestionIndex(parsed.questionIndex)
        setIsFinished(parsed.isFinished)
      } catch (e) {
        console.error("Error loading saved state:", e)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        messages,
        questionIndex,
        isFinished
      }))
    }
  }, [messages, questionIndex, isFinished, isLoaded])

  const scrollToBottom = () => {
    const container = document.getElementById("diagnostico-scroll-container")
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" })
    } else {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 50)
    return () => clearTimeout(timer)
  }, [messages, isTyping])

  const handleReset = () => {
    if (confirm("Deseja reiniciar o diagnóstico? Todas as respostas atuais serão perdidas.")) {
      localStorage.removeItem(STORAGE_KEY)
      setMessages([{ id: "init", text: "Olá! Para iniciarmos o diagnóstico, qual o nome da sua empresa?", sender: "bot" }])
      setQuestionIndex(0)
      setIsFinished(false)
      setSubmitError(null)
      setInput("")
    }
  }

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isTyping || isFinished) return

    const currentAnswer = input.trim()

    if (questionIndex >= botQuestions.length) {
      if (!isValidEmail(currentAnswer)) {
        setMessages(prev => [
          ...prev,
          { id: Date.now().toString(), text: currentAnswer, sender: "user" }
        ])
        setInput("")
        setIsTyping(true)
        setSubmitError(null)

        setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              text: "O e-mail informado parece inválido. Por favor, informe um e-mail de contato válido (exemplo: nome@empresa.com.br).",
              sender: "bot",
            }
          ])
        }, 800)
        return
      }

      const userMsg: Message = { id: Date.now().toString(), text: currentAnswer, sender: "user" }
      setMessages(prev => [...prev, userMsg])
      setInput("")
      setIsTyping(true)
      setSubmitError(null)

      const userAnswers = [...messages.filter(m => m.sender === "user"), userMsg]
      const empresa = userAnswers[0]?.text ?? ""
      const email = currentAnswer
      const respostas = botQuestions.slice(0, -1).map((pergunta, index) => ({
        pergunta,
        resposta: userAnswers[index + 1]?.text ?? "",
      }))

      try {
        await submitDiagnostico({
          empresa,
          email,
          respostas,
          metadata: {
            origem: "lp_diagnostico",
            data_resposta: new Date().toISOString(),
          },
        })

        setIsFinished(true)
        setMessages(prev => [
          ...prev,
          {
            id: "final",
            text: "Obrigado pelas informações! Nossa equipe de especialistas já recebeu seu diagnóstico e entrará em contato em breve através do e-mail informado.",
            sender: "bot",
          },
        ])
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Não foi possível enviar o diagnóstico. Tente novamente.",
        )
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 2).toString(),
            text: "Por favor, verifique se o e-mail está correto e digite-o novamente para reenviar.",
            sender: "bot",
          }
        ])
      } finally {
        setIsTyping(false)
      }
      return
    }

    const userMsg: Message = { id: Date.now().toString(), text: currentAnswer, sender: "user" }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), text: botQuestions[questionIndex], sender: "bot" }
      ])
      setQuestionIndex(prev => prev + 1)
    }, 1200)
  }

  if (!isLoaded) return null

  const currentSuggestions = quickSuggestions[questionIndex] || []

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto h-auto relative bg-white px-2 sm:px-4">
      <div className="flex-1 space-y-6 py-6">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "w-full flex",
                msg.sender === "bot" ? "justify-start" : "justify-end"
              )}
            >
              <div className={cn(
                "max-w-[85%] flex gap-4 items-start",
                "py-2 px-1"
              )}>
                {msg.sender === "bot" && (
                  <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm overflow-hidden p-1.5">
                    <Image
                      src={logoIcon}
                      alt="Emetor"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                )}

                <div className={cn(
                  "text-[16px] md:text-[18px] leading-[1.6] whitespace-pre-wrap pt-2",
                  msg.sender === "bot" ? "text-neutral-800" : "text-neutral-700 text-right font-medium"
                )}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="w-full flex justify-start">
            <div className="py-2 px-1 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm overflow-hidden p-1.5">
                <Image
                  src={logoIcon}
                  alt="Emetor"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-1 pt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}

        {submitError && !isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-2 py-4 text-center"
          >
            <p className="text-sm font-semibold text-red-600">{submitError}</p>
            <p className="text-xs text-neutral-500">Verifique o e-mail informado e tente enviar novamente.</p>
          </motion.div>
        )}

        {isFinished && !isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-8"
          >
            <div className="flex items-center gap-2 text-[#b9915e] font-bold text-base">
              <CheckRead size={22} />
              Diagnóstico enviado com sucesso!
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-neutral-400 hover:text-neutral-700 font-semibold flex items-center gap-1.5 transition-colors px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm hover:shadow"
            >
              <Restart size={14} />
              Iniciar novo diagnóstico
            </button>
          </motion.div>
        )}

        <div ref={messagesEndRef} className="h-44" />
      </div>

      {!isFinished && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent pt-10 pb-6 px-4 z-30 pointer-events-auto">
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {currentSuggestions.length > 0 && !isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center justify-center gap-2 px-1"
              >
                {currentSuggestions.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInput(chip)}
                    className="px-3.5 py-1.5 rounded-full border border-neutral-200/90 bg-white/90 backdrop-blur-md text-xs font-semibold text-neutral-600 hover:border-[#b9915e] hover:text-[#b9915e] hover:bg-white transition-all duration-300 shadow-sm hover:shadow"
                  >
                    {chip}
                  </button>
                ))}
              </motion.div>
            )}

            <form
              onSubmit={handleSend}
              className="relative w-full bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] transition-all duration-300 focus-within:border-[#b9915e]/50 focus-within:shadow-[0_20px_50px_rgba(185,145,94,0.12)] p-4 flex flex-col gap-2.5"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                disabled={isTyping}
                placeholder="Descreva seu cenário ou selecione uma opção acima..."
                rows={2}
                className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[16px] text-neutral-900 placeholder:text-neutral-400/90 resize-none leading-relaxed px-1 pt-0.5"
              />

              <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  {questionIndex > 0 && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-[11px] font-semibold text-neutral-400 hover:text-neutral-700 flex items-center gap-1 transition-colors px-2 py-1"
                    >
                      <Restart size={12} />
                      Reiniciar
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-[#0A0A0A] hover:bg-[#b9915e] rounded-full flex items-center justify-center text-white disabled:opacity-20 disabled:grayscale transition-all duration-300 shadow-md hover:scale-105 shrink-0"
                >
                  <Plain className="w-5 h-5 -mr-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
