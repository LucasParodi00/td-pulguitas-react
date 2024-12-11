




export const handleError = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`${errorData.message || 'Error desconocido'} - ${errorData.data || 'Sin detalles'}`);
    }
    return response.json();
}
