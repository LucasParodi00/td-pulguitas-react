import { House } from "lucide-react"
import { NavbarContent } from "./NavbarContent"
import { NavbarItem } from "./NavbarItem"
import { Box } from "lucide-react"
import { Building2 } from "lucide-react"
import { Contact } from "lucide-react"
import { LayoutDashboard } from "lucide-react"
import { useContext } from "react"
import { AuthContext } from "../../../auth/context/AuthContext"

export const NavbarWeb = () => {
    const { logged, user } = useContext(AuthContext);
    const userRole = user?.id_rol;
    return (
        <NavbarContent>
            {
                (logged && userRole == 2)
                    ? (<NavbarItem
                        nombre={'Dshboard'}
                        icono={<LayoutDashboard />}
                        referencia="/dashboard"
                    />)
                    : ''
            }
            <NavbarItem
                nombre={'Inicio'}
                icono={<House />}
                referencia="/"
            />
            <NavbarItem
                nombre={'Productos'}
                icono={<Box />}
                referencia="/productos"
            />
            <NavbarItem
                nombre={'Nosotros'}
                icono={<Building2 />}
                referencia="/nosotros"
            />

            <NavbarItem
                nombre={'Contacto'}
                icono={<Contact />}
            />
        </NavbarContent >
    )
}