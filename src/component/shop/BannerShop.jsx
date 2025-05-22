import React from "react";
import Image from "next/image";

const BannerShop = () => {
  return (
    <div className="bg-[#f16422] bg-[url('/shop/bg-timer.png')] bg-cover bg-center bg-no-repeat h-[100px] flex items-center justify-start rounded-[10px] px-[20px]">
      <div>
        <div className="flex items-center gap-[15px]">
          <Image src="/shop/fire.svg" width={45} height={45} alt="fire" unoptimized/>
          <h1 className="text-[#fff] text-[22px] md:text-[25px] font-semibold">
            شگفت‌انگـــــیز‌های روز
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerShop;
