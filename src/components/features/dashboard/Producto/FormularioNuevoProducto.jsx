import { FormProvider, useForm } from "react-hook-form"
import { SendButton } from "../../../common/button/SendButton";
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { productsValidation } from "../../../../utils/validations/productsValidation";
import { SelectedDashboard } from "../../../common/inputs/SelectedDashboard";
import { estadoOption } from "../../../../utils/options/estadoOption";
import { TextAreaDashboard } from "../../../common/inputs/TextAreaDashboard";
import { LayoutInternoDashboard } from "../../../layout/LayoutInternoDashboard";
import { PresentacionesProducto } from "./PresentacionesProducto";
import { ImagenProducto } from "./ImagenProducto";
import { productConverter } from "../../../../utils/helper/productConverter";
import { setProducto, updateProducto } from "../../../../services/api/productoApoi";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const FormularioNuevoProducto = ({ categoryOptions = [], productoEdit = null }) => {
    const [isEdition, setIsEdition] = useState(false);
    const methods = useForm();
    const { register, handleSubmit, reset, formState: { errors } } = methods;
    const navigation = useNavigate();
    useEffect(() => {
        if (productoEdit) {
            setIsEdition(true);
            reset(productoEdit);
        }
    }, [productoEdit]);

    const onSubmit = async (data) => {
        console.log(data);
        const newData = productConverter(data);
        try {
            if (isEdition) {
                await updateProducto(parseInt(productoEdit.id), newData);
                navigation(`/dashboard/productos`);
            } else {
                const { data } = await setProducto(newData);
                console.log(data);
                navigation(`/dashboard/productos`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 lg:grid grid-cols-2">
                <LayoutInternoDashboard>

                    <InputDashboard
                        label={'Nombre'}
                        placeholder='Nombre del producto'
                        {...register('nombre', productsValidation.nombre)}
                        error={errors.nombre?.message}
                    />

                    <SelectedDashboard
                        label={'Categoria'}
                        options={categoryOptions}
                        {...register('id_categoria', productsValidation.id_categoria)}
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
                    <ImagenProducto />
                </LayoutInternoDashboard>

                <div className="col-span-2 flex flex-col gap-5 mb-2">
                    <LayoutInternoDashboard>
                        <PresentacionesProducto />
                    </LayoutInternoDashboard>

                    <SendButton
                        texto="Cargar Producto"
                    />
                </div>
            </form>
        </FormProvider>
    )
}