import { AlignJustify } from "lucide-react"
import { useState } from "react"
import { NavbarSesion } from "./NavbarSesion";
import { NavbarLogo } from "./NavbarLogo";
import { useEffect } from "react";





export const NavbarContent = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleShowNavbar = () => {
        setShow(prev => !prev);
    }

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setShow(true);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('rezise', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="bg-navbar-web sticky top-0 right-0 left-0 z-20">
            <div className="lg:flex justify-between max-w-[1200px] m-auto items-center">
                <div className="flex p-2 justify-between">
                    <NavbarLogo />
                    <button
                        className="flex justify-center items-center p-1 lg:hidden"
                        onClick={handleShowNavbar}
                    >
                        <AlignJustify size={45} />
                    </button>
                </div>
                <div className={`h-full flex flex-col justify-center items-center gap-2 py-2 lg:py-4 lg:flex-row lg:gap-3
                ${show ? 'block' : 'hidden'}`}>
                    {children}
                    <NavbarSesion />
                </div>
            </div>
        </div >
    )
}