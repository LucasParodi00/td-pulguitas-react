



export const categoryConverter = (data) => {
    return {
        nombre: data.nombre,
        estado: data.estado == 'true' || data.estado == '1'
    }
} 