import '../../App.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero.tsx'
import HowItWorks from './How-It-Works.tsx'
import SelectedService from './SelectedService.tsx'
import Footer from './Footer.tsx'
import WhatsappFixed from '../../components/WhatsappFixed'
import { Contact } from './Contact.tsx'
import { Navbar } from '../../components/navbar.tsx'
function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (

    <>
        <Navbar />
      <Hero />
      <SelectedService />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsappFixed />
    </>
  )
}

export default Home
