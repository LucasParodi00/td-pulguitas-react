import { getBaseUrl, getHeaders } from "../services/config"
import { handleError } from "../services/handleError";
import { useConstructUrl } from "../services/useConstructUrl";


export const useElimination = async ({id, url, patch = '', querys = '', mehtod = '', body = null}) => {
    const baseUrl = getBaseUrl(url);
    const url = useConstructUrl(baseUrl, patch, querys);
    const response = fetch (url, {
        method: mehtod,
        headers: getHeaders(),
        body: JSON.stringify(body),
    });

    const { data, message } = await handleError(response);

    return { data, message }
}

