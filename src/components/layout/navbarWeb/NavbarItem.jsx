import { Route } from "lucide-react"
import { Link } from "react-router-dom"




export const NavbarItem = ({ nombre = 'Nombre', referencia = '#', icono = <Route /> }) => {
    return (
        <Link
            to={referencia}
            className="py-4 bg-naranja-web w-full text-w lg:px-4 lg:rounded-full hover:text-white hover:bg-navbar-web duration-500"
        >
            <div className="grid grid-cols-4 justify-center items-center lg:flex lg:gap-3">
                <div className="justify-center flex col-start-2">
                    {icono}
                </div>
                <div className="col-span-2">
                    {nombre}
                </div>
            </div>
        </Link>
    )
}