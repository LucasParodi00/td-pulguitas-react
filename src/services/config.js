


const URL_API = import.meta.env.VITE_API_URL;

export const getBaseUrl = (service) => {
    switch (service) {
        case 'categoria': 
        return`${URL_API}/categorias`;
        
        case 'mascota':
            return `${URL_API}/mascotas`;
            
            case 'producto': 
            return `${URL_API}/productos`;
            
            case 'auth':
                return`${URL_API}/auth`
                case 'mp':
                    return `${URL_API}/mp`
                    
                    default: throw new Error('Servicio no encontrado');
                }
            };
            
// export const getHeaders = () => ({
//     const token = localStorage.getItem('access_token') || null
//     'Authorization': `Bearer ${token}`, 
//     'Content-Type': 'application/json'
// })

export const getHeaders = () => {
    const token = localStorage.getItem('access_token') || null
    return (
        {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }
    )
}