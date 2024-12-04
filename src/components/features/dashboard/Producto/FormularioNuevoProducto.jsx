import { FormProvider, useForm } from "react-hook-form"
import { SendButton } from "../../../common/button/SendButton";
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { productsValidation } from "../../../../utils/validations/productsValidation";
import { SelectedDashboard } from "../../../common/inputs/SelectedDashboard";
import { estadoOption } from "../../../../utils/options/estadoOption";
import { TextAreaDashboard } from "../../../common/inputs/TextAreaDashboard";
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard";
import { PresentacionesProducto } from "./PresentacionesProducto";

const opciones = [
    { value: 1, text: 'Hola' },
    { value: 2, text: 'Chau' },
]

export const FormularioNuevoProducto = () => {
    const methods = useForm();

    const { register, handleSubmit, formState: { errors } } = methods;

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 pb-10">
                <LayoutInternoDashboard>

                    <InputDashboard
                        label={'Nombre'}
                        placeholder='Nombre del producto'
                        {...register('nombre', productsValidation.nombre)}
                        error={errors.nombre?.message}
                    />

                    <SelectedDashboard
                        label={'Categoria'}
                        options={opciones}
                        {...register('categoria', productsValidation.id_categoria)}
                        error={errors.id_categoria?.message}
                    />

                    <SelectedDashboard
                        label={'Estado'}
                        options={estadoOption}
                        {...register('estado')}
                    />

                    <TextAreaDashboard
                        label={'Descripcion'}
                        {...register('descripcion', productsValidation.descripcion)}
                        error={errors.descripcion?.message}
                    />

                </LayoutInternoDashboard>


                <LayoutInternoDashboard>

                    <PresentacionesProducto />

                </LayoutInternoDashboard>

                <SendButton
                    texto="Cargar Producto"
                />
            </form>
        </FormProvider>
    )
}