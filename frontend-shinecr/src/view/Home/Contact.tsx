import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hola! Soy ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/50612345678?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Contáctanos</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              <CardDescription className="text-gray-500">Responderemos lo más pronto posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    className="border border-gray-300 rounded-2xl w-full p-1.5"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    type="tel"
                    className="border border-gray-300 rounded-2xl w-full p-1.5"
                    placeholder="8888-8888"
                    value={formData.phone}
                    onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    className="border border-gray-300 w-full rounded-2xl p-1.5 active:border-2 active:border-[#50c3d4]"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    value={formData.message}
                    onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="w-full rounded-full bg-[#4AB6C7] text-white font-semibold p-2 cursor-pointer hover:bg-[#50c3d4]" >
                  Enviar Mensaje
                </button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono / WhatsApp</h3>
                    <a
                      href="https://wa.me/50612345678"
                      className="text-sky-500 hover:underline text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +506 1234-5678
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                    <a href="mailto:info@lavacarexpress.com" className="text-sky-500 hover:underline text-lg">
                      info@lavacarexpress.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cobertura</h3>
                    <p className="text-gray-500">San José y alrededores</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}