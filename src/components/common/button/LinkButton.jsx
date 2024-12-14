import { Link } from "react-router-dom"


export const LinkButton = ({ referencia = '#', texto = 'Button Link', icono = '', extraClass = '' }) => {
    return (
        <Link
            to={referencia}
            className={`bg-verde-suave py-3 px-6 rounded-md text-gray-800 hover:bg-navbar-web hover:text-white ${extraClass}`}
        >
            {texto}

        </Link>
    )
}