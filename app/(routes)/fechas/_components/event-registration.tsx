'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"

// Tipo para los datos de la sesión
type SessionData = {
  id: number
  date: string
  day: string
  month: string
  title: string
  time: string
  location: string
  department: string
}

// Colores asociados a cada mes
const monthColors = {
  SEP: "bg-red-100",
  OCT: "bg-orange-100",
  NOV: "bg-yellow-100",
  DEC: "bg-green-100"
}

// Datos de ejemplo para las sesiones
const sessions: SessionData[] = [
  // Septiembre
  {
    id: 1,
    date: "15",
    day: "FRIDAY",
    month: "SEP",
    title: "Autumn Festival",
    time: "14:00 - 18:00",
    location: "Central Park, Dubai",
    department: "Community Events",
  },
  {
    id: 2,
    date: "22",
    day: "FRIDAY",
    month: "SEP",
    title: "Tech Meetup",
    time: "10:00 - 14:00",
    location: "Dubai Internet City",
    department: "IT Department",
  },
  {
    id: 3,
    date: "29",
    day: "FRIDAY",
    month: "SEP",
    title: "Charity Run",
    time: "07:00 - 11:00",
    location: "Jumeirah Beach",
    department: "CSR Department",
  },
  // Octubre
  {
    id: 4,
    date: "7",
    day: "SATURDAY",
    month: "OCT",
    title: "Art Exhibition",
    time: "11:00 - 20:00",
    location: "Dubai Mall",
    department: "Cultural Affairs",
  },
  {
    id: 5,
    date: "14",
    day: "SATURDAY",
    month: "OCT",
    title: "Food Festival",
    time: "12:00 - 22:00",
    location: "Zabeel Park",
    department: "Tourism Board",
  },
  {
    id: 6,
    date: "21",
    day: "SATURDAY",
    month: "OCT",
    title: "Business Conference",
    time: "09:00 - 17:00",
    location: "World Trade Centre",
    department: "Chamber of Commerce",
  },
  // Noviembre
  {
    id: 7,
    date: "4",
    day: "SATURDAY",
    month: "NOV",
    title: "National Day Parade",
    time: "16:00 - 20:00",
    location: "Downtown Dubai",
    department: "Government Affairs",
  },
  {
    id: 8,
    date: "11",
    day: "SATURDAY",
    month: "NOV",
    title: "Science Fair",
    time: "10:00 - 16:00",
    location: "Dubai Science Park",
    department: "Education Department",
  },
  {
    id: 9,
    date: "18",
    day: "SATURDAY",
    month: "NOV",
    title: "Music Festival",
    time: "18:00 - 00:00",
    location: "Dubai Media City Amphitheatre",
    department: "Arts & Culture",
  },
  // Diciembre
  {
    id: 10,
    date: "2",
    day: "SATURDAY",
    month: "DEC",
    title: "Winter Market",
    time: "10:00 - 22:00",
    location: "Madinat Jumeirah",
    department: "Tourism Board",
  },
  {
    id: 11,
    date: "9",
    day: "SATURDAY",
    month: "DEC",
    title: "Tech Conference",
    time: "09:00 - 18:00",
    location: "Dubai World Trade Centre",
    department: "IT Department",
  },
  {
    id: 12,
    date: "16",
    day: "SATURDAY",
    month: "DEC",
    title: "New Year's Gala",
    time: "20:00 - 02:00",
    location: "Burj Al Arab",
    department: "Events Management",
  },
]

export default function Events() {
  const [selectedSession, setSelectedSession] = useState<SessionData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, session: selectedSession }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsModalOpen(false)
      reset()
      alert("Registro exitoso!")
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      alert("Hubo un error al enviar el formulario. Por favor, intente de nuevo.")
    }
  }

  // Agrupar sesiones por mes
  const sessionsByMonth = sessions.reduce((acc, session) => {
    if (!acc[session.month]) {
      acc[session.month] = []
    }
    acc[session.month].push(session)
    return acc
  }, {} as Record<string, SessionData[]>)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sesiones Disponibles</h1>
      {Object.entries(sessionsByMonth).map(([month, monthSessions]) => (
        <div key={month} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{month}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthSessions.map((session) => (
              <Card 
                key={session.id} 
                className={`cursor-pointer hover:shadow-lg transition-shadow ${monthColors[session.month as keyof typeof monthColors]}`}
                onClick={() => {
                  setSelectedSession(session)
                  setIsModalOpen(true)
                }}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-4xl font-bold">{session.date}</p>
                      <p className="text-sm">{session.day}</p>
                      <p className="text-sm">{session.month}</p>
                    </div>
                    <div className="text-right">
                      <h2 className="font-semibold">{session.title}</h2>
                      <p className="text-sm flex items-center justify-end"><ClockIcon className="w-4 h-4 mr-1" /> {session.time}</p>
                      <p className="text-sm flex items-center justify-end"><MapPinIcon className="w-4 h-4 mr-1" /> {session.location}</p>
                      <p className="text-sm flex items-center justify-end"><UsersIcon className="w-4 h-4 mr-1" /> {session.department}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedSession?.title}</DialogTitle>
            <DialogDescription>
              Complete el formulario para registrarse en esta sesión.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  {...register("name", { required: "Este campo es requerido" })}
                />
                {errors.name && <p className="text-red-500 text-sm col-span-3 col-start-2">{errors.name.message as string}</p>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Correo
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="col-span-3"
                  {...register("email", { 
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo electrónico inválido"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm col-span-3 col-start-2">{errors.email.message as string}</p>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  className="col-span-3"
                  {...register("phone", { required: "Este campo es requerido" })}
                />
                {errors.phone && <p className="text-red-500 text-sm col-span-3 col-start-2">{errors.phone.message as string}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Registrarse</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}