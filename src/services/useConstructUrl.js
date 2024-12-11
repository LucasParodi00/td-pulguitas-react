


const parametrosValidos = (param) => typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean';

export const useConstructUrl = (baseURL, path = '', params = {}) => {
    const url = new URL(`${baseURL}${path}`);
    
    Object.keys(params).forEach(key => {
        if (parametrosValidos(params[key])) {
            url.searchParams.append(key, params[key]);
        }
    });

    return url;
};
