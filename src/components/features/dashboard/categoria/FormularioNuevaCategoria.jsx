import { useForm } from "react-hook-form"
import { SendButton } from "../../../common/button/SendButton"
import { InputDashboard } from "../../../common/inputs/InputDashboard"
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard"
import { categoryValidation } from "../../../../utils/validations/categoryValidation"
import { SelectedDashboard } from "../../../common/inputs/SelectedDashboard"
import { estadoOption } from "../../../../utils/options/estadoOption"
import { categoryConverter } from "../../../../utils/helper/categoryConverter"
import { setCategoria, updateCategoria } from "../../../../services/api/categoriaAPi"
import { useEffect } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { RotateCcw } from "lucide-react"


export const FormularioNuevaCategoria = ({ handleReload = null, categoria = null }) => {
    const [isEdition, setIsEdition] = useState(false);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (categoria) {
            setIsEdition(true);
            setValue('nombre', categoria.nombre)
            setValue('estado', categoria.estado)
        }
    }, [categoria]);

    const reloadForm = () => {
        handleReload();
        reset();
        setIsEdition(false);
    }

    const onSubmit = useCallback(async (data) => {
        const newData = categoryConverter(data);
        try {
            if (isEdition) {
                await updateCategoria(newData, parseInt(categoria?.id_categoria));
            } else {
                await setCategoria(newData);
            }
        } catch (err) {
            console.log(err);
        } finally {
            reloadForm();
        }
    }, [isEdition, categoria, handleReload, reset]);

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
                        placeholder={'Nombre de la categoria'}
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
                    texto={`${isEdition ? 'Editar Categoria' : 'Nueva Categoria'}`}
                />
            </LayoutInternoDashboard>
        </form>
    )
}