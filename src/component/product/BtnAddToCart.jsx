"use client";
import React, { useState } from "react";
import useCartStore from "@/app/store/Store";
import Button from "../core/Button";
import Modal from "../shared/modal/Modal";

const BtnAddToCart = ({ product }) => {
  const { addToCart, cart } = useCartStore();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    showCartButton: false,
  });

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setModalState({
        isOpen: true,
        title: "محصول در سبد خرید",
        message: `"${product.title}" قبلاً به سبد خرید اضافه شده است.`,
        showCartButton: true,
      });
    } else {
      addToCart(product);
      setModalState({
        isOpen: true,
        title: "محصول اضافه شد",
        message: `"${product.title}" با موفقیت به سبد خرید اضافه شد.`,
        showCartButton: true,
      });
    }
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      <Button
        className="w-full flex justify-center gap-1 md:gap-2 bg-[#2b8c51] text-[#fff] py-[15px] rounded-[15px]"
        onClick={handleAddToCart}
      >
        <span className="hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={22}
            height={22}
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.6 6.467 17.9 4.2A3 3 0 0 0 15.5 3h-7c-.944 0-1.833.445-2.4 1.2L4.4 6.467c-.26.346-.4.767-.4 1.2V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.667c0-.433-.14-.854-.4-1.2"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 10a3 3 0 1 1-6 0M19.883 7H4.115"
            ></path>
          </svg>
        </span>
        <span className="text-[14px] md:text-[16px]">افزودن به سبد خرید</span>
      </Button>
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        showCartButton={modalState.showCartButton}
      />
    </>
  );
};

export default BtnAddToCart;
