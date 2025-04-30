"use client";
import React from "react";
import BannerFirst from "./BannerFirst";
import Banner2 from "./Banner2";
import Banner4 from "./Banner4";
import Banner3 from "./Banner3";

const Banner = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="grid grid-cols-12 gap-[25px]">
        <div className="col-span-12 xl:col-span-8">
          <BannerFirst />
        </div>
        <div className="hidden xl:flex xl:col-span-4">
          <Banner2 />
        </div>
      </div>
      <div className="hidden xl:grid grid-cols-12 gap-[25px]">
        <div className="hidden lg:flex col-span-4">
          <Banner3 />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Banner4 />
        </div>
      </div>
    </div>
  );
};

export default Banner;
