import React, { useState, useEffect, useContext } from 'react';
import { AlignJustify, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { NavbarSesion } from "./NavbarSesion";
import { NavbarLogo } from "./NavbarLogo";
import { AuthContext } from "../../../auth/context/AuthContext";

export const NavbarContent = ({ children }) => {
    const { cart } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const handleShowNavbar = () => {
        setShow(prev => !prev);
    }

    const handleResize = () => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);

        if (!mobile) {
            setShow(true);
        }
    };

    const handleClose = () => {
        if (isMobile) {
            setShow(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const renderChildren = () => {
        return React.Children.map(children, child =>
            React.isValidElement(child)
                ? React.cloneElement(child, { onClose: handleClose })
                : child
        );
    }

    return (
        <div className="bg-navbar-web sticky top-0 right-0 left-0 z-20">
            <div className="lg:flex justify-between max-w-[1200px] m-auto items-center">
                <div className="flex p-2 justify-between">
                    <NavbarLogo />
                    <button
                        className="flex justify-center items-center p-1 lg:hidden"
                        onClick={handleShowNavbar}
                    >
                        <AlignJustify size={45} color='#fff' />
                    </button>
                </div>
                <div className={`h-full flex flex-col justify-center items-center gap-2 py-2 lg:py-4 lg:flex-row 
                    ${show ? 'block ' : 'hidden'} `}>
                    {renderChildren()}
                    <div className="lg:ml-10 flex gap-5 flex-col justify-center items-center lg:flex-row">
                        <NavbarSesion />
                        <Link
                            onClick={handleClose}
                            className="text-white hover:text-azul-cielo py-3 px-2 relative"
                            to={'/carrito'}
                        >
                            {
                                cart.length > 0 && <span className="text-blue-800 bg-gray-400 rounded-full px-1 absolute top-0 right-2 text-xs font-mono">{cart?.length}</span>
                            }
                            <ShoppingCart />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}