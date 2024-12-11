import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/web/HomePage"
import { NavbarWeb } from "../components/layout/navbarWeb/NavbarWeb"




export const WebRouter = () => {
    return (
        <>
            <NavbarWeb />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}