import { Facebook, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#03172C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lavacar Express</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Tu servicio de lavado profesional a domicilio. Calidad, rapidez y comodidad garantizada.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Lunes a Sábado
                <br />
                8:00 AM - 6:00 PM
                <br />
                Domingos con cita previa
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex flex-wrap gap-3">
                <button
                //   size="icon"
                //   variant="outline"
                  className="rounded-full cursor-pointer border border-slate-500 p-1.5  hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] bg-transparent transition-all hover:scale-110"
                //   asChild
                >
                  <a
                    href="https://www.instagram.com/shinecr.lavado?igsh=MWphMDVtaWJrdXJlaQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </button>
                <button
                //   size="icon"
                //   variant="outline"
                  className="rounded-full cursor-pointer border border-slate-500 p-1.5  hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] bg-transparent transition-all hover:scale-110"
                //   asChild
                >
                  <a
                    href="https://facebook.com/lavacarexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </button>
                <button
                //   size="icon"
                //   variant="outline"
                  className="rounded-full cursor-pointer border border-slate-500 p-1.5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] bg-transparent transition-all hover:scale-110"
                //   asChild
                >
                  <a href="https://wa.me/50612345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </button>
                <button
                //   size="icon"
                //   variant="outline"
                  className="rounded-full cursor-pointer border border-slate-500 p-1.5 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] bg-transparent transition-all hover:scale-110"
                //   asChild
                >
                  <a
                    href="https://twitter.com/lavacarexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </button>
                <button
                //   size="icon"
                //   variant="outline"
                  className="rounded-full cursor-pointer border border-slate-500 p-1.5 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] bg-transparent transition-all hover:scale-110"
                //   asChild
                >
                  <a
                    href="https://youtube.com/@lavacarexpress"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </button>
              </div>
              <p className="text-sm text-secondary-foreground/60 mt-4">@lavacarexpress</p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Lavacar Express. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
