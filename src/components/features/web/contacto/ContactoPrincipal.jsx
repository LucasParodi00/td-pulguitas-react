import { MapPinned } from "lucide-react"


export const ContactoPrincipal = () => {
    <div>
        <ItemContacto
            texto="Corrientes - Capital"
            icono={<MapPinned />}
        />
    </div>
}


const ItemContacto = ({ icono = '', texto = '' }) => {
    return (
        <div>
            {icono}
            {texto}
        </div>
    )
}