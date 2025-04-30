"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const GalleryProduct = ({ images }) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
        }}
      >
        {images.map((item) => (
          <SwiperSlide className="cursor-pointer" key={item.id}>
            <div>
              <Image
                className="w-full h-full"
                src={item || "/fallback-image.jpg"}
                alt={item.title || "image"}
                width={350}
                height={350}
                placeholder="blur"
                blurDataURL="/placeholder-image.jpg"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryProduct;
