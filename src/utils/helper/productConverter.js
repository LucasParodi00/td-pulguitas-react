

export const productConverter = (data) => {
    const formData = new FormData();

    formData.append('nombre', data.nombre);
    formData.append('id_categoria', parseInt(data.id_categoria));
    formData.append('estado', data.estado == '1' || data.estado == true || data.estado == 'true');
    formData.append('descripcion', data.descripcion);

    data.imagenes.forEach((imagen, index) => {
        if (imagen.file instanceof File) {
            formData.append(`imagenes`, imagen.file, `imagen_${index + 1}`);
        }
    });

    data.presentacion.forEach((presentacion, index) => {
        presentacion.id_presentacion ? formData.append(`presentacion[${index}][id_presentacion]`, parseInt(presentacion.id_presentacion)) : '';
        formData.append(`presentacion[${index}][nombre]`, presentacion.nombre_presentacion);
        formData.append(`presentacion[${index}][precio_compra]`, parseFloat(presentacion.precio_compra));
        formData.append(`presentacion[${index}][porcentaje_aumento]`, parseFloat(presentacion.porcentaje_aumento));
        formData.append(`presentacion[${index}][stock]`, parseInt(presentacion.stock));
    });
    console.log(formData);
    
    return formData;
};