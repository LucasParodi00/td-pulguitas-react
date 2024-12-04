import { MousePointerClick } from "lucide-react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"



export const BigButton = ({ referencia = '#', icono = <MousePointerClick className="icon-size" />, texto = 'Nuevo Boton', style = '' }) => {
    return (
        <Link
            to={referencia}
            className={`bg-naranja-vivo flex flex-col items-center justify-center sm:text-xl lg:text-2xl xl:text-3xl hover:bg-body-dashboard hover:text-white duration-700 rounded-lg ${style}`}
        >
            <span>{icono}</span>
            {texto}
        </Link>
    )
}

BigButton.propTypes = {
    referencia: PropTypes.string,
    icono: PropTypes.node,
    texto: PropTypes.string
}

