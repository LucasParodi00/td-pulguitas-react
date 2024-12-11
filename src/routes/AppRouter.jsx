import { Route, Router, Routes } from "react-router-dom"
import { DashboardRouter } from "./DashboardRouter"
import { WebRouter } from "./WebRouter"




export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard/*" element={<DashboardRouter />} />
            <Route path="/*" element={<WebRouter />} />
        </Routes>
    )
}