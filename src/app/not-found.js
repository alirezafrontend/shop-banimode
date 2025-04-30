import Button from "@/component/core/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center bg-[#f9f9f9] min-h-screen pt-[80px] pb-[60px]">
      <div className="flex justify-center pt-[30px]">
        <Image
          className="w-[300px] lg:w-[400px]"
          src="/icons/404.svg"
          width={200}
          height={200}
          alt="404"
        />
      </div>
      <div className="flex justify-center text-[20px] md:text-[26px] font-semibold my-[40px]">
        صفحه مورد نظر شما پیدا نشد
      </div>
      <Link href="/">
        <Button className="w-[190px] md:w-[210px] h-[50px] md:h-[60px] flex justify-center items-center text-[#fff] text-[16px] md:text-[18px] rounded-[10px]">
          صفحه اصلی
        </Button>
      </Link>
    </div>
  );
}
