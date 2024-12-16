import { useCallback } from "react";
import { useState } from "react"
import { getBaseUrl, getHeaders } from "../services/config";
import { useConstructUrl } from "../services/useConstructUrl";
import { handleError } from "../services/handleError";

 
export const useFetchApi = (resource) => {
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const fetchDatas = useCallback ( async ({ method = 'GET', body = null, patch = '', id = '', querys = ''}) => {
        setLoading(true);
        setError(null);
        try {
            const baseUrl = getBaseUrl(resource);
            const url = useConstructUrl(baseUrl, `${patch}/${id}`, querys);
            console.log(url);
            
            const response = await fetch (url, {
                method,
                headers: getHeaders(),
                body: body ? JSON.stringify(body) : undefined
            });

            const {data, message} = await handleError(response);

            setLoading(false);
            return {data, message}
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocurrio un error inesperado');
            throw err;
        }
    }, [resource]);

    return {fetchDatas, error, loading}
};

