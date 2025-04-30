import BtnAddToCart from "@/component/product/BtnAddToCart";
import GalleryProduct from "@/component/product/GalleryProduct";
import Container from "@/component/shared/container/Container";
import { getProduct } from "@/services/productBase";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const data = await getProduct(id);
  console.log(data);

  return (
    <div className="pt-[15px] pb-[30px] min-h-screen">
      <Container>
        <div className="border-t-[1px] border-b-[1px] border-[#0000000e]">
          <div className="flex flex-col lg:flex-row my-[50px]">
            <div className="w-full md:w-[60%] mx-auto lg:w-[35%] mb-[35px]">
              <GalleryProduct images={data.images} />
            </div>
            <div className="w-full lg:w-[35%] px-[20px] flex flex-col gap-[15px] mb-[20px] lg:mb-0">
              <div className="my-[10px]">
                <span className="text-[14px] ml-[5px]">دسته بندی:</span>
                <span className="text-[14px] text-[#19B16A] font-semibold">
                  {data.category}
                </span>
              </div>
              <div className="text-[15px] font-semibold">{data.brand}</div>
              <div className="text-[15px] font-semibold">{data.title}</div>
              <div className="my-[10px]">
                <span className="text-[14px] md:text-[16px] px-[7px] py-[4px] border-[2px] border-[#19B16A] rounded-[3px] text-[#19B16A] font-semibold">
                  +تخفیف بیشتر در گردونه آف زمستون
                </span>
              </div>
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[15px]">
                  <span>سایز:</span>
                  <div className="flex gap-4">
                    {data.size &&
                      data.size.map((item, i) => {
                        return (
                          <span
                            className="flex justify-center items-center w-[50px] h-[50px] text-[13px] md:text-[14px] font-semibold bg-[#fff] border-[1px] border-[#00000022] cursor-pointer"
                            key={i}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <span>رنگ:</span>
                  <div className="flex gap-4">
                    {data?.colors && Array.isArray(data.colors) ? (
                      data.colors.map((item, index) => (
                        <span
                          key={index}
                          className="w-[35px] h-[35px] border-[1px] border-gray-400 rounded-full shadow-sm cursor-pointer"
                          style={{ backgroundColor: item.color }}
                          title={item.name}
                        />
                      ))
                    ) : (
                      <span className="text-gray-500">رنگی موجود نیست</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center py-[10px] px-[15px] rounded-[3px] bg-[#F9FAFB] border-[1px] border-[#ededee] gap-[10px] my-[20px]">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 31"
                    fill="none"
                    width="24"
                    height="24"
                  >
                    <defs>
                      <radialGradient
                        id="baniclub_svg_b"
                        cx="-0.01"
                        cy="0.484"
                        r="1.357"
                        gradientTransform="matrix(-2 0 0 1 -16.423 0)"
                      >
                        <stop offset="0.02" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#f9a825" />
                      </radialGradient>
                      <radialGradient
                        id="baniclub_svg_c"
                        cx="0.99"
                        cy="0.484"
                        r="1.357"
                        gradientTransform="matrix(-2 0 0 1 -13.423 0)"
                      >
                        <stop offset="0.02" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#f9a825" />
                      </radialGradient>
                      <clipPath id="baniclub_svg_d">
                        <path
                          d="M112.244-2245.677a3.027 3.027 0 0 1 3.525-3.252 10.6 10.6 0 0 1 2.127.769c.367 1.58.537 3.2.9 4.79a2.47 2.47 0 0 1 2.09.021 1.97 1.97 0 0 1 .943 2.492 4.65 4.65 0 0 1-1.529 1.58c-.692.552-1.347 1.149-2.031 1.711-.631-3.044-1.07-6.128-1.674-9.175-.265-.74-1.335-.488-1.488.208.671 3.376 1.212 6.777 1.831 10.163.057.368.225.828.651.9.349.082.627-.171.878-.364 1.251-1.04 2.529-2.045 3.776-3.088a3.5 3.5 0 0 0 1.131-3.634 3.64 3.64 0 0 0-3.361-2.542 59 59 0 0 1-.665-3.859c3.006 1.089 6.023 2.151 9.029 3.239a2.983 2.983 0 0 1 1.474 4.015 4.9 4.9 0 0 1-1.247 1.335c-2.89 2.389-5.811 4.742-8.672 7.165a4.12 4.12 0 0 1-2.566 1.287 2.984 2.984 0 0 1-3.092-2.482q-1.04-5.634-2.03-11.279"
                          transform="translate(-112.214 2248.986)"
                        />
                      </clipPath>
                      <clipPath id="baniclub_svg_e">
                        <path
                          d="M0-656.944h256.68V-2289H0Z"
                          transform="translate(0 2289.001)"
                        />
                      </clipPath>
                      <linearGradient
                        id="baniclub_svg_a"
                        x1="-2.242"
                        x2="-2.242"
                        y1="0.467"
                        y2="1.309"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0.02" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#f9a825" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(-0.372 -0.179)">
                      <circle
                        cx="15.5"
                        cy="15.5"
                        r="15.5"
                        style={{ fill: "rgb(253, 216, 53)" }}
                      />
                      <circle
                        cx="14.191"
                        cy="14.191"
                        r="14.191"
                        transform="translate(1.487 1.379)"
                        style={{ fill: "rgb(251, 192, 45)" }}
                      />
                      <circle
                        cx="14.191"
                        cy="14.191"
                        r="14.191"
                        transform="translate(1.487 1.379)"
                        style={{
                          mixBlendMode: "multiply",
                          isolation: "isolate",
                          fill: "url(#baniclub_svg_a)",
                        }}
                      />
                      <g
                        style={{
                          mixBlendMode: "multiply",
                          isolation: "isolate",
                        }}
                      >
                        <path
                          d="M339.585 42.88a13.926 13.926 0 0 0-13.645-14.19 14.19 14.19 0 0 1 0 28.381 13.925 13.925 0 0 0 13.645-14.191"
                          transform="translate(-310.262 -27.31)"
                          style={{
                            fill: "url(#baniclub_svg_b)",
                            mixBlendMode: "multiply",
                            isolation: "isolate",
                          }}
                        />
                        <path
                          d="M45.13 28.67a13.926 13.926 0 0 0-13.644 14.19A13.926 13.926 0 0 0 45.13 57.051a14.19 14.19 0 0 1 0-28.381"
                          transform="translate(-29.452 -27.291)"
                          style={{
                            fill: "url(#baniclub_svg_c)",
                            mixBlendMode: "multiply",
                            isolation: "isolate",
                          }}
                        />
                      </g>
                      <g>
                        <g
                          transform="translate(8.145 8.667)"
                          style={{ clipPath: "url(#baniclub_svg_d)" }}
                        >
                          <g
                            transform="translate(-80.008 -28.53)"
                            style={{ clipPath: "url(#baniclub_svg_e)" }}
                          >
                            <path
                              d="M107.214-2253.985h25.065v24.2h-25.065Z"
                              transform="translate(-30.77 2278.951)"
                              style={{ fill: "rgb(250, 179, 38)" }}
                            />
                          </g>
                        </g>
                        <g
                          transform="translate(7.777 8.116)"
                          style={{ clipPath: "url(#baniclub_svg_d)" }}
                        >
                          <g
                            transform="translate(-80.008 -28.53)"
                            style={{ clipPath: "url(#baniclub_svg_e)" }}
                          >
                            <path
                              d="M107.214-2253.985h25.065v24.2h-25.065Z"
                              transform="translate(-30.77 2278.951)"
                              style={{ fill: "rgb(252, 217, 63)" }}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="text-[14px] md:text-[16px]">
                  با خرید این محصول{" "}
                  <strong className="text-[#FBC02D]">329</strong> بانی‌کوین به
                  شما تعلق می‌گیرد.
                </span>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="w-full flex flex-row lg:flex-col gap-[15px] justify-between lg:justify-start items-center lg:items-end bg-[#F8F8F8] rounded-[5px] md:rounded-[10px] py-[25px] px-[20px]">
                <div className="flex flex-col gap-[10px] order-1 lg:order-0">
                  {data.discount > 0 && (
                    <div className="flex items-center justify-end gap-[5px]">
                      <div className="text-[#6d6d6d]">
                        <span className="text-[14px] md:text-[16px] line-through">
                          {data.price}
                        </span>
                        <span>تومان</span>
                      </div>
                      <div className="px-[10px] py-[5px] bg-[#101010] text-white text-[13px] font-semibold flex justify-center items-center rounded-[15px]">
                        {data.discount}%
                      </div>
                    </div>
                  )}
                  <div className="text-[#19B16A] flex items-center justify-end gap-[5px]">
                    <span className="text-[16px] md:text-[22px] font-semibold">
                      {data.discount > 0
                        ? (
                            data.price -
                            (data.price * data.discount) / 100
                          ).toLocaleString("fa-IR")
                        : data.price.toLocaleString("fa-IR")}
                    </span>
                    <span>
                      <Image
                        src="/icons/toman.svg"
                        width={20}
                        height={20}
                        alt="toman"
                      />
                    </span>
                  </div>
                </div>
                <div className="w-[60%] lg:w-full order-0 lg:order-1">
                  <BtnAddToCart
                    product={{
                      ...data,
                      img:
                        data.images && data.images.length > 0
                          ? data.images[0]
                          : "/default-image.jpg",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 pb-[20px]">
            <div className="col-span-6 md:col-span-3 flex flex-col gap-2 items-center my-[20px] md:my-0">
              <span>
                <Image
                  src="/icons/secure1.svg"
                  width={40}
                  height={40}
                  alt="service1"
                />
              </span>
              <span className="text-[14px]">ضمانت بازگشت کالا</span>
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col gap-2 items-center my-[20px] md:my-0">
              <span>
                <Image
                  src="/icons/trusted1.svg"
                  width={40}
                  height={40}
                  alt="service1"
                />
              </span>
              <span className="text-[14px]">ضمانت اصالت کالا</span>
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col gap-2 items-center my-[20px] md:my-0">
              <span>
                <Image
                  src="/icons/customer-support1.svg"
                  width={40}
                  height={40}
                  alt="support1"
                />
              </span>
              <span className="text-[14px]">خدمات پس از خرید</span>
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col gap-2 items-center my-[20px] md:my-0">
              <span>
                <Image
                  src="/icons/Space1.svg"
                  width={40}
                  height={40}
                  alt="Space1"
                />
              </span>
              <span className="text-[14px]">تحویل سریع و آسان</span>
            </div>
          </div>
        </div>
        <div className="py-[60px]">
          <div className="border-b-[1px] border-[#0000000e] pb-[15px]">
            <span className="px-[20px] mb-[15px] border-b-[2px] border-[#19B16A] pb-[15px]">
              مشخصات
            </span>
          </div>
          <div>
            {Object.entries(data.featuresproduct).map(([key, value]) => (
              <div className="flex py-[10px]" key={key}>
                <div className="w-[45%] sm:w-[30%] md:w-[20%] lg:w-[15%] text-[13px] text-[#0000009e] py-[15px]">
                  {key}
                </div>
                <div className="w-[55%] sm:w-[70%] md:w-[80%] lg:w-[85%] text-[13px] border-b-[1px] border-[#0000000e] py-[15px]">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
