

export const categoryValidation = {
    nombre: {
        required: 'El nombre es obligatorio',
        maxLenght: {
            value: 100,
            message: 'Maximo 100 caracteres'
        },
        minLenght: {
            value: 5,
            message: 'Minimo 5 caracteres'
        }
    }
}