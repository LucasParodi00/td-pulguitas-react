import { useState } from "react";
import { Spinner } from "../../../components/common/spinner/Spinner";
import { FormularioNuevoProducto } from "../../../components/features/dashboard/Producto/FormularioNuevoProducto"
import { useFetchOptions } from "../../../hook/useFetchOptions"
import { useParams } from "react-router-dom";
import { useFetchApi } from "../../../hook/useFetchApi";
import { useCallback } from "react";
import { useEffect } from "react";


export const NuevoProductoPage = () => {
    const [productoEdit, setProductoEdit] = useState(null);

    const { fetchDatas } = useFetchApi('producto');
    const { id } = useParams();

    const fetchData = useCallback(async (id) => {
        try {
            const { data } = await fetchDatas({ id: id, patch: '/completo' });
            setProductoEdit(data);
        } catch (err) {
            console.log(err);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchData(id);
        }
    }, [id]);

    const { options: categorias, loading: loadingCategoria } = useFetchOptions('categoria', 'categorias', 'id_categoria', 'nombre');
    if (loadingCategoria) return <Spinner texto="Cargando datos..." />

    return (
        <FormularioNuevoProducto
            categoryOptions={categorias}
            productoEdit={productoEdit}
        />
    )
}