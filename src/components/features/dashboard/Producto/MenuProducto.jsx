import { ClipboardList } from "lucide-react"
import { Plus } from "lucide-react"
import { BtnMenuDashboard } from "../../../common/button/BtnMenuDashboard"

export const MenuProducto = () => {
    return (
        <div className="grid grid-cols-4 gap-2 h-24 py-2 mb-2">
            <BtnMenuDashboard
                texto="Lista"
                referencia="/dashboard/productos"
                icono={<ClipboardList size={32} />}
                style={'col-span-2'}
            />
            <BtnMenuDashboard
                texto="Nuevo"
                referencia="/dashboard/productos/nuevo"
                icono={<Plus size={32} />}
                style={'col-span-2'}
            />
        </div>
    )
}