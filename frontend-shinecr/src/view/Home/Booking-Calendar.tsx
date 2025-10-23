"use client"
import { useState } from "react"
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card"
import { MessageCircle, Mail, Calendar, Clock } from "lucide-react"
import FramerMotion from "../../components/FramerMotion"

const TIME_SLOTS = [
  { id: "morning-1", time: "8:00 AM", label: "8:00 AM" },
  { id: "morning-2", time: "9:00 AM", label: "9:00 AM" },
  { id: "morning-3", time: "10:00 AM", label: "10:00 AM" },
  { id: "morning-4", time: "11:00 AM", label: "11:00 AM" },
  { id: "afternoon-1", time: "12:00 PM", label: "12:00 PM" },
  { id: "afternoon-2", time: "1:00 PM", label: "1:00 PM" },
  { id: "afternoon-3", time: "2:00 PM", label: "2:00 PM" },
  { id: "afternoon-4", time: "3:00 PM", label: "3:00 PM" },
  { id: "evening-1", time: "4:00 PM", label: "4:00 PM" },
  { id: "evening-2", time: "5:00 PM", label: "5:00 PM" },
]

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const availableDates = getAvailableDates()

  // const formatDate = (date: Date) => {
  //   return date.toLocaleDateString("es-CR", {
  //     weekday: "short",
  //     day: "numeric",
  //     month: "short",
  //   })
  // }

  const formatFullDate = (date: Date) => {
    return date.toLocaleDateString("es-CR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const handleBooking = (method: "whatsapp" | "email") => {
    if (!selectedDate || !selectedTime) {
      alert("Por favor selecciona una fecha y hora")
      return
    }

    const bookingMessage = `Hola! Me gustaría reservar un lavado de carro:\n\nFecha: ${formatFullDate(selectedDate)}\nHora: ${selectedTime}\n\n¿Está disponible?`

    if (method === "whatsapp") {
      const message = encodeURIComponent(bookingMessage)
      window.open(`https://wa.me/50612345678?text=${message}`, "_blank")
    } else {
      const subject = encodeURIComponent("Reserva de Lavado de Carro")
      const body = encodeURIComponent(bookingMessage)
      window.location.href = `mailto:shinecr.servicio@gmail.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <section id="reservar" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <FramerMotion direction="up" duration={1}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">Reserva tu Cita</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Selecciona el día y la hora que mejor te convenga. Te confirmaremos tu reserva de inmediato.
            </p>
          </div>
        </FramerMotion>

        <div className="max-w-4xl mx-auto space-y-8 ">
          {/* Date Selection */}
          <FramerMotion direction="right" duration={1}>
            <Card className="border border-slate-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Selecciona una Fecha
              </CardTitle>
              <CardDescription>Elige el día que prefieres para tu lavado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {availableDates.map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg border border-slate-300 text-center transition-all cursor-pointer ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? "border-primary bg-blue-700 text-white font-semibold"
                        : "border-border hover:bg-slate-100 hover:border-blue-500"
                    }`}
                  >
                    <div className="text-xs font-medium capitalize">
                      {date.toLocaleDateString("es-CR", { weekday: "short" })}
                    </div>
                    <div className="text-lg font-bold mt-1">{date.getDate()}</div>
                    <div className="text-xs capitalize">{date.toLocaleDateString("es-CR", { month: "short" })}</div>
                  </button>
                ))}
              </div>
            </CardContent>
            </Card>
          </FramerMotion>
        

          {/* Time Selection */}
          <FramerMotion direction="left" duration={1}>
            <Card className="border border-slate-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Selecciona una Hora
              </CardTitle>
              <CardDescription>Escoge el horario que mejor se ajuste a tu día</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedTime(slot.time)}
                    disabled={!selectedDate}
                    className={`p-4 cursor-pointer rounded-lg border text-center transition-all  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-transparent ${
                      selectedTime === slot.time
                        ? "border-primary bg-blue-700 text-white font-semibold"
                        : "border-border hover:bg-slate-100 hover:border-blue-500"
                    }`}
                  >
                    <div className="font-semibold">{slot.label}</div>
                  </button>
                ))}
              </div>
            </CardContent>
            </Card>
          </FramerMotion>

          {/* Booking Summary */}
          
          {selectedDate && selectedTime && (
            <FramerMotion direction="up" duration={1}>
              <Card className="border border-blue-500 bg-slate-100">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Tu reserva:</div>
                    <div className="text-2xl font-bold text-card-foreground">
                      {formatFullDate(selectedDate)} a las {selectedTime}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <button  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-2 cursor-pointer font-semibold text-white" onClick={() => handleBooking("whatsapp")}>
                      <MessageCircle className="h-5 w-5" />
                      Reservar por WhatsApp
                    </button>
                    <button
                      className="w-full flex items-center justify-center gap-2 bg-transparent border rounded-xl px-4 py-2 border-slate-300 cursor-pointer font-semibold text-black hover:bg-green-500 hover:text-white"
                      onClick={() => handleBooking("email")}
                    >
                      <Mail className="h-5 w-5" />
                      Reservar por Email
                    </button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    Te confirmaremos tu reserva en menos de 30 minutos
                  </p>
                </div>
              </CardContent>
              </Card>
            </FramerMotion>
          )}
        </div>
      </div>
    </section>
  )
}
