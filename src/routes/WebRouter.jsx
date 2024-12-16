import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/web/HomePage"
import { NavbarWeb } from "../components/layout/navbarWeb/NavbarWeb"
import { ContainerWeb } from "../components/layout/ContainerWeb"
import { Footer } from "../components/layout/footer/Footer"
import { ProductosWebPage } from "../pages/web/ProductosPage"
import { NosotrosPage } from "../pages/web/NosotrosPage"




export const WebRouter = () => {
    return (
        <>
            <NavbarWeb />
            <Routes>
                <Route path="/productos/*" element={<ProductosWebPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/inicio" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    )
}