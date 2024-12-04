import { Route, Routes } from "react-router-dom"
import { MenuProducto } from "../../../components/features/dashboard/Producto/MenuProducto"
import { NuevoProductoPage } from "./NuevoProductoPage"




export const MenuProductoPage = () => {
    return (
        <div>
            <MenuProducto />
            <Routes>
                <Route path="nuevo" element={<NuevoProductoPage />} />
                <Route path="lista" />
            </Routes>
        </div>
    )
}