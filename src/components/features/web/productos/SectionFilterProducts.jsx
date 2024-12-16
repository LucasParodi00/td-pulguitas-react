import { useEffect } from "react";
import { useFetchApi } from "../../../../hook/useFetchApi"
import { BtnCheckBoxFiltter } from "../../../common/button/BtnCheckboxFiltter"
import { FiltterProducts } from "./FiltterProducts"
import { Spinner } from "../../../common/spinner/Spinner";
import { useState } from "react";
import { BtnSecondary } from "../../../common/button/BtnSecundary";


export const SectionFiltterProducts = ({ onFilterChange = null }) => {
    const [categorias, setCategorias] = useState([]);
    const [mascotas, setMascotas] = useState([]);
    const [filtros, setFiltros] = useState({
        Categoria: [],
        Mascota: []
    });

    const { fetchDatas: fetDataCategorias, loading: loadingCategorias } = useFetchApi('categoria');
    const { fetchDatas: fetchDataMascotas, loading: loadingMascotas } = useFetchApi('mascota');

    const fetchDataFiltter = async () => {
        try {
            const { data: { categorias } } = await fetDataCategorias({ querys: { estado: true } });
            const { data: { mascotas } } = await fetchDataMascotas({ querys: { estado: true } });
            setMascotas(mascotas);
            setCategorias(categorias);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchDataFiltter();
    }, []);


    const handleSelectedOptionsChange = (filterName, selectedOptions) => {
        const newFiltter = {
            ...filtros,
            [filterName]: selectedOptions
        };
        setFiltros(newFiltter);
    }

    const handleFiltters = () => {
        console.log(filtros);
        onFilterChange(filtros);
    }

    if (loadingCategorias || loadingMascotas) return <Spinner texto="" />

    return (
        <div className="flex flex-col justify-between gap-10 ">
            <FiltterProducts
                nombreFiltro="Categoria"
                options={categorias}
                onSelectedOptionsChange={handleSelectedOptionsChange}
            />
            <FiltterProducts
                nombreFiltro="Mascota"
                options={mascotas}
                onSelectedOptionsChange={handleSelectedOptionsChange}
            />
            <BtnSecondary
                texto="Filtrar"
                onClick={handleFiltters}
            />
        </div>
    )
}