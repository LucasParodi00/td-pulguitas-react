import { useFormContext } from "react-hook-form"
import { InputDashboard } from "../../../common/inputs/InputDashboard"
import { useContext } from "react";
import { AuthContext } from "../../../../auth/context/AuthContext";


export const CardProducto = ({ id = '', nombre = 'Nombre del producto', precio_compra = 1500, porcentaje_aumento = 21, imagenes = [] }) => {

    const { removeCart } = useContext(AuthContext);
    const { register, watch } = useFormContext();

    const cantidad = watch(`cantidad_${id}`) || 1;

    return (
        <div className="border-y p-5 lg:grid grid-cols-10 items-center gap-5">
            <div className="h-32">
                <img
                    src={imagenes[0].url}
                    alt={`PetShop - Pulguitas - ${nombre}`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="col-span-6 text-center lg:text-left">
                <div>
                    <p>{nombre}</p>
                </div>
                <div className="flex gap-5 justify-center lg:justify-start">
                    <span>Iva %: {porcentaje_aumento}</span>
                    <span> Precio Final: {parseFloat(precio_compra * (1 + porcentaje_aumento / 100)).toFixed(2)}</span>
                </div>
                <button
                    type="button"
                    onClick={() => removeCart(id)}
                    className="mt-3 text-blue-600"
                >
                    Eliminar
                </button>
            </div>
            <div className="">
                <InputDashboard
                    label={'Cantidad'}
                    type='number'
                    min='1'
                    defaultValue='1'
                    {...register(`cantidad_${id}`)}
                />
            </div>
            <div className="flex flex-col items-center justify-center col-span-2">
                <p>SubTotal: </p>
                <p className="text-2xl">$ {parseFloat(cantidad * (precio_compra * (1 + porcentaje_aumento / 100))).toFixed()}</p>
            </div>

        </div>
    )
}