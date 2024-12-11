import { useEffect } from "react";
import { useState } from "react";


export const Carrusel = ({ imagenes = [], autoPlay = false, botones = true }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImg, setSelectedImg] = useState(imagenes[0]);
    const [loader, setLoader] = useState(false);

    const seleccionarImagen = (index, imagenes, next = true) => {
        setLoader(false);
        setTimeout(() => {
            const condicion = next ? selectedIndex < imagenes.length - 1 : selectedIndex > 0;
            const siguienteIndex =
                next ? condicion ? selectedIndex + 1 : 0
                    : condicion ? selectedIndex - 1 : imagenes.length - 1;
            setSelectedImg(imagenes[siguienteIndex]);
            setSelectedIndex(siguienteIndex);
        }, 500)
    }

    useEffect(() => {
        if (autoPlay || !botones) {
            const intervalo = setInterval(() => {
                seleccionarImagen(selectedIndex, imagenes);
            }, 2000);
            return () => clearInterval(intervalo);
        }
    })

    const anterior = () => {
        seleccionarImagen(selectedIndex, imagenes, false);
    };

    const siguiente = () => {
        seleccionarImagen(selectedIndex, imagenes);
    }

    if (imagenes.length == 0) return <p>No hay imagenes para mostrar</p>

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-lg">
            <img
                src={selectedImg}
                alt={'Pulguitas - PetShop' + selectedImg}
                loading="lazy"
                onLoad={() => setLoader(true)}
                className={`w-full h-full transition-opacity duration-[1000ms]  ${loader ? 'opacity-100' : 'opacity-0'} object-contain`}
            />
            {
                botones && (
                    <div className="flex justify-between absolute top-1/2 left-0 right-0">
                        <button className="font-bold text-2xl backdrop-blur-sm p-2 rounded-lg"
                            onClick={anterior}
                        >
                            {'<'}
                        </button>
                        <button className="font-bold text-2xl backdrop-blur-sm p-2 rounded-lg"
                            onClick={siguiente}
                        >
                            {'>'}
                        </button>
                    </div>
                )
            }

        </div>
    )
}