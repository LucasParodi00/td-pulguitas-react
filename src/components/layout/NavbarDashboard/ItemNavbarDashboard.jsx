import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { MousePointerClick } from "lucide-react"



export const ItemNavbarDashboard = ({ texto = 'Btn Navbar', referencia = '#', icono = <MousePointerClick />, style = 'bg-red-400' }) => {
    return (
        <Link
            className={`flex gap-3  w-full py-6 pl-2 text-black hover:bg-green-200 duration-500 ${style}`}
            to={referencia}
        >
            {icono}
            {texto}
        </Link>
    )
}



ItemNavbarDashboard.propTypes = {
    referencia: PropTypes.string,
    icono: PropTypes.node,
    texto: PropTypes.string
}
