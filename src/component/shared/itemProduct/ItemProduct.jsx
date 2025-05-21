import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemProduct = ({
  href,
  src1,
  src2,
  title,
  brand,
  discount,
  price,
  id,
}) => {
  return (
    <div>
      <Link href={`/${href}/${id}`}>
        <div className="relative img-amazing-slider rounded-[8px] h-auto border-2 border-[#0000000f]">
          <Image
            className="w-full object-cover rounded-[8px] transition-opacity duration-300 ease-in-out"
            src={src1}
            alt={title}
            width={250}
            height={250}
            loading="lazy"
          />
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            src={src2}
            alt={title}
            width={250}
            height={250}
            loading="lazy"
          />
          {discount > 0 && (
            <span className="flex justify-center items-center absolute top-2 left-4 text-[#fff] bg-[#f16422] w-[40px] h-[40px] rounded-full">
              %{discount}
            </span>
          )}
        </div>
      </Link>
      <div className="content-amazing mt-[10px]">
        <div className="flex">
          <Link className="flex w-full" href={`/${href}/${id}`}>
            <div className="brand text-[14px] md:text-[15px] text-[#2f2f2f] font-semibold h-[60px]">
              <p className="leading-[26px] line-clamp-2">{title}</p>
            </div>
          </Link>
        </div>
        <div className="sm:flex items-center sm:gap-[10px] md:gap-[15px]">
          {discount > 0 && (
            <div className="w-full sm:w-auto flex justify-start text-[13px] md:text-[14px] line-through text-[#2f2f2f]">
              <p>{price.toLocaleString("fa-IR")} تومان</p>
            </div>
          )}
          <div className="w-full sm:w-auto flex gap-1 justify-start text-[15px] md:text-[17px] text-[#00BF6F] ">
            <p>
              {(price && discount
                ? price - (price * discount) / 100
                : price || 0
              ).toLocaleString("fa-IR")}
            </p>
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
      </div>
    </div>
  );
};

export default ItemProduct;
