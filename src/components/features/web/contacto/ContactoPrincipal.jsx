import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { MapPinned } from "lucide-react"
import { SubTitle } from "../../../common/texto/SubTitle"
import { ContainerWeb } from "../../../layout/ContainerWeb"


export const ContactoPrincipal = () => {
    return (
        <div className="bg-gris-suave py-10">
            <ContainerWeb>
                <SubTitle texto="Contactanos" />
                <div className="flex flex-col gap-5">
                    <ItemContacto
                        texto="Corrientes - Capital"
                        icono={<MapPinned className="text-verde-suave" />}
                    />
                    <ItemContacto
                        texto="3794 - 409720"
                        icono={<Phone className="text-verde-suave" />}
                    />
                    <ItemContacto
                        texto="pulguitas@correo.com"
                        icono={<Mail className="text-verde-suave" />}
                    />
                </div>
            </ContainerWeb>
        </div>
    )
}


const ItemContacto = ({ icono = '', texto = '' }) => {
    return (
        <div className="grid font-extralight grid-cols-6 gap-10  lg:grid-cols-2 lg:gap-96">
            <div className="col-span-3 flex justify-center lg:col-span-1 lg:justify-end">
                {icono}
            </div>
            <div className="col-span-3 lg:col-span-1">
                {texto}
            </div>
        </div>
    )
}