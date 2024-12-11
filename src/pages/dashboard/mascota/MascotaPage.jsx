import { useCallback } from "react";
import { useState } from "react"
import { FormularioNuevaMascota } from "../../../components/features/dashboard/mascota/FormularioNuevaMascota";
import { ListaMascota } from "../../../components/features/dashboard/mascota/ListaMascota";


export const MascotaPage = () => {
    const [reload, setReload] = useState(false);
    const [mascota, setMascota] = useState(null);

    const handleReload = useCallback(() => setReload(prev => !prev), []);

    const handleEdit = useCallback((item) => {
        setMascota(item);
    }, []);

    return (
        <div className="flex flex-col gap-10 xl:flex-row lg:px-5 mt-10">
            <FormularioNuevaMascota
                handleReload={handleReload}
                mascota={mascota}
            />

            <ListaMascota
                reload={reload}
                handleEdit={handleEdit}
            />

        </div>
    )

}