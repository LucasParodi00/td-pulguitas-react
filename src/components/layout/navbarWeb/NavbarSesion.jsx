import { LogIn } from "lucide-react"
import { LogOut } from "lucide-react"


const auth = {
    nombre: 'Lucas Parodi',
    logged: true
}

export const NavbarSesion = () => {
    return (
        <div className="bg-[#274B68] py-2 text-white flex gap-2 justify-center items-center w-full lg:bg-transparent">
            {auth.nombre}
            {

                <button
                    className="hover:text-azul-cielo"
                >
                    {auth.logged ? <LogOut /> : <LogIn />}
                </button>
            }
        </div>
    )
}