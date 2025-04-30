"use client";
import Link from "next/link";
import React from "react";
import Button from "../core/Button";
import Container from "../shared/container/Container";
import CarouselBrand from "./CarouselBrand";

const brand = [
  {
    id: 1,
    src: "/brandHome/brand1.jpg",
  },
  {
    id: 2,
    src: "/brandHome/brand2.jpg",
  },
  {
    id: 3,
    src: "/brandHome/brand3.jpg",
  },
  {
    id: 4,
    src: "/brandHome/brand4.jpg",
  },
  {
    id: 5,
    src: "/brandHome/brand5.jpg",
  },
  {
    id: 6,
    src: "/brandHome/brand6.jpg",
  },
  {
    id: 7,
    src: "/brandHome/brand7.jpg",
  },
  {
    id: 8,
    src: "/brandHome/brand8.jpg",
  },
  {
    id: 9,
    src: "/brandHome/brand9.jpg",
  },
  {
    id: 10,
    src: "/brandHome/brand10.jpg",
  },
  {
    id: 11,
    src: "/brandHome/brand11.jpg",
  },
  {
    id: 12,
    src: "/brandHome/brand12.jpg",
  },
  {
    id: 13,
    src: "/brandHome/brand13.jpg",
  },
  {
    id: 14,
    src: "/brandHome/brand14.jpg",
  },
  {
    id: 15,
    src: "/brandHome/brand15.jpg",
  },
  {
    id: 16,
    src: "/brandHome/brand16.jpg",
  },
  {
    id: 17,
    src: "/brandHome/brand17.jpg",
  },
  {
    id: 18,
    src: "/brandHome/brand18.jpg",
  },
  {
    id: 19,
    src: "/brandHome/brand19.jpg",
  },
  {
    id: 20,
    src: "/brandHome/brand20.jpg",
  },
  {
    id: 21,
    src: "/brandHome/brand21.jpg",
  },
  {
    id: 22,
    src: "/brandHome/brand22.jpg",
  },
];

const BrandHome = () => {
  return (
    <div className="bg-[#F9F9F9] py-[50px]">
      <Container>
        <div className="flex flex-col">
          <div className="flex justify-center items-center mb-[50px]">
            <h2 className="text-[24px] md:text-[32px]">برترین برندها در بانی‌مد</h2>
          </div>
          <div className="mb-[50px]">
            <CarouselBrand products={brand} />
          </div>
          <div className="flex justify-center">
            <Link className="w-[60%] lg:w-[40%] xl:w-[30%]" href="/shop">
              <Button className="flex justify-center items-center py-[10px] px-[10px] rounded-[20px] text-[#00BF6F] hover:border-[#00BF6F] transition-colors duration-200 bg-transparent border-[1px] border-gray-300 w-full">
                مشاهده همه
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandHome;
