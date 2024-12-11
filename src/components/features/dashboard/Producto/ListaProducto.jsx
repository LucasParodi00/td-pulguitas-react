import { useState } from "react"
import { DataTable } from "../../../common/tables/DataTable"
import { useFetchApi } from "../../../../hook/useFetchApi";
import { useMemo } from "react";
import { ActionDataTable } from "../../../common/AccionesGenericas";
import { columnasProducts } from "../../../../utils/helper/columns";
import { routesHelper } from "../../../../utils/helper/routesHelper";
import { useNavigate } from "react-router-dom";


export const ListaProducto = () => {
    const [filtros, setFiltros] = useState('');
    const { fetchDatas } = useFetchApi('producto');

    const navigate = useNavigate();

    const fetchData = useMemo(() => async (page, limit) => {
        const { data: { productos, total } } = await fetchDatas({ querys: { page, limit, ...filtros } });

        const data = productos?.map((item) => (
            {
                id: item.id_producto,
                nombre: item.nombre,
                categoria: item.categoria?.nombre,
                mascota: item.mascota?.nombre || 'No especifica',
                estado: item.estado,
                accion: (
                    <ActionDataTable
                        id={item.id_producto}
                        acciones={['ver', 'eliminar', 'editar']}
                        routes={routesHelper.productos}
                        onEdit={() => navigate(`/dashboard/productos/${item.id_producto}/editar`)}
                    />
                )
            }
        ));
        return { data, total, filtros }
    }, [fetchDatas, filtros]);



    return (
        <div>
            <DataTable
                fetchDataApi={fetchData}
                columns={columnasProducts}
                showPaginator={true}
            />
        </div>
    )
}