import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/web/HomePage"
import { NavbarWeb } from "../components/layout/navbarWeb/NavbarWeb"
import { Footer } from "../components/layout/footer/Footer"
import { ProductosWebPage } from "../pages/web/ProductosPage"
import { NosotrosPage } from "../pages/web/NosotrosPage"
import { CartRouters } from "./CartRouter"
import { CarritoPage } from "../pages/web/CarritoPage"
import { ContactoPage } from "../pages/web/ContactoPage"




export const WebRouter = () => {
    return (
        <>
            <NavbarWeb />
            <Routes>
                <Route path="/productos/*" element={<ProductosWebPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/inicio" element={<HomePage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="/carrito/*" element={
                    <CartRouters>
                        <Routes>
                            <Route path="/" element={<CarritoPage />} />
                        </Routes>
                    </CartRouters>
                } />
                <Route path="/*" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    )
}