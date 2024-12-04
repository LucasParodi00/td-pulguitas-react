import { Blocks } from "lucide-react"
import { BigButton } from "../../common/button/BigButton"
import { User } from "lucide-react"
import { BadgeDollarSign } from "lucide-react"


export const MenuDashboard = () => {
    return (
        <div className="grid sm:grid-cols-3 h-full gap-4">
            <BigButton
                icono={<Blocks className="icon-size" />}
                referencia="productos"
                texto="Productos"
            />
            <BigButton
                icono={<User className="icon-size" />}
                referencia="usuarios"
                texto="Usuarios"
            />
            <BigButton
                icono={<BadgeDollarSign className="icon-size" />}
                texto="Ventas"
            />
        </div>
    )
}