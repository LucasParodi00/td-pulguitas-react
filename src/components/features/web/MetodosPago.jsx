import { ArchiveRestore } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { CreditCard } from "lucide-react"


export const MetodosPago = () => {
    return (
        <div className="bg-gray-200 mt-10">
            <div className="grid justify-center items-center grid-rows-3 gap-2 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 max-w-[1500px] m-auto lg:grid-rows-1 lg:py-10 mb-10">
                <MetodoPagoIndividual
                    icono={<CreditCard className="h-12 w-12" />}
                    texto="Elige el medio de pago que más te convenga y dale a tu mascota lo que necesita!"
                />
                <MetodoPagoIndividual
                    icono={<ArchiveRestore className="h-12 w-12" />}
                    texto="Recoge tus pedidos sin complicaciones o consulta nuestras opciones de envío!"
                />
                <MetodoPagoIndividual
                    icono={<ShieldCheck className="h-12 w-12" />}
                    texto="Tu seguridad y la de tus compras están garantizadas. ¡Protegemos tus datos como protegemos a las mascotas!"
                    extraClass={'md:col-span-2 lg:col-span-1'}
                />
            </div>
        </div>
    )
}

const MetodoPagoIndividual = ({ icono = '', texto = '', extraClass = '' }) => {
    return (
        <div className={`grid place-content-center place-items-center border-y border-gray-400 py-3 font-extralight gap-4 px-2 h-full sm:grid-cols-3 lg:border-y-0 lg:border-x lg:grid-cols-5 lg:text-sm ${extraClass}`}>
            <p className="text-verde-suave">{icono}</p>
            <p className="sm:col-span-2 lg:col-span-4">{texto}</p>
        </div>
    )
}