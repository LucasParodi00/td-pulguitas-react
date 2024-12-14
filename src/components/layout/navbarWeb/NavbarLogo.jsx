import { Link } from "react-router-dom"




export const NavbarLogo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img
                    src="/logo.png"
                    alt=""
                    className="w-full object-contain h-16"
                />
            </Link>
        </div>
    )
}