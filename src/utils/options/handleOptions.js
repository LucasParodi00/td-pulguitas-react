import { useFetchApi } from "../../hook/useFetchApi";

export const handleOptions = async (resource = '', nombre = '',  dataValue = 'id', dataText = 'name') => {
    const { fetchDatas } = useFetchApi(resource);

    try {
        const { data } = await fetchDatas({ querys: { estado: true } });
        
        const items = data[nombre];
        const columns = items.map((item) => ({
            value: item[dataValue], 
            text: item[dataText],
        }));

        return columns;
    } catch (error) {
        console.error("Error fetching options:", error);
        return []; 
    }
};

