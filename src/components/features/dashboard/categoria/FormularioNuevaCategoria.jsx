import { useForm } from "react-hook-form"
import { SendButton } from "../../../common/button/SendButton"
import { InputDashboard } from "../../../common/inputs/InputDashboard"
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard"
import { categoryValidation } from "../../../../utils/validations/categoryValidation"
import { SelectedDashboard } from "../../../common/inputs/SelectedDashboard"
import { estadoOption } from "../../../../utils/options/estadoOption"




export const FormularioNuevaCategoria = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LayoutInternoDashboard>
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

            </LayoutInternoDashboard>
            <SendButton
                texto="Nueva Categoria"
            />
        </form>
    )
}