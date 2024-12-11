import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { categoryConverter } from "../../../../utils/helper/categoryConverter";
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard";
import { RotateCcw } from "lucide-react";
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { SelectedDashboard } from "../../../common/inputs/SelectedDashboard";
import { categoryValidation } from "../../../../utils/validations/categoryValidation";
import { estadoOption } from "../../../../utils/options/estadoOption";
import { SendButton } from "../../../common/button/SendButton";
import { useFetchApi } from "../../../../hook/useFetchApi";

export const FormularioNuevaMascota = ({ handleReload = null, mascota = null }) => {
    const { fetchDatas } = useFetchApi('mascota');
    const [isEdition, setIsEdition] = useState(false);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (mascota) {
            setIsEdition(true);
            setValue('nombre', mascota.nombre)
            setValue('estado', mascota.estado)
        }
    }, [mascota]);

    const reloadForm = () => {
        handleReload();
        reset();
        setIsEdition(false);
    }

    const onSubmit = useCallback(async (data) => {
        const newData = categoryConverter(data);
        try {
            if (isEdition) {
                await fetchDatas({ method: 'PUT', body: newData, id: parseInt(mascota.id_mascota) });
            } else {
                await fetchDatas({ method: 'POST', body: newData });
            }
        } catch (err) {
            console.log(err);
        } finally {
            console.log('entra');

            reloadForm();
        }
    }, [isEdition, mascota, handleReload, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 xl:w-1/2">
            <LayoutInternoDashboard>
                <div className="mb-5">

                    <div className="flex justify-end px-3">
                        <button
                            className="p-1 bg-blue-200 rounded-md"
                            type="button"
                            onClick={reloadForm}
                        >
                            <RotateCcw />
                        </button>
                    </div>

                    <InputDashboard
                        placeholder={'Nombre del animal'}
                        label={'Nombre'}
                        {...register('nombre', categoryValidation.nombre)}
                        error={errors.nombre?.message}
                    />

                    <SelectedDashboard
                        label={'Estado'}
                        options={estadoOption}
                        {...register('estado')}
                    />
                </div>
                <SendButton
                    texto={`${isEdition ? 'Editar Mascota' : 'Nueva Mascota'}`}
                />
            </LayoutInternoDashboard>
        </form>
    )
}