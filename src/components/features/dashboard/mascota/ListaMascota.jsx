import { useState, useEffect, useMemo } from "react";
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard";
import { DataTable } from "../../../common/tables/DataTable";
import { columnasCategory } from "../../../../utils/helper/columns";
import { useFetchApi } from "../../../../hook/useFetchApi";
import { ActionDataTable } from "../../../common/AccionesGenericas";

export const ListaMascota = ({ reload, handleEdit = null }) => {
    const [filtros, setFiltros] = useState('');
    const { fetchDatas } = useFetchApi('mascota');
    const [reloadFlag, setReloadFlag] = useState(true);

    const fetchData = useMemo(() => async (page, limit) => {
        const { data: { mascotas, total }, message } = await fetchDatas({ method: 'GET', querys: { page, limit, ...filtros } });
        const data = mascotas?.map(item => ({
            nombre: item.nombre,
            id_mascota: item.id_mascota,
            estado: item.estado ? 'Activo' : 'Inactivo',
            accion: (
                <ActionDataTable
                    id={item.id_mascota}
                    acciones={['eliminar', 'editar']}
                    onEdit={() => handleEdit(item)}
                    onDelete={() => handleDelete(item.id_mascota)}
                />
            )
        }));
        return { data, total, filtros };
    }, [reload, fetchDatas, filtros, reloadFlag]);

    const handleDelete = useMemo(() => async (id) => {
        await fetchDatas({ method: 'DELETE', id: parseInt(id) });
        setReloadFlag(prev => !prev);
    }, []);

    return (
        <LayoutInternoDashboard>
            <DataTable
                columns={columnasCategory}
                fetchDataApi={fetchData}
            />
        </LayoutInternoDashboard>
    )
}