import { useContext } from "react"
import { AuthContext } from "../../../../auth/context/AuthContext"
import { CardProducto } from "./CardCart";
import { FormProvider, useForm } from "react-hook-form";
import { SendButton } from "../../../common/button/SendButton";
import { CardMontoTotalCarrito } from "./CardMontoTotalCarrito";
import { useFetchApi } from "../../../../hook/useFetchApi";

export const Cart = () => {
    const { cart, user: { id_usuario } } = useContext(AuthContext)
    const { fetchDatas } = useFetchApi('mp');
    const method = useForm();
    const { handleSubmit, watch, register, formState: { errors } } = method;

    const onSubmit = async (data) => {
        const productosConCantidad = cart.filter(item =>
            data[`cantidad_${item.id_producto}`] > 0
        ).map(item => ({
            id_presentacion: item.id_producto,
            cantidad: parseInt(data[`cantidad_${item.id_producto}`])
        }));

        const compra = {
            id_usuario: id_usuario,
            productos: productosConCantidad
        }

        try {
            const { data: { init_point } } = await fetchDatas({ method: 'POST', body: compra, patch: '/carrito' });
            window.open(init_point, '_blank');
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="lg:grid grid-cols-10 gap-5">
            <FormProvider {...method}>
                <form onSubmit={handleSubmit(onSubmit)} className="col-span-8">
                    {
                        cart?.map((item) => (
                            <CardProducto
                                key={item.id_producto}
                                id={item.id_producto}
                                nombre={item.nombre}
                                precio_compra={item.monto}
                                porcentaje_aumento={item.porcentaje_aumento}
                                imagenes={item.imagenes}
                            />
                        ))
                    }
                    {
                        cart.length > 0 ? <SendButton texto="Continuar Compra" /> : <p className="text-center text-3xl">Nada para mostrar... Agrega algo :)</p>
                    }
                </form>
                <div className="col-span-2">
                    <CardMontoTotalCarrito
                    />
                </div>
            </FormProvider>
        </div>
    )
}