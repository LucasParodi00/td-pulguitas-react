

export const routesHelper = {
    productos: {
        ver: (id) => `/dashboard/productos/${id}`,
        editar: (id) => `/dashboard/productos/${id}/editar`,
        eliminar: (id) => `/dashboard/productos/${id}/eliminar`
    }
}