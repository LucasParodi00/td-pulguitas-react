import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useFetchApi } from "../../../../hook/useFetchApi";
import { useEffect } from "react";
import { Spinner } from "../../../common/spinner/Spinner";
import { Carrusel } from "../../../common/Carrusel";
import { BtnSecondary } from "../../../common/button/BtnSecundary";
import { useContext } from "react";
import { AuthContext } from "../../../../auth/context/AuthContext";


export const VerProductoWeb = () => {
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedPresentation, setSelectedPresentation] = useState(null);

    const { addCart } = useContext(AuthContext);

    const { fetchDatas } = useFetchApi('producto');
    const { id } = useParams();
    const navigation = useNavigate();

    if (!id) return navigation('/productos');

    const fetchData = async (id) => {
        setLoading(true);
        try {
            const { data } = await fetchDatas({ id });
            setProducto(data);

            if (data.presentaciones && data.presentaciones.length > 0) {
                setSelectedPresentation(data.presentaciones[0]);
            }
        } catch (errr) {
            console.log(errr);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const handlePresentation = (presentacion) => {
        setSelectedPresentation(presentacion);
    }

    const imagenes = producto?.imagenes?.map((item) => (item.url));
    if (loading) return <Spinner />

    return (
        <div className="p-2">
            <h1 className="text-center uppercase font-semibold lg:text-3xl">{producto.nombre}</h1>
            <div className="lg:flex gap-4">
                <div className="h-60 lg:w-1/2 lg:h-[36rem]">
                    <Carrusel
                        autoPlay={true}
                        imagenes={imagenes}
                    />
                </div>
                <div className="w-full ">
                    <div className="flex gap-5 lg:mt-10">
                        <span className="bg-verde-menta p-2 block rounded-md">{producto.categoria}</span>
                        {
                            producto?.mascota?.map((item) => (
                                <span>{item.nombre}</span>
                            ))
                        }
                    </div>
                    <div className="p-1 ">
                        <p className="mb-1">Presentaciones: </p>
                        <div className="flex gap-2 w-full justify-center items-center lg:justify-start">
                            {
                                producto?.presentaciones?.map((item) => (
                                    <button
                                        key={item.id_presentacion}
                                        onClick={() => handlePresentation(item)}
                                        className={`p-2 lg:text-xl rounded-md  hover:bg-azul-cielo duration-500 hover:text-white
                                                ${selectedPresentation?.id_presentacion === item.id_presentacion ? 'bg-azul-cielo text-white' : 'bg-azul-palido'}
                                            `}
                                    >
                                        {item.nombre}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {
                            selectedPresentation && (
                                <div className="text-center mt-2 font-bold text-verde-menta text-3xl lg:text-6xl">
                                    $ {parseFloat(selectedPresentation.precio_compra + (selectedPresentation.precio_compra * selectedPresentation.porcentaje_aumento / 100)).toFixed(2)}
                                </div>
                            )
                        }
                    </div>
                    {/* Redes sociales */}
                    <div className="py-2">
                        <div className="mt-3 flex items-center gap-5">

                            <BtnSecondary
                                texto="Agregar al carrito"
                                onClick={() => addCart(
                                    {
                                        id_producto: selectedPresentation.id_presentacion,
                                        nombre: producto.nombre,
                                        imagenes: producto.imagenes,
                                        monto: selectedPresentation.precio_compra,
                                        porcentaje_aumento: selectedPresentation.porcentaje_aumento
                                    }
                                )}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-justify border-t-2 mt-2 pt-2 text-xs lg:text-base">
                {
                    producto.descripcion
                }
            </div>
        </div>
    )
}