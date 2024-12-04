import { Route, Routes } from "react-router-dom"
import { MenuDashboardPage } from "../pages/dashboard/Menu/MenuDashboardPage"
import { LayaoutDashboard } from "../components/layout/DashboardLayaout"
import { NavbarDashboardPage } from "../pages/dashboard/Navbar/NavbarDashboardPage"
import { MenuProductoPage } from "../pages/dashboard/producto/MenuProductoPage"
import { CategoriaPage } from "../pages/dashboard/categoria/CategoriaPage"



export const DashboardRouter = () => {
    return (
        <LayaoutDashboard>
            <NavbarDashboardPage />
            <div className="col-span-9">
                <Routes>
                    <Route path="productos/*" element={<MenuProductoPage />} />
                    <Route path="categorias/*" element={<CategoriaPage />} />
                    <Route path="/" element={<MenuDashboardPage />} />
                </Routes>
            </div>
        </LayaoutDashboard>
    )
}