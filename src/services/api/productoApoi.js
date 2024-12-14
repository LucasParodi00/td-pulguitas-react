import { getBaseUrl, getHeaders } from "../config"
import { handleError } from "../handleError";
import { useConstructUrl } from "../useConstructUrl";


const baseUrl = getBaseUrl('producto');

export const setProducto = async (producto) => {
    const url = useConstructUrl(baseUrl); 
    
    const response = await fetch (url, {
        method: 'POST',
        headers:  {'Authorization': 'Bearer asdasd'},
        body: producto
    });

    const {message, data } = await handleError(response);

    return {message: message, producto: data}
}


export const updateProducto = async (id, producto) => {
    const url = useConstructUrl(baseUrl,`/${id}`);
    console.log(url);
    
    const response = await fetch (url, {
        method: 'PUT',
        headers: {'Authorization': 'Bearer asdasd'},
        body: producto
    });

    const { message, data} = await handleError(response);

    return {message: message, producto: data}
}