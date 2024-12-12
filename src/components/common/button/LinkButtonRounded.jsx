import { Link } from "react-router-dom";

export const LinkButtonRounded = ({ referencia = '#', icono = '', texto = '' }) => {
    return (
        <div className="text-black">
            <Link
                to={referencia}
                className="w-20 h-20 lg:w-36 lg:h-36
            rounded-full overflow-hidden flex items-center justify-center p-3 bg-white border border-black peer hover:bg-naranja-web hover:text-white hover:border-white"
            >
                {icono}
                {texto}
            </Link>
            <span className="block h-1 bg-white w-1/2 m-auto mt-4 peer-hover:bg-naranja-web "></span>
        </div>
    );
};
