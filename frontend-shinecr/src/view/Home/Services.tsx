import { Check, Sparkles, Star, Crown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/Card"
import FramerMotion from "../../components/FramerMotion"
import Swal from "sweetalert2"
const services = [
  {
    name: "Básico",
    price: "₡7,500",
    icon: Check,
    description: "Perfecto para mantenimiento regular",
    features: [
        "Lavado exterior completo",
        "Secado manual con microfibra",
        "Limpieza de llantas y rines",
    ],
    disable: false,
    popular: false,
  },
  {
    name: "Completo",
    price: "₡10,000",
    icon: Sparkles,
    description: "Nuestro servicio más popular",
    features: [
      "Todo del paquete Básico",
      "Detalle extra de llantas",
      "Limpieza de plásticos internos",
      "Aromatizante dentro del vehículo",
      "Revisión rápida de vidrios y espejos",
      "Aspirado de asientos y alfombras (proximamente)"
    ],
    disable: false,
    popular: true,
  },
  {
    name: "Premium",
    price: "₡15,000",
    icon: Crown,
    description: "Experiencia de lujo total",
    features: [
        "Todo lo del Lavado Completo (Popular) ",
        "Encerado y pulido exterior" ,
        "Limpieza profunda de asientos y alfombras", 
        "Aspirado completo del interior" , 
        "Limpieza y protección de plásticos y paneles internos" ,
        "Tratamiento especial de llantas y neumáticos",
        "Limpieza de motor", 
        "Desinfección completa" ,
        "Aromatizante premium dentro del vehículo" ,
        "Protección UV"
    ],
    disable: true,
    popular: false,
  },
]
export default function Services() {
    const handleWhatsAppClick = (serviceName: string) => {
        const message = encodeURIComponent(`Hola! Me interesa el paquete ${serviceName}`)
        window.open(`https://wa.me/50683745485?text=${message}`, "_blank")
    }
    return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FramerMotion direction="down" duration={1.5}>

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige el paquete perfecto para tu vehículo. Todos incluyen productos premium y garantía de satisfacción.
          </p>
        </div>
        </FramerMotion>
        <FramerMotion direction="up" duration={1.5}>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.name}
                className={`relative flex flex-col ${
                  service.popular ? "border-primary shadow-lg scale-105 md:scale-110" : "border-border"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-blue-500 px-4 py-1.5 text-sm  text-white font-semibold">
                      <Star className="h-4 w-4 fill-current" />
                      Más Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{service.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <button
                    className={`w-full rounded-xl px-4 py-2
                        ${service.disable 
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                            : service.popular 
                              ? "bg-blue-600 text-white font-bold hover:bg-blue-500 cursor-pointer" 
                              : "bg-slate-100 text-black border border-slate-300 hover:bg-green-500 hover:border-none hover:text-white hover:font-semibold cursor-pointer"
                        }
                    `}
                    // disabled={service.disable}
                    onClick={() => {
                        if(!service.disable){
                            handleWhatsAppClick(service.name)
                        }else{
                            Swal.fire({
                                title: "Para su información",
                                text: "Este servicio estará disponible próximamente. ¡Gracias por su interés!",
                                icon: "info",
                                confirmButtonText: "Aceptar",
                            })
                        }
                    }}
                  >
                    {!service.disable ? `Reservar ${service.name}` : "Proximamente"}
                  </button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        </FramerMotion>
      </div>
    </section>
  )
}