import { Menu } from "lucide-react"
import { useState } from "react";


export const NavbarDashboard = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleNavbar = () => {
        console.log('click');
        setShow(prev => !prev)
    }

    return (
        <div className="col-span-3">
            <div className="sticky bg-red-200 flex justify-end px-4 py-1 lg:hidden">
                <button
                    onClick={handleNavbar}
                    className="bg-gray-900 p-3 "
                >
                    <Menu />
                </button>
            </div>
            <div className={`bsg-gray-600 bg-red-200 h-full ${show ? 'absolute w-full lg:relative grid' : 'hidden lg:grid'}`}>
                {children}
            </div >
        </div>
    )
}