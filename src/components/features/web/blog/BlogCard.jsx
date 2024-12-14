


export const BlogCard = ({ titulo = 'Titulo blog', fecha = '13/12/2024', texto = 'Texto del blog', imagen = '' }) => {
    return (
        <div className="shadow-card rounded-lg overflow-hidden max-w-[375px]">
            <div>
                <img
                    src={imagen}
                    alt={`Pet Shop Pulguitas - Blog - ${titulo}`}
                    className="w-full object-contain max-h-96"
                />
            </div>
            <div className="py-5 px-7 flex flex-col gap-2">
                <h3 className="uppercase">{titulo}</h3>
                <p className="line-clamp-6 font-extralight text-sm mb-2">{texto}</p>
                <span className="font-extralight block text-center text-xs text-gray-400">{fecha}</span>
            </div>
        </div>
    )
}