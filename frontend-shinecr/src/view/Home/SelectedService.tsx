import { useState } from "react"
import BookingCalendar from "./Booking-Calendar"
import Services from "./Services"


export default function ReservaPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <div>
      <Services setSelectedService={setSelectedService} />
      <BookingCalendar selectedService={selectedService} />
    </div>
  )
}
