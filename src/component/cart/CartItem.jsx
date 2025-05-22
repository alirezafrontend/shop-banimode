"use client";
import React from "react";
import BtnAdd from "./BtnAdd";
import BtnMin from "./BtnMin";
import Link from "next/link";
import useCartStore from "@/app/store/Store";
import Modal from "../shared/modal/Modal";
import Image from "next/image";

const CartItem = ({
  qty,
  title,
  brand,
  orgPrice,
  finalPrice,
  img,
  id,
  discount,
  onItemRemoved,
}) => {
  const { plus, minus, removeProduct } = useCartStore();

  const [showModal, setShowModal] = React.useState(false);
  const [modalMsg, setModalMsg] = React.useState("");

  const handleRemove = () => {
    removeProduct(id);
    onItemRemoved(`محصول "${title}" از سبد خرید حذف شد.`);
  };

  const handleDecrease = () => {
    if (qty === 1) {
      removeProduct(id);
      onItemRemoved(`محصول "${title}" از سبد خرید حذف شد.`);
    } else {
      minus(id);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row py-[30px] min-h-[170px] lg:mb-[20px]">
      <div className="relative w-full lg:w-[13%] flex">
        <div className="w-[30%] lg:w-full">
          <Link href={`/shop/${id}`}>
            <Image
              className="w-[142px]"
              src={`${img}`}
              width={100}
              height={100}
              alt="product"
              unoptimized
            />
          </Link>
          <button
            onClick={handleRemove}
            className="absolute -top-[10px] -right-[5px] bg-[#6f7377] rounded-full p-[3px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex lg:hidden w-[70%] flex-col gap-[10px] px-[10px]">
          <h4 className="text-[16px] lg:text-[19px] font-semibold">{brand}</h4>
          <Link href={`/shop/${id}`}>
            <span className="text-[14px] lg:text-[16px]">{title}</span>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[87%] flex flex-col lg:flex-row items-center mt-[30px]">
        <div className="hidden lg:flex w-[30%] flex-col gap-[10px]">
          <h4 className="text-[19px] font-semibold">{brand}</h4>
          <Link href={`/shop/${id}`}>
            <span className="text-[16px]">{title}</span>
          </Link>
        </div>
        <div className="w-full lg:w-[26%] flex flex-col justify-center gap-4">
          <div className="w-full flex justify-between lg:justify-center text-[#0000008e] items-center gap-1 mb-[5px] lg:mb-0">
            <span className="flex lg:hidden text-[14px] md:text-[16px]">قیمت واحد</span>
            <div>
              <span className="text-[14px] md:text-[16px] font-medium line-through">
                {orgPrice.toLocaleString("fa-IR")}
              </span>
              <span>تومان</span>
            </div>
          </div>
          <div className="flex justify-between lg:justify-center items-center gap-4 mb-[10px] lg:mb-0">
            <div className="flex items-center gap-2">
              <span className="flex justify-center items-center rounded-full bg-[#f16422] text-[14px] md:text-[16px] text-[#fff] w-[35px] h-[35px]">
                %{discount}
              </span>
              <span className="text-[#f16422] text-[14px] md:text-[16px]">تخفیف</span>
            </div>
            <div className="text-[#f16422] flex items-center gap-1 text-[14px] md:text-[16px]">
              <span className="text-[14px] md:text-[16px]">
                {finalPrice.toLocaleString("fa-IR")}
              </span>
              <span>تومان</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[22%] flex justify-end lg:justify-center items-center mb-[10px] lg:mb-0">
          <div className="flex items-center">
            <BtnAdd onclick={() => plus(id)} />
            <span className="mx-[25px] text-[16px] md:text-[20px]">{qty}</span>
            <BtnMin onclick={handleDecrease} />
          </div>
        </div>
        <div className="w-full lg:w-[22%] flex justify-between lg:justify-center mb-[10px] lg:mb-0">
          <span className="flex lg:hidden text-[14px] md:text-[16px]">قیمت نهایی</span>
          <div className="text-[#19B16A]">
            <span className="text-[15px] md:text-[18px] font-medium">
              {(finalPrice * qty).toLocaleString()}
            </span>
            <span>تومان</span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="محصول حذف شد"
        message={modalMsg}
      />
    </div>
  );
};

export default CartItem;
