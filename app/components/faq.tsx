'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'

// Definición del tipo para los elementos FAQ
type FAQItem = {
  idx: number
  question: string
  answer: string
}

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-color3bs py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-amber-400">{item.question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-400 whitespace-pre-line"
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [faqData, setFaqData] = useState<FAQItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      setFaqData(data)
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto px-4 py-12 bg-zinc-900">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-white text-[14px] font-medium lg:text-base">
          Preguntas frecuentes
        </h3>
        <h1 className="py-4 text-2xl font-medium text-amber-400 lg:text-[42px] lg:leading-[58px]">
        Conviertete en facilitador de la metodología Not A game
        </h1>
        <p className="text-slate-400 pb-[24px]">
        Ya seas un Consultor, Formador, Relator o líder de equipo en tu organización, te responemos algunas dudas de porque debes transformarte en un facilitador certificado.
        </p>
      </div>
      <div className="lg:w-2/3 space-y-4 max-w-3xl w-full">
        {faqData.map((item) => (
          <FAQItem key={item.idx} item={item} />
        ))}
      </div>
    </div>
  )
}
