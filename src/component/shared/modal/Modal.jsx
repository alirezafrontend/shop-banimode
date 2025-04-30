"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/component/core/Button";

const Modal = ({ isOpen, onClose, title, message, showCartButton }) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000003b] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-7 rounded-lg shadow-lg w-full md:max-w-[450px] ">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-sm mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          {showCartButton && (
            <Button
              className="bg-[#2b8c51] text-white px-4 py-2 rounded"
              onClick={() => router.push("/cart")}
            >
              رفتن به سبد خرید
            </Button>
          )}
          <Button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            {showCartButton ? "ادامه خرید" : "بستن"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
