import { useState, useEffect } from "react";
import { useFetchApi } from "./useFetchApi";

export const useFetchOptions = (resource = '', nombre = '', dataValue = 'id', dataText = 'name') => {
    const { fetchDatas } = useFetchApi(resource);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const { data } = await fetchDatas({ querys: { estado: true } });
                const items = data[nombre];

                if (items) {
                    const columns = items.map((item) => ({
                        value: item[dataValue],
                        text: item[dataText],
                    }));
                    setOptions(columns);
                } else {
                    console.warn(`El campo "${nombre}" no existe en los datos obtenidos.`);
                }
            } catch (error) {
                console.error("Error fetching options:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOptions();
    }, [fetchDatas, nombre, dataValue, dataText]);

    return { options, loading };
};
