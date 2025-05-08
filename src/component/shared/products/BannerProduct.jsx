"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const BannerProduct = ({ bannerProducts }) => {
  if (
    !bannerProducts ||
    !Array.isArray(bannerProducts) ||
    bannerProducts.length === 0
  ) {
    return <div className="text-center py-4">محصولی برای نمایش وجود ندارد</div>;
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={8}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        760: { slidesPerView: 5 },
        1280: { slidesPerView: 7 },
      }}
    >
      {bannerProducts.map((item) => (
        <SwiperSlide className="w-full h-[240px]" key={item.id}>
          <div className="relative flex flex-col justify-center items-center gap-[15px] img-amazing-slider rounded-2xl h-[240px] bg-[rgb(245 245 247)]">
            <div className="flex justify-center items-center w-full h-[85%] cursor-pointer bg-[#fff] border-[2px] border-[#f5f5f7] rounded-[5px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={item.src || "/fallback-image.jpg"}
                alt={item.title || "image"}
                width={100}
                height={150}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 15vw"
                placeholder="blur"
                blurDataURL="/placeholder-image.jpg"
                loading="lazy"
              />
            </div>
            <span className="text-[14px] h-[15%]">{item.title}</span>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default BannerProduct;
