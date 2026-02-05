"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router"
// import { usePathname } from "react-router-dom"
import {  useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Droplets, 
  Menu, 
  Home, 
  Images, 
  // Car, 
  // Users, 
  // Phone, 
} from "lucide-react"

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Galería", href: "/galeria", icon: Images },
  // { label: "Servicios", href: "/#servicios", icon: Car },
  // { label: "Equipo", href: "/#equipo", icon: Users },
  // { label: "Contacto", href: "/#contacto", icon: Phone },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-800 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Droplets className="h-8 w-8 text-cyan-500 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white">
              Shine <span className="text-cyan-500">CR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href.split("#")[0]))
              
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group border-b-2 border-transparent hover:text-white hover:border-sky-300 text-sky-300 ${
                    isActive
                      ? "text-white"
                      : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/3"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/#servicios">Reservar ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white cursor-pointer">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-slate-800 border-cyan-800 w-[300px] [&>button]:text-white [&>button]:cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2 "> 
                    {/* <Droplets className="h-6 w-6 text-cyan-500" />
                    <span className="text-lg font-bold text-white">
                      Shine CR
                    </span>  */}
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.href
                    
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/#servicios">Reservar ahora</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
