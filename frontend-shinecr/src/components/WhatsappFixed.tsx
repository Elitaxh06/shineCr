// import { MessageCircle } from "lucide-react"
import { MessageCircleIcon } from "lucide-react"

export default function WhatsappFixed() {
    return (
        <button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white"
        >   
            <a href="https://wa.me/50612345678" target="_blank " rel="noreferrer" className="flex items-center justify-center h-full w-ful">
                <MessageCircleIcon className="h-8 w-8" />
            </a>
        </button>
    )
}