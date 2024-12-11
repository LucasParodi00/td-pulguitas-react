import { Route, Routes } from "react-router-dom"
import { MenuProducto } from "../../../components/features/dashboard/Producto/MenuProducto"
import { NuevoProductoPage } from "./NuevoProductoPage"
import { ListaProductoPage } from "./ListaProductoPage"
import { VerProductoPage } from "./VerProductoPage"




export const MenuProductoPage = () => {
    return (
        <div>
            <MenuProducto />
            <Routes>
                <Route path="nuevo" element={<NuevoProductoPage />} />
                <Route path="/:id" element={<VerProductoPage />} />
                <Route path="/:id/editar" element={<NuevoProductoPage />} />
                <Route path="/" element={<ListaProductoPage />} />
            </Routes>
        </div>
    )
}