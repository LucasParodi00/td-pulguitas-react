import { Menu } from "lucide-react"
import { useState } from "react";


export const NavbarDashboard = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleNavbar = () => {
        console.log('click');
        setShow(prev => !prev)
    }

    return (
        <div className="col-span-3 h-screen overflow-scroll scroll-oculto">
            <div className="sticky bg-black text-white flex justify-end px-4 py-1 lg:hidden z-50">
                <button
                    onClick={handleNavbar}
                    className="p-3 "
                >
                    <Menu />
                </button>
            </div>
            <div className={`bsg-gray-600 bg-[#faf7f2] h-full ${show ? 'absolute w-full lg:relative grid' : 'hidden lg:grid'} z-50`}>
                {children}
            </div >
        </div>
    )
}