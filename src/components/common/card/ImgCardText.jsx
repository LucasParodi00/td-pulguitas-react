


export const CardImgDerechaText = ({ imagen = '', titulo = 'Titulo del card', parrafo = 'Contenido', extraClass = '' }) => {
    return (
        <div>
            <div className="grid gap-10 sm:grid-cols-3 text-gray-600">
                <div className="flex flex-col gap-3 sm:col-span-2 items-center justify-center">
                    <h1 className="text-center text-2xl">{titulo}</h1>
                    <p className="font-extralight text-sm lg:text-lg">{parrafo}</p>
                </div>
                <div className={`rounded-lg overflow-hidden h-64 ${extraClass}`}>
                    <img
                        src={imagen}
                        alt={`Pulguitas - PetShop -`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}



export const CardImgIzquierdaText = ({ imagen = '', titulo = 'Titulo del card', parrafo = 'Contenido', extraClass = '' }) => {
    return (
        <div>
            <div className="grid gap-10 sm:grid-cols-3 text-gray-600">
                <div className={`rounded-lg overflow-hidden h-64 ${extraClass}`}>
                    <img
                        src={imagen}
                        alt={`Pulguitas - PetShop -`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2 items-center justify-center">
                    <h1 className="text-center text-2xl">{titulo}</h1>
                    <p className="font-extralight text-sm lg:text-lg">{parrafo}</p>
                </div>
            </div>
        </div>
    )
}