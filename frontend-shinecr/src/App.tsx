import './App.css'
import Hero from './view/Home/Hero'
import HowItWorks from './view/Home/How-It-Works.tsx'
import SelectedService from './view/Home/SelectedService.tsx'
import Footer from './view/Home/Footer.tsx'
import WhatsappFixed from './components/WhatsappFixed'
import { Contact } from './view/Home/Contact.tsx'
function App() {
  
  return (
    <>
      <Hero />
      <SelectedService />
      <HowItWorks />
      <Contact />
      <Footer />

      <WhatsappFixed />
    </>
  )
}

export default App
