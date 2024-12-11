import { AlignJustify } from "lucide-react"
import { useState } from "react"





export const NavbarContent = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleShowNavbar = () => {
        setShow(prev => !prev);
    }

    return (
        <div className="relative">
            <div className="bg-red-500 flex justify-end p-2 lg:hidden">
                <button
                    className="flex justify-center items-center p-1"
                    onClick={handleShowNavbar}
                >
                    <AlignJustify size={45} />
                </button>
            </div>
            <div className={` bg-blue-400 h-full
                ${show ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div >
    )
}