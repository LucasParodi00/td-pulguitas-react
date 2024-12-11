


const URL_API = import.meta.env.VITE_API_URL;
export const token = localStorage.getItem('access_token') || null;

export const getBaseUrl = (service) => {
    switch (service) {
        case 'categoria': 
            return`${URL_API}/categorias`;
        
        case 'mascota':
            return `${URL_API}/mascotas`;

        case 'producto': 
            return `${URL_API}/productos`;

        default: throw new Error('Servicio no encontrado');
    }
};

export const getHeaders = () => ({
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
})