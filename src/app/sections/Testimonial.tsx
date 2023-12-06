'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SlideButtons from '@/components/navigationButtons';
import reviews from '@/assets/data/ReviewData';

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="container flex scroll-m-20 items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-max md:gap-12 lg:min-h-[600px] lg:flex-row-reverse lg:gap-24"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <h2 className="order-1 mb-7  px-7 text-base uppercase tracking-wide text-section text-white max-sm:text-sm md:px-14 lg:px-28">
          client testimonials
        </h2>
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <p className="font-mcqueen text-xl font-light md:text-[40px] md:leading-[52.8px]">
              {review.review}
            </p>
            <h6 className="text-base font-normal ">{review.name}</h6>
          </SwiperSlide>
        ))}
        <SlideButtons />
      </Swiper>
    </section>
  );
}
