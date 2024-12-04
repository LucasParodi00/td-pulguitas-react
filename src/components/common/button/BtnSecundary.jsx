

export const BtnSecondary = ({ texto = 'Texto boton', ...props }) => {
    return (
        <button
            {...props}
            className="bg-azul-cielo py-3 px-2 lg:py-4 rounded-md hover:bg-azul-palido duration-500 "
        >
            {texto}
        </button>
    )
}