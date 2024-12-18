import { useEffect, useRef, useState } from 'react';
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useLocation } from 'react-router-dom';

import 'swiper/css';

export const CarruselInfinito = ({
    sliders = [],
    slidesPerView = 1.5,
    speed = 2000,
    autoplayDelay = 0,
    spaceBetween = 20,
    centeredSlides = true,
    breakpoints = {
        640: {
            slidesPerView: 3,
            centeredSlides: false
        },
        768: {
            slidesPerView: 5,
            centeredSlides: false
        }
    },
    className = ''
}) => {
    const location = useLocation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [location.pathname, sliders]);

    return (
        <div className={`w-full ${className}`}>
            <Swiper
                key={key}
                modules={[Autoplay]}
                slidesPerView={slidesPerView}
                centeredSlides={centeredSlides}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                    stopOnLastSlide: false
                }}
                speed={speed}
                loop={true}
                spaceBetween={spaceBetween}
                breakpoints={breakpoints}
            >
                {sliders.map((logo, index) => (
                    <SwiperSlide key={`${logo}-${index}`}>
                        <div className="rounded-lg overflow-hidden border shadow-marca my-2 bg-white">
                            <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="max-w-full object-contain h-full m-auto"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}