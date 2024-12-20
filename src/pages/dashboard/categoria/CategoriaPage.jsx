import { useState } from "react"
import { FormularioNuevaCategoria } from "../../../components/features/dashboard/categoria/FormularioNuevaCategoria"
import { ListaCategoria } from "../../../components/features/dashboard/categoria/ListaCategoria"
import { useCallback } from "react";


export const CategoriaPage = () => {
    const [reload, setReload] = useState(false);
    const [categoria, setCategoria] = useState(null);

    const handleReload = useCallback(() => setReload(prev => !prev), []);

    const handleEdit = useCallback((item) => {
        setCategoria(item);
    }, []);

    return (
        <div className="flex flex-col gap-10 xl:flex-row lg:px-5 mt-10">
            <FormularioNuevaCategoria
                handleReload={handleReload}
                categoria={categoria}
            />
            <ListaCategoria
                reload={reload}
                handleEdit={handleEdit}
            />
        </div>
    )
}