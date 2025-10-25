import './App.css'
import Hero from './view/Home/Hero'
import HowItWorks from './view/Home/How-It-Works.tsx'
import Services from './view/Home/Services.tsx'
import BookingCalendar from './view/Home/Booking-Calendar.tsx'
import Footer from './view/Home/Footer.tsx'
import WhatsappFixed from './components/WhatsappFixed'
import { Contact } from './view/Home/Contact.tsx'
function App() {
  
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <BookingCalendar />
      <Contact />
      <Footer />

      <WhatsappFixed />
    </>
  )
}

export default App
