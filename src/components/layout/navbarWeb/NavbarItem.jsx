import { Route } from "lucide-react"
import { Link } from "react-router-dom"




export const NavbarItem = ({ nombre = 'Nombre', referencia = '#', icono = <Route />, onClose = null }) => {
    return (
        <Link
            onClick={onClose}
            to={referencia}
            className="py-4 w-full text-w lg:px-4 lg:rounded-full text-white hover:text-orange-500 duration-500"
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