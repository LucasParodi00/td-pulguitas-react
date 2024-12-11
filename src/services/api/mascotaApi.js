import { getBaseUrl, getHeaders } from "../config"
import { handleError } from "../handleError";
import { useConstructUrl } from "../useConstructUrl"

const baseUrl = getBaseUrl('mascota');

export const getMascotas = async () => {
    const url = useConstructUrl(baseUrl);
   
    const response = await fetch (url, {
        method: 'GET',
        headers: getHeaders()
    });

    const { data } = await handleError(response);

    return {
        mascotas: data.mascotas,
        total: data.total
    }
}

export const getMascota = async (id) => {
    const url = useConstructUrl(baseUrl, `/${id}`);

    const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders()
    });

    const { data } = await handleError(response);

    return {
        mascota: data
    }
}

export const setMascota = async (mascota) => {
    const url = useConstructUrl(baseUrl);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(mascota)
    });

    const { message } = await handleError(response);
    
    return {
        mascotas: message
    }
}

export const updateMascota = async (mascota, id) => {
    const url = useConstructUrl(baseUrl, `/${id}`);

    const response = await fetch (url, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(mascota)
    });

    const { message } = await handleError(response);

    return {
        mascota: message
    }
}
