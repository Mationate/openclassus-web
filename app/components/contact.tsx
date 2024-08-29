import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSuccess(true)
      toast.success("Mensaje enviado con éxito")
    } catch (err) {
      setError((err as Error).message)
      toast.error("Error al mandar mensaje, inténtalo denuevo")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto p-16 bg-zinc-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">¿Quieres contactarnos?</h2>
          <p className="mb-4">Escríbenos a hola@example.com o déjanos tus datos</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
          />
          <Textarea
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 min-h-[150px]"
          />
          <div className="flex items-center space-x-2">
            <label htmlFor="consent" className="text-sm">
              Al completar este formulario y enviar tu información, nos estás otorgando permiso para enviarte un correo electrónico.
            </label>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </Button>
        </form>
      </div>
      {success && (
        <p className="mt-4 text-sm text-green-400 text-center">
          ¡Mensaje enviado con éxito!
        </p>
      )}
      {error && (
        <p className="mt-4 text-sm text-red-400 text-center">
          {error}
        </p>
      )}
    </div>
  )
}