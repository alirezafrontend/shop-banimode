"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="mySwiper rounded-[20px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="rounded-[20px]">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={600}
            priority={index === 0}
            className="rounded-[20px]"
            unoptimized
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next hidden lg:block"></div>
      <div className="swiper-button-prev hidden lg:block"></div>
    </Swiper>
  );
};

export default Slider;
