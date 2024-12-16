import { useEffect, useRef } from 'react';
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;

        if (swiperInstance) {
            swiperInstance.autoplay.stop();
            swiperInstance.autoplay.start();

            swiperInstance.slideTo(0);
        }
    }, [sliders]);

    return (
        <div className={`w-full ${className}`}>
            <Swiper
                ref={swiperRef}
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
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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

