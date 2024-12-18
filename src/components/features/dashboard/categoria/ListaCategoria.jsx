import { useState } from "react";
import { ActionDataTable } from "../../../common/AccionesGenericas";
import { DataTable } from "../../../common/tables/DataTable"
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard";
import { columnasCategory } from "../../../../utils/helper/columns";
import { useMemo } from "react";
import { useFetchApi } from "../../../../hook/useFetchApi";

export const ListaCategoria = ({ reload, handleEdit = null }) => {
    const [filtros, setFiltros] = useState('');
    const [reloadFlag, setReloadFlag] = useState(false);

    const { fetchDatas } = useFetchApi('categoria');
    const fetchData = useMemo(() => async (page, limit) => {
        const { data: { categorias, total }, message } = await fetchDatas({ method: 'GET', querys: { page, limit, ...filtros } });
        const data = categorias?.map(item => (
            {
                nombre: item.nombre,
                id_categoria: item.id_categoria,
                estado: item.estado ? 'Activo' : 'Inactivo',
                accion: (
                    <ActionDataTable
                        id={item.id_categoria}
                        acciones={['eliminar', 'editar']}
                        onEdit={() => handleEdit(item)}
                        onDelete={() => handleDelete(item.id_categoria)}
                    />
                )
            }
        ));
        return { data, total, filtros }
    }, [reload, reloadFlag, fetchDatas, filtros]);

    const handleDelete = useMemo(() => async (id) => {
        await fetchDatas({ id: parseInt(id), method: 'DELETE' });
        setReloadFlag(prev => !prev);
    }, []);

    return (
        <LayoutInternoDashboard>
            <DataTable
                showPaginator={true}
                columns={columnasCategory}
                fetchDataApi={fetchData}
            />
        </LayoutInternoDashboard>
    )
}