import { useEffect, useState } from "react"
import FramerMotion from "../../components/FramerMotion"
import { Droplets, Sparkles } from "lucide-react"
export default function Hero() {
   const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <FramerMotion direction="down" duration={1}>

    <section className="relative bg-[#02192F] text-white overflow-hidden h-screen">
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-lavando-coche-estacion-lavado-coches-chaleco-naranja_651396-2008.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Car wash background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/95" />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6 animate-bounce-slow">
            <Droplets className="h-12 w-12 md:h-16 md:w-16 text-cyan-500" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Lavacar Express</h1>
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-cyan-500" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            ¡Tu carro limpio sin salir de casa!
          </h2>

          <p className="text-lg md:text-xl text-secondary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Servicio profesional de lavado express a domicilio. Calidad garantizada, rapidez y comodidad para tu
            vehículo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              className="text-lg px-8 py-6 rounded-full bg-[#4AB6C7] text-primary-foreground hover:bg-primary/90 shadow-lg cursor-pointerff font-bold hover:shadow-xl transition-all hover:scale-105"
              onClick={scrollToCalendar}
              >
              Reservar lavado
            </button>
            <button
              className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary-foreground font-bold cursor-pointer hover:bg-primary/10 bg-transparent transition-all hover:scale-105"
              >
              <a href="#servicios">Ver servicios</a>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
              </FramerMotion>
  )
}
