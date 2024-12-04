import { MousePointerClick } from "lucide-react"
import { Link } from "react-router-dom"


export const BtnMenuDashboard = ({ referencia = '#', icono = <MousePointerClick className="icon-size" />, texto = 'Nuevo Boton', style = '' }) => {

    return (
        <Link
            to={referencia}
            className={`bg-naranja-vivo flex gap-4 items-center justify-center lg:text-xl ${style}`}
        >
            {icono}
            {texto}
        </Link>
    )
}