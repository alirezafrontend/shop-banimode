"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerCenter = () => {
  return (
    <div className="flex justify-center items-center py-[50px]">
      <Link href="/shop">
        <Image
          className="rounded-[20px] cursor-pointer"
          src="/banner/banner-center.webp"
          width={1600}
          height={400}
          alt="banner-center"
        />
      </Link>
    </div>
  );
};

export default BannerCenter;
