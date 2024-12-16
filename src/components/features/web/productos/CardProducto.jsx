import { Link } from "react-router-dom";





export const CardProducto = ({ nombreProducto = '', presentaciones = [], precio = 0, urlImagen = '', id = '' }) => {
    return (
        <Link
            to={`/productos/${id}`}
            className="hover:text-blue-500 duration-200 hover:brightness-90 brightness-100"
        >
            <div className="p-4 max-w-72 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col gap-4 relative h-full ">
                <span className="text-xs text-gray-300 absolute">COD: {id}</span>
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                    <img
                        src={urlImagen}
                        alt={`Pulguitas - PetShop - ${nombreProducto}`}
                        className="object-contain w-full h-64 "
                    />
                </div>
                <div className="text-center">
                    <h4 className="text-xs">{nombreProducto}</h4>
                    {/* <div className="flex justify-center gap-2 mt-2">
                    {
                        presentaciones?.map((item) => (
                            <span className="bg-verde-suave py-1 px-2 rounded-md">{item.nombre}</span>
                        ))
                    }
                </div> */}
                </div>
            </div>
        </Link>
    );
};
