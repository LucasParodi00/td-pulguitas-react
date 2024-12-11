import { getCategoria } from "../../../../services/api/categoriaAPi"


export const useIsEditionCategory = async (id) => {
    const { categoria } = await getCategoria(id);
    return categoria;
}