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
    <div className="flex flex-col items-center justify-center mx-auto px-4 py-12 bg-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Preguntas Frecuentes</h2>
      <div className="space-y-4 max-w-3xl w-full">
        {faqData.map((item) => (
          <FAQItem key={item.idx} item={item} />
        ))}
      </div>
    </div>
  )
}
