"use client"

import { useState } from "react"
import { Navbar } from "../../components/navbar"
import  Footer  from "../../view/Home/Footer"
import  WhatsAppButton  from "../../components/WhatsappFixed"
import { Button } from "../../components/ui/button"
import { ArrowLeft, ArrowRight, Sparkles, ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import carrro_sucio_2 from "../../../public/img/carro-sucio-2.jpeg"
import carrro_limpio_2 from "../../../public/img/carro-limpio-2.jpeg"
import carrro_sucio_1 from "../../../public/img/carro-sucio-1.jpeg"
import carrro_limpio_1 from "../../../public/img/carro-limpio-1.jpeg"
const galleryItems = [
  {
    id: 1,
    title: "SUV 4X4",
    description: "Lavado express con encerado",
    service: "Completo",
    beforeImage: carrro_sucio_1,
    afterImage: carrro_limpio_1,
  },
  {
    id: 2,
    title: "SUV mediano",
    description: "Limpieza completa interior y exterior",
    service: "Completo",
    beforeImage: carrro_sucio_2,
    afterImage: carrro_limpio_2,
  },


]

function BeforeAfterCard({ item }: { item: (typeof galleryItems)[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(5, Math.min(95, x)))
  }

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl  transition-all duration-500">
      {/* Image Container with Slider */}
      <div
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (isDragging) {
            handleMove(e.clientX, e.currentTarget.getBoundingClientRect())
          }
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0]
          handleMove(touch.clientX, e.currentTarget.getBoundingClientRect())
        }}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={item.beforeImage || "/placeholder.svg"}
            alt={`${item.title} antes del lavado`}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          {/* Dirty overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* After Image (Overlay with clip) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.afterImage || "/placeholder.svg"}
            alt={`${item.title} después del lavado`}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          {/* Shine overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-primary">
            <ArrowLeft className="h-4 w-4 text-secondary" />
            <ArrowRight className="h-4 w-4 text-secondary" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          ANTES
        </div>
        <div className="absolute bottom-4 right-4 bg-cyan-500 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          DESPUÉS
        </div>

        {/* Instruction hint */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Arrastra para comparar
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            item.service === "Premium" 
              ? "bg-cyan-500 text-primary"
              : item.service === "Completo"
              ? "bg-gray-400 text-white"
              : "bg-muted text-muted-foreground"
          }`}>
            {item.service}
          </span>
        </div>

        {/* Progress indicator */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Transformación</span>
            <span className="text-primary font-semibold">100%</span>
          </div>
          <div className="h-2 bg-sky-300 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 group-hover:animate-pulse" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[#03192E] text-white min-h-screen flex items-center
 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/40 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl" />
  </div>

  <div className="container relative mx-auto px-4">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
    >
      <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      <span>Volver al inicio</span>
    </Link>

    <div className="max-w-3xl space-y-6">
      <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
        <Sparkles className="h-4 w-4" />
        Resultados reales
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Galería de <span className="text-blue-400">Transformaciones</span>
      </h1>

      <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
        Desliza sobre cada imagen para ver la increíble transformación. Cada vehículo cuenta una historia de
        cuidado y dedicación profesional.
      </p>

      <div className="flex items-center gap-6 pt-4">
        <div className="text-center">
          {/* <p className="text-3xl font-bold text-blue-400">500+</p>
          <p className="text-sm text-white/60">Carros lavados</p> */}
        </div>
        {/* <div className="w-px h-12 bg-white/20" /> */}
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">100%</p>
          <p className="text-sm text-white/60">Satisfacción</p>
        </div>
        <div className="w-px h-12 bg-white/20" />
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">5.0</p>
          <p className="text-sm text-white/60">Calificación</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BeforeAfterCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¿Quieres que tu carro luzca así?
            </h2>
            <p className="text-lg text-gray-500">
              Agenda tu lavado ahora y obtén resultados profesionales garantizados
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-cyan-500 text-white font-bold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/#servicios">Reservar mi lavado</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
