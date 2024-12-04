import { Route, Router, Routes } from "react-router-dom"
import { DashboardRouter } from "./DashboardRouter"




export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard/*" element={<DashboardRouter />} />
        </Routes>
    )
}