"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const CarouselBrand = ({ products }) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div className="text-center py-4">محصولی برای نمایش وجود ندارد</div>;
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={9}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1280: { slidesPerView: 8 },
      }}
    >
      {products.map((item) => (
        <SwiperSlide className="w-full h-[500px]" key={item.id}>
          <div className="relative img-amazing-slider rounded-2xl h-[60px]">
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={item.src || "/fallback-image.jpg"}
              alt={item.title || "image"}
              width={100}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 15vw"
              placeholder="blur"
              blurDataURL="/placeholder-image.jpg"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default CarouselBrand;
