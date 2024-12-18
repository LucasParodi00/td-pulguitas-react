import { Route, Router, Routes } from "react-router-dom"
import { DashboardRouter } from "./DashboardRouter"
import { WebRouter } from "./WebRouter"
import { LoginPage } from "../pages/web/LoginPage"
import { RegisterPage } from "../pages/web/RegisterPage"
import { PrivateRouters } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { CartRouters } from "./CartRouter"
import { CarritoPage } from "../pages/web/CarritoPage"




export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={
                <PublicRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/*" element={<WebRouter />} />
                    </Routes>
                </PublicRouter>
            } />

            <Route path='/dashboard/*' element={
                <PrivateRouters>
                    <Routes>
                        <Route path="/*" element={<DashboardRouter />} />
                    </Routes>
                </PrivateRouters>
            } />
        </Routes>
    )
}