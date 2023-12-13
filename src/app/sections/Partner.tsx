'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partner() {
  const partnerSlide = [
    '/images/partner01.png',
    '/images/partner03.jpeg',
    '/images/partner05.png',
    '/images/partner04.png',
    '/images/partner06.png',
  ];
  return (
    <section className="container flex scroll-m-20 items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-5 max-md:py-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={4}
      >
        {partnerSlide.map((image, idx) => (
          <SwiperSlide key={idx} className="p-2">
            <img src={image} alt="partner" className="h-16 w-16" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
