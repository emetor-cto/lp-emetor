"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plain, CheckRead, Restart } from "@solar-icons/react"
import { cn } from "@/utils/utils"
import { submitDiagnostico } from "@/lib/submit-diagnostico"

import logoIcon from "@/assets/logo-icon-darkmode.png"

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
}

const botQuestions = [
  "Hoje, quantos sistemas, planilhas e controles paralelos vocês usam para tocar a operação — e onde a informação mais se perde, duplica ou precisa ser recadastrada?",
  "Se você olhar para a operação de ponta a ponta, qual processo hoje mais consome tempo do time e mais depende de trabalho manual, conferência ou correção?",
  "Quando você precisa tomar uma decisão rápida, em quanto tempo consegue acessar um dado confiável? E você confia 100% nas planilhas e relatórios que recebe hoje?",
  "Quais áreas mais sofrem com falha de comunicação ou falta de integração entre sistemas e equipes? O que costuma dar errado na prática?",
  "Se nada mudar nos próximos 6 meses, qual é o custo real disso para a empresa e para você como dono — em atraso, erro, dinheiro, cliente perdido, desgaste do time e tempo preso no operacional?",
  "Perfeito! Para que possamos te enviar uma análise detalhada desse cenário, qual é o seu melhor e-mail de contato?",
]

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

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: "user" }
    setMessages(prev => [...prev, userMsg])
    const currentAnswer = input
    setInput("")

    if (questionIndex >= botQuestions.length) {
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
      } finally {
        setIsTyping(false)
      }
      return
    }

    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), text: botQuestions[questionIndex], sender: "bot" }
      ])
      setQuestionIndex(prev => prev + 1)
    }, 1500)
  }

  if (!isLoaded) return null

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto h-auto relative bg-white px-4">
      <div className="flex-1 space-y-4 py-8">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm overflow-hidden p-1.5">
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
                  "text-[16px] md:text-[18px] leading-[1.6] whitespace-pre-wrap",
                  msg.sender === "bot" ? "text-neutral-800 pt-2" : "text-neutral-700 text-right pt-2"
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
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm overflow-hidden p-1.5">
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
            <p className="text-sm text-red-600">{submitError}</p>
            <p className="text-xs text-neutral-500">Verifique o e-mail informado e tente enviar novamente.</p>
          </motion.div>
        )}

        {isFinished && !isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-8"
          >
            <div className="flex items-center gap-2 text-primary font-medium">
              <CheckRead size={20} />
              Diagnóstico enviado com sucesso!
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-neutral-400 hover:text-neutral-600 flex items-center gap-1 transition-colors"
            >
              <Restart size={14} />
              Iniciar novo diagnóstico
            </button>
          </motion.div>
        )}

        <div ref={messagesEndRef} className="h-40" />
      </div>

      {!isFinished && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-10 pb-8 px-4 z-30">
          <div className="max-w-2xl mx-auto flex flex-col gap-2">
            {questionIndex > 0 && (
              <button
                onClick={handleReset}
                className="self-center text-[10px] uppercase tracking-widest text-neutral-400 hover:text-neutral-600 flex items-center gap-1 transition-colors mb-2"
              >
                <Restart size={12} />
                Reiniciar
              </button>
            )}
            <form
              onSubmit={handleSend}
              className="relative bg-white rounded-2xl border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-1.5 transition-all focus-within:border-primary/30"
            >
              <div className="flex items-center gap-2 pl-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  placeholder="Responda aqui..."
                  className="flex-1 bg-transparent border-none outline-none text-[16px] text-neutral-900 placeholder:text-neutral-400 py-3"
                  autoFocus
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white disabled:opacity-20 disabled:grayscale transition-all hover:bg-primary-hover shadow-sm"
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
