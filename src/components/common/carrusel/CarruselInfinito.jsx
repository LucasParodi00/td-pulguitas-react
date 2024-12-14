import { Autoplay, Virtual } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/virtual'; // Importa los estilos de virtual slides


export const CarruselInfinito = ({ sliders = [] }) => {


    return (
        <div className="">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1.5}
                centeredSlides={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    stopOnLastSlide: false
                }}
                speed={2000}
                loop={true}
                spaceBetween={20}
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
                    sliders.map((logo, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <div className="rounded-lg overflow-hidden border shadow-marca my-2 bg-white">
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="max-w-full object-contain h-full m-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}