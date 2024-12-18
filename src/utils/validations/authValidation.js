




export const authValidation = {
    correo: {
        required: 'Campo obligatorio',
        validate: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Correo inválido'
    },
    password: {
        required: 'Campo requerido'
    },
    nombre: {
        required: 'Nombre es obligatorio',
        maxLength: {
            value: 100,
            message: 'Debe ser menor a 100 caracteres'
        },
        minLength: {
            value: 3,
            message: 'Debeb ser mayor a 5 caracteres'
        }
    },
    apellido: {
        required: 'Apellido es obligatorio',
        maxLength: {
            value: 100,
            message: 'Debe ser menor a 100 caracteres'
        },
        minLength: {
            value: 3,
            message: 'Debeb ser mayor a 5 caracteres'
        }
    }
}