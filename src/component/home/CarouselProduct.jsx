"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const CarouselProduct = ({ products, src }) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div className="text-center py-4">محصولی برای نمایش وجود ندارد</div>;
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
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
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {products.map((item) => (
        <SwiperSlide className="w-full h-[500px]" key={item.id}>
          <Link
            href={`/${src}/${item.id}`}
            aria-label={`مشاهده محصول ${item.title || "محصول"}`}
          >
            <div className="relative img-amazing-slider rounded-2xl h-[400px] border-2 border-[#0000000f]">
              <Image
                className="w-full h-full object-cover rounded-2xl"
                src={item.images[0] || "/fallback-image.jpg"}
                alt={item.title || "image"}
                width={250}
                height={250}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/placeholder-image.jpg"
                loading="lazy"
              />
              {item.discount && (
                <span className="flex justify-center items-center absolute top-2 left-4 text-[#fff] bg-[#f16422] w-[40px] h-[40px] rounded-full">
                  %{item.discount}
                </span>
              )}
            </div>
          </Link>
          <div className="content-amazing mt-[10px]">
            <div className="flex justify-between">
              <Link
                href={`/${src}/${item.id}`}
                aria-label={`مشاهده برند ${item.brand || "ناشناخته"}`}
              >
                <div className="brand text-[16px] font-semibold">
                  <h4>{item.brand || "بدون برند"}</h4>
                </div>
              </Link>
              <div className="orgPrice text-[13px] line-through text-[#666666]">
                <p>{(item.price || 0).toLocaleString("fa-IR")} تومان</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <Link
                className="flex w-[60%]"
                href={`/product/${item.id}`}
                aria-label={`مشاهده محصول ${item.title || "محصول"}`}
              >
                <div className="brand text-[13px] text-[#666666] line-clamp-1">
                  <p>{item.title || "بدون عنوان"}</p>
                </div>
              </Link>
              <div className="orgPrice text-[14px] text-[#00BF6F] w-[40%] flex justify-end">
                <p>
                  {(item.price && item.discount
                    ? item.price - (item.price * item.discount) / 100
                    : item.price || 0
                  ).toLocaleString("fa-IR")}{" "}
                  تومان
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default CarouselProduct;
