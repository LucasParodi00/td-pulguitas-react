import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/web/HomePage"
import { NavbarWeb } from "../components/layout/navbarWeb/NavbarWeb"
import { ContainerWeb } from "../components/layout/ContainerWeb"




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