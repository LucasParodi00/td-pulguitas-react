import { LogIn } from "lucide-react"
import { useContext } from "react"
import { AuthContext } from "../../../auth/context/AuthContext"
import { useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"


export const NavbarSesion = () => {

    const { logged, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSesion = () => {
        if (logged) {
            logout();
            navigate('/usuario')
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="py-2 text-white flex gap-2 justify-center items-center w-full lg:bg-transparent">
            {user?.nombre}
            {
                <button
                    className="hover:text-azul-cielo"
                    onClick={handleSesion}
                >
                    {logged ? <LogOut /> : <LogIn />}
                </button>
            }
        </div >
    )
}