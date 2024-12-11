import { useParams } from "react-router-dom"
import { VerProducto } from "../../../components/features/dashboard/Producto/VerProducto"


export const VerProductoPage = () => {

    const { id } = useParams();
    const id_producto = parseInt(id);
    return (
        <VerProducto
            id={id_producto}
        />
    )
}