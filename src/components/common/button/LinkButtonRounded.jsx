import { Link } from "react-router-dom";

export const LinkButtonRounded = ({ referencia = '#', icono = '', texto = '' }) => {
    return (
        <div className="text-black">
            <Link
                to={referencia}
                className="w-20 h-20 lg:w-36 lg:h-36 rounded-full overflow-hidden flex items-center justify-center bg-verde-suave text-white
                            shadow-button
                            peer  hover:text-white hover:bg-navbar-web duration-500"
            >
                {icono}
                {texto}
            </Link>
            <span className="block h-1 bg-verde-suave w-1/2 m-auto mt-4 peer-hover:bg-navbar-web "></span>
        </div>
    );
};
