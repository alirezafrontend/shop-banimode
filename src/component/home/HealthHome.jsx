"use client";
import Image from "next/image";
import React from "react";
import Button from "../core/Button";
import Link from "next/link";
import CarouselProduct from "./CarouselProduct";

const HealthHome = ({ products }) => {
  return (
    <div className="flex flex-col gap-12 py-[100px]">
      <div className="flex justify-center mb-[30px]">
        <h2 className="text-[24px] md:text-[32px]">داغ ترین های سلامت و زیبایی</h2>
      </div>
      <div>
        <CarouselProduct products={products} src="health" />
      </div>
      <div className="flex justify-center">
        <Link className="w-[60%] lg:w-[40%] xl:w-[30%]" href="/health">
          <Button className="flex justify-center items-center py-[10px] px-[10px] rounded-[20px] text-[#00BF6F] hover:border-[#00BF6F] transition-colors duration-200 bg-transparent border-[1px] border-gray-300 w-full">
            مشاهده همه
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HealthHome;
