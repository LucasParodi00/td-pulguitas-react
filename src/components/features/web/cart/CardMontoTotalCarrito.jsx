import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { AuthContext } from "../../../../auth/context/AuthContext";

export const CardMontoTotalCarrito = () => {
    const { cart } = useContext(AuthContext)
    const { watch } = useFormContext();

    const calcularTotal = () => {
        return cart.reduce((total, item) => {
            const cantidad = watch(`cantidad_${item.id_producto}`) || 1;
            const subtotal = cantidad * (item.monto * (1 + item.porcentaje_aumento / 100));
            return total + subtotal;
        }, 0);
    }

    const calcularTotalProductos = () => {
        return cart.reduce((total, item) => {
            const cantidad = watch(`cantidad_${item.id_producto}`) || 1;
            return total + parseInt(cantidad);
        }, 0);
    }

    return (
        <div className=" border p-2 grid gap-16 font-extralight rounded-lg">
            <h2 className="text-center font-semibold">Resumen de compra</h2>
            <div className="flex justify-between">
                <span>Productos:</span>
                <span>{calcularTotalProductos()}</span>
            </div>
            <div className="flex justify-between ">
                <span>Total:</span>
                <span className="text-2xl ">$ {calcularTotal().toFixed(2)}</span>
            </div>
        </div>
    )
}