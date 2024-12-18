import { Autoplay } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const Carrusel3d = ({ sliders = [] }) => {
    const generateRandomNumber = () => {
        const min = 5;
        const max = 30;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={1.5}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        centeredSlides: false
                    },
                    768: {
                        slidesPerView: 5,
                        centeredSlides: false
                    }
                }}
            >
                {
                    sliders?.map((item) => {
                        const precio = item?.presentaciones[0]?.precio_compra + (item?.presentaciones[0]?.precio_compra * item?.presentaciones[0]?.porcentaje_aumento / 100);
                        const descuento = generateRandomNumber();
                        return (
                            <SwiperSlide key={item.id_producto}>
                                <div className="text-xs w-full py-2 text-center h-72 bg-white rounded-lg relative">
                                    <img src={item.imagenes?.[0]?.url} alt="" className="object-contain h-52 w-full" />
                                    <p className="line-clamp-2 mt-2 hover:text-blue-500 text-black duration-200">{item.nombre}</p>
                                    <p className="font-extralight text-lg text-left px-2">$ {parseFloat(precio).toFixed(2)}</p>
                                    <div className="absolute top-4 right-1">
                                        <span className="bg-green-600 text-white p-2 rounded-3xl">{descuento}% OFF</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </div>
    )
}