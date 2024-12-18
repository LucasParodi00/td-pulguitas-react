import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { cartReducer } from "./cartReducer";
import { useEffect } from "react";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const token = localStorage.getItem('access_token') || null;

    return {
        logged: user ? true : false,
        user: user,
        token: token || null
    }
}

const initCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return {
        cart: cart
    }
}

export const AuthProvider = ({ children }) => {

    const [authStage, dispatch] = useReducer(authReducer, {}, init);
    const [cartStage, dispatchCart] = useReducer(cartReducer, {}, initCart);

    const login = (nombre, correo, token, id_rol, id_usuario) => {
        const user = {
            nombre,
            correo,
            id_rol,
            id_usuario
        };

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', token);

        const action = {
            type: types.login,
            payload: { user, token }
        };
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        localStorage.removeItem('cart')
        const action = {
            type: types.logout
        }

        dispatch(action);
    }

    const addCart = (producto) => {
        const action = {
            type: types.addCart,
            payload: producto
        }

        dispatchCart(action)
    }

    const removeCart = (id_producto) => {
        const action = {
            type: types.removeCart,
            payload: id_producto
        }

        dispatchCart(action)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartStage.cart));
    }, [cartStage.cart]);

    return (
        <AuthContext.Provider value={{ ...authStage, login, logout, addCart, removeCart, ...cartStage }}>
            {children}
        </AuthContext.Provider>
    )
}