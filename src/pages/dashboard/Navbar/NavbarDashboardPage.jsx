import { Blocks } from "lucide-react"
import { ItemNavbarDashboard } from "../../../components/layout/NavbarDashboard/ItemNavbarDashboard"
import { LogoNavbarDashboard } from "../../../components/layout/NavbarDashboard/LogoNavbarDashboard"
import { NavbarDashboard } from "../../../components/layout/NavbarDashboard/NavbarDashboard"
import { User } from "lucide-react"
import { BadgeDollarSign } from "lucide-react"
import { PawPrint } from "lucide-react"
import { ChartBarStacked } from "lucide-react"


export const NavbarDashboardPage = () => {
    return (
        <NavbarDashboard>
            <LogoNavbarDashboard />
            <div className=" flex flex-col gap-4 ">
                <ItemNavbarDashboard
                    texto="Productos"
                    referencia="/dashboard/productos"
                    icono={<Blocks />}
                />
                <ItemNavbarDashboard
                    texto="Usuarios"
                    referencia="/dashboard/ususario"
                    icono={<User />}
                />
                <ItemNavbarDashboard
                    texto="Ventas"
                    referencia="/dashboard/ventas"
                    icono={<BadgeDollarSign />}
                />
                <ItemNavbarDashboard
                    texto="Categorias"
                    referencia="/dashboard/categorias"
                    icono={<ChartBarStacked />}
                />
                <ItemNavbarDashboard
                    texto="Mascotas"
                    referencia="/dashboard/mascotas"
                    icono={<PawPrint />}
                />
            </div>
        </NavbarDashboard>
    )
}