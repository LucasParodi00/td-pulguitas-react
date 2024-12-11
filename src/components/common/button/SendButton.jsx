



export const SendButton = ({ texto = 'Texto a mostrar', ...props }) => {
    return (
        <button
            {...props}
            className="bg-verde-menta py-3 px-2 lg:py-4 rounded-md hover:bg-verde-suave duration-500 w-full"
        >
            {texto}
        </button>
    )
}