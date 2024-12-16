import { useState } from "react"
import { Spinner } from "../../../common/spinner/Spinner";
import { useEffect } from "react";
import { CardProducto } from "./CardProducto";
import { ContainerWeb } from "../../../layout/ContainerWeb";
import { Paginator } from "../../../common/tables/Paginator";
import { useCallback } from "react";


export const SectionProductsWeb = ({ fetchDataApi = null }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(30);
    const [numberOfPages, setNumberOfPages] = useState(1);

    const fetchData = useCallback(async (currentPage, limit) => {
        setLoading(true);
        try {
            const { data, total } = await fetchDataApi(currentPage, limit);
            setProductos(data);
            setNumberOfPages(Math.ceil(total / limit));
        } catch (err) {
            setErrors('Error al obtener los datos!');
        } finally {
            setLoading(false);
        }
    }, [fetchDataApi, limit])

    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, numberOfPages));
    const lastPage = () => setCurrentPage(prev => Math.max(prev - 1));

    useEffect(() => {
        setCurrentPage(1);
    }, [fetchDataApi])

    useEffect(() => {
        if (fetchDataApi) {
            fetchData(currentPage, limit);
        }
    }, [currentPage, fetchData])

    if (loading) return <div className="h-full flex justify-center items-center"> <Spinner texto="Cargando datos..." /></div>
    if (errors.length > 0) return <span className="block mt-2 py-2 text-center bg-red-800 text-white">{errors}</span>

    return (
        <div>
            <div className="grid place-content-center gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    productos?.map((producto) => (
                        <CardProducto
                            key={producto.id}
                            id={producto.id}
                            nombreProducto={producto.nombre}
                            presentaciones={producto.presentaciones}
                            urlImagen={producto.imagen}
                        />
                    ))
                }
            </div>
            <div className="h-14 mt-3">
                <Paginator
                    currentPage={currentPage}
                    numberOfPage={numberOfPages}
                    lastPage={lastPage}
                    nextPage={nextPage}
                />
            </div>
        </div>
    )
}