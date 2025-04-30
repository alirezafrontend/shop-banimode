"use client";
import Image from "next/image";
import React from "react";
import Button from "../core/Button";
import Link from "next/link";
import CarouselProduct from "./CarouselProduct";

const SalesProduct = ({ products }) => {
  return (
    <div className="flex flex-col gap-12 pt-[20px] pb-[50px] md:py-[50px] lg:py-[80px]">
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/salesHome/salesBanner.png"
          width={250}
          height={200}
          alt="salesBanner"
        />
      </div>
      <div>
        <CarouselProduct products={products} src="shop" />
      </div>
      <div className="flex justify-center">
        <Link className="w-[60%] lg:w-[40%] xl:w-[30%]" href="/shop">
          <Button className="flex justify-center items-center py-[10px] px-[10px] rounded-[20px] text-[#00BF6F] hover:border-[#00BF6F] transition-colors duration-200 bg-transparent border-[1px] border-gray-300 w-full">
            مشاهده همه
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SalesProduct;
