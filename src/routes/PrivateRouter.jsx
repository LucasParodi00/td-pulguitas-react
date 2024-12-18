import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";






export const PrivateRouters = ({ children }) => {
    const { logged, user } = useContext(AuthContext);
    return (logged && user?.id_rol == 2)
        ? children
        : <Navigate to={'/'} />
}