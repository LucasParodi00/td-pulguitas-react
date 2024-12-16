import { House } from "lucide-react"
import { NavbarContent } from "./NavbarContent"
import { NavbarItem } from "./NavbarItem"
import { Box } from "lucide-react"
import { Building2 } from "lucide-react"
import { MapPinHouse } from "lucide-react"
import { Contact } from "lucide-react"

export const NavbarWeb = () => {
    return (
        <NavbarContent>
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