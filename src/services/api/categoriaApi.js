import { getBaseUrl, getHeaders } from "../config";
import { handleError } from "../handleError";
import { useConstructUrl } from "../useConstructUrl";

const baseUrl = getBaseUrl('categoria');

export const getCategorias = async (filtros) => {
    const url = useConstructUrl(baseUrl, '', filtros);
    
    const response = await fetch (url, {
        method: 'GET',
        headers: getHeaders()
    });

    const { data } = await handleError(response);
    
    return { 
        categorias: data.categorias,
        total: data.total
    }
};

export const getCategoria = async (id) => {
    const url = useConstructUrl(baseUrl, `/${id}`);

    const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders()
    });

    const {data} = await handleError(response);

    return {
        categoria: data
    }
}

export const setCategoria = async (categoria) => {
    const url = useConstructUrl(baseUrl);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(categoria)
    });

    const { message } = await handleError(response);
    
    return {
        categorias: message
    }
}

export const updateCategoria = async (categoria, id) => {
    const url = useConstructUrl(baseUrl, `/${id}`);

    const response = await fetch (url, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(categoria)
    });

    const { message } = await handleError(response);

    return {
        categoria: message
    }
}
