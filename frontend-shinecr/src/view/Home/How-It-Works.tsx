import { MessageCircle, MapPin, Sparkles } from "lucide-react"
import FramerMotion from "../../components/FramerMotion"
export default function  HowItWorks () {
    const steps = [
    {
      number: "01",
      title: "Reserva por WhatsApp",
      description: "Agendá tu servicio por mensaje directo, correo o teléfono.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Vamos a tu ubicación",
      description: "Llegamos a donde estés, en cualquier punto de la GAM",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Devolvemos el brillo a tu auto",
      description: "Nuestro compromiso es dejar tu vehículo limpio, protegido y con un acabado profesional en cada servicio.",
      icon: Sparkles,
    },
  ]
    return(
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
              <FramerMotion direction="up" duration={1.5}>

              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">¿Cómo Funciona?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Tres simples pasos para tener tu carro impecable sin moverte de casa
                </p>
              </div>
              </FramerMotion>
              <FramerMotion direction="right" duration={1.5}>

              <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.number} className="relative">
                      {/* Connector line (hidden on mobile) */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-16 left-[40%] w-[50%]
                            md:w-[60%] md:left-[79%]
                        h-0.5 border-2 border-gray-300" />
                      )}

                      <div className="relative text-center space-y-4">
                        {/* Icon Circle */}
                        <div className="relative mx-auto w-32 h-32 rounded-full bg-card border-2 border-gray-300 flex items-center justify-center shadow-lg">
                          <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                            {step.number}
                          </div>
                          <Icon className="h-12 w-12 text-blue-500" />
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground text-pretty">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              </FramerMotion>

            </div>
        </section>
    )
}