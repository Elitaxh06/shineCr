import { Card, CardContent } from "./ui/Card"
import { Info } from "lucide-react"
export default function PolicityPay() {
    return (
        <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-green-300 bg-[#ECF8F7]">
            <CardContent className="flex items-start gap-3 pt-6">
              <Info className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Política de Pago</p>
                <p className="text-sm text-slate-600">
                  Se requiere un adelanto del 50% del costo total del servicio al momento de la reserva. El saldo
                  restante se paga al finalizar el lavado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
    )
}