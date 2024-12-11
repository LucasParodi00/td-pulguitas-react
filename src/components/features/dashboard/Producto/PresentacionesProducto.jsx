import { useFieldArray, useFormContext } from "react-hook-form"
import { BtnSecondary } from "../../../common/button/BtnSecundary"
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { v4 as uuidv4 } from "uuid";
import { productsValidation } from "../../../../utils/validations/productsValidation";
import { X } from "lucide-react";


export const PresentacionesProducto = () => {
    const uniqueId = uuidv4();
    const { register, control, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({ control, name: 'presentacion' });

    const hanldeNewPresentation = () => {
        append({
            id: uniqueId,
            nombre_presentacion: '',
            precio_compra: '',
            porcentaje_aumento: 21,
            stock: 0,
        })
    }

    return (
        <div>
            <div className="lg:grid grid-cols-2 gap-3">
                <p className="font-extralight mb-2 col-span-2">Presentaciones...</p>
                {
                    fields.map((item, index) => (
                        <div key={item.id} className="border-blue-400 border rounded-md py-3 mb-3">
                            <input type="number" hidden {...register(`presentacion.${index}.id_presentacion`)} />
                            <div className="flex justify-end px-3 text-red-600">
                                <button
                                    className="p-1 border border-red-600 rounded-md bg-white"
                                    onClick={() => remove(index)}
                                >
                                    <X />
                                </button>
                            </div>
                            <InputDashboard
                                label={'Nombre presentacion'}
                                placeholder={'Nombre de la presentacion'}
                                {...register(`presentacion.${index}.nombre_presentacion`, productsValidation.nombre)}
                                error={errors.presentacion?.[index].nombre_presentacion?.message}
                            />

                            <InputDashboard
                                type={'number'}
                                label={'Precio Compra'}
                                placeholder={'Precio Compra'}
                                {...register(`presentacion.${index}.precio_compra`, productsValidation.precio_compra)}
                                error={errors.presentacion?.[index].precio_compra?.message}
                            />

                            <InputDashboard
                                type={'number'}
                                label={'Porcentaje de aumento'}
                                placeholder={'Porcentaje de aumento (numero entero)'}
                                {...register(`presentacion.${index}.porcentaje_aumento`, productsValidation.porcentaje_aumento)}
                                error={errors.presentacion?.[index].porcentaje_aumento?.message}
                            />

                            <InputDashboard
                                type={'number'}
                                label={'Stock'}
                                placeholder={'Ingrese el stock de la presentacion'}
                                {...register(`presentacion.${index}.stock`, productsValidation.stock)}
                                error={errors.presentacion?.[index].stock?.message}
                            />

                        </div>
                    ))
                }
            </div>
            <div className="flex justify-end mb-2">
                <BtnSecondary
                    texto="Añadir Presentacion"
                    type={'button'}
                    onClick={hanldeNewPresentation}
                />
            </div>
        </div>
    )
}