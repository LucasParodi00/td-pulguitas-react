import { useEffect } from "react"
import { Carrusel } from "../../components/common/Carrusel"
import { Carrusel3d } from "../../components/common/carrusel/Carrusel3d"
import { ButtonsPets } from "../../components/features/web/ButtonsPets"
import { ContainerWeb } from "../../components/layout/ContainerWeb"
import { useFetchApi } from "../../hook/useFetchApi"
import { useState } from "react"
import { SubTitle } from "../../components/common/texto/SubTitle"
import { CardNovedades } from "../../components/common/card/CardNovedades"
import { CarruselInfinito } from "../../components/common/carrusel/CarruselInfinito"
import { MetodosPago } from "../../components/features/web/MetodosPago"
import { SeccionBlogs } from "../../components/features/web/blog/SeccionBlogs"
import { importLogos } from "../../utils/helper/importMarcas"

const imagenes = ['http://localhost:5173/banner-lg-1.png', 'http://localhost:5173/banner-lg-2.png']
const marcas = ['http://localhost:5173/marcas/1.png']

export const HomePage = () => {
    const [productos, setProductos] = useState([]);
    const [logos, setLogos] = useState([]);

    const { fetchDatas } = useFetchApi('producto');
    const fetchData = async () => {
        const { data: { productos } } = await fetchDatas({ querys: { limit: 10 } });
        setProductos(productos);
        setLogos(await importLogos())
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Carrusel
                imagenes={imagenes}
                autoPlay={true}
            />
            <MetodosPago />
            <ContainerWeb>
                <ButtonsPets />
                <div className="bg-[#EBEBEB] py-5 rounded-lg lg:rounded-3xl lg:px-10  lg:flex flex-col gap-10">
                    <SubTitle texto="Super ofertas" />
                    <Carrusel3d
                        sliders={productos}
                    />
                </div>
            </ContainerWeb>
            <CardNovedades />
            <CarruselInfinito sliders={logos} />
            <ContainerWeb>
                <SeccionBlogs />
            </ContainerWeb>
        </>
    )
}