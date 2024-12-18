import { useState } from "react";
import { SectionProductsWeb } from "../../components/features/web/productos/SectionProductsWeb"
import { useFetchApi } from "../../hook/useFetchApi"
import { useEffect } from "react";
import { SectionFiltterProducts } from "../../components/features/web/productos/SectionFilterProducts";
import { ContainerWeb } from "../../components/layout/ContainerWeb";
import { importLogos } from "../../utils/helper/importMarcas";
import { CarruselInfinito } from "../../components/common/carrusel/CarruselInfinito";
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { VerProductoWeb } from "../../components/features/web/productos/VerProductoWeb";



export const ProductosWebPage = () => {
    const [filtros, setFiltros] = useState();
    const [logos, setLogos] = useState();

    const { fetchDatas } = useFetchApi('producto');

    const fetchData = useCallback(async (page, limit) => {
        try {
            const queryParams = {
                page,
                limit,
            }
            const { data: { productos, total } } = await fetchDatas({ method: 'GET', querys: queryParams });
            const data = productos?.map((item) => {
                return (
                    {
                        id: item.id_producto,
                        nombre: item.nombre,
                        presentaciones: item.presentaciones,
                        imagen: item.imagenes?.[0]?.url
                    }
                )
            })
            return { data, total, filtros }
        } catch (err) {
            console.log(err);
        }
    }, [fetchDatas, filtros]);


    const handleFiltter = useCallback((nuevosFiltros) => {
        const queryString = Object.entries(nuevosFiltros)
            .flatMap(([key, values]) =>
                values.map(value => `${encodeURIComponent(key.toLowerCase())}=${encodeURIComponent(value.toLowerCase())}`)
            )
            .join('&');
        setFiltros(queryString);
    }, []);

    useEffect(() => {
        const cargarLogos = async () => {
            const logosImportados = await importLogos();
            setLogos(logosImportados);
        };
        cargarLogos();
    }, []);


    return (
        <div>
            <ContainerWeb>
                <div className="lg:grid grid-cols-12 gap-5  ">
                    <div className="col-span-2 relative">
                        <SectionFiltterProducts
                            onFilterChange={handleFiltter}
                        />
                    </div>
                    <main className="col-span-10">
                        {/* <SectionProductsWeb
                            fetchDataApi={fetchData}
                        /> */}
                        <Routes>
                            <Route path="/" element={
                                <SectionProductsWeb
                                    fetchDataApi={fetchData}
                                />}
                            />
                            <Route path="/:id" element={<VerProductoWeb />} />
                        </Routes>
                    </main>
                </div>
            </ContainerWeb>
            <div className="mb-10">
                <CarruselInfinito sliders={logos}
                    breakpoints={{ "768": { slidesPerView: 10 } }}
                />
            </div>
        </div>
    )
}