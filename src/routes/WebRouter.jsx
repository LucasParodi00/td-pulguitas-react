import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/web/HomePage"
import { NavbarWeb } from "../components/layout/navbarWeb/NavbarWeb"
import { ContainerWeb } from "../components/layout/ContainerWeb"
import { Footer } from "../components/layout/footer/Footer"
import { ProductosWebPage } from "../pages/web/ProductosPage"




export const WebRouter = () => {
    return (
        <>
            <NavbarWeb />
            <Routes>
                <Route path="/productos" element={<ProductosWebPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    )
}