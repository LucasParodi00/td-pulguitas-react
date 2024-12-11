
export const productsValidation = {
    id_categoria: {
        required: 'La categoria es obligatoria',
        validate: value => Number.isInteger(parseInt(value)) || 'Selecciona una categoria valida'
    },
    id_producto: {
        required: 'Es obligatorio',
        validate: value => Number.isInteger(parseInt(value)) || 'Selecciona un producto valido'
    },
    nombre: {
        required: 'Campo obligatorio', 
        maxLength: {
            value: 100,
            message: 'Debe ser menor a 100 caracteres'
        },
        minLength: {
            value: 3,
            message: 'Debeb ser mayor a 5 caracteres'
        }
    },
    descripcion: {
        required: 'Campo obligatorio', 
        maxLength: {
            value: 1000,
            message: 'Debe ser menor a 1000 caracteres'
        },
        minLength: {
            value: 5,
            message: 'Debeb ser mayor a 5 caracteres'
        }
    },
    precio_compra: {
        required:'Campo obligatorio',
        validate: value => value === '' || !isNaN(value) || 'Debe ser un número válido'
    },
    porcentaje_aumento: {
        required:'Campo obligatorio',
        validate: value => value === '' || !isNaN(value) || 'Debe ser un número válido'
    },
    stock: {
        required: 'El stock es obligatorio',
        validate: value => value === '' || Number.isInteger(parseInt(value)) || 'El stock debe ser un número entero'
    },
}