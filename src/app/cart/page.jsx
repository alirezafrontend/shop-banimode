"use client";
import CartItem from "@/component/cart/CartItem";
import Button from "@/component/core/Button";
import Input from "@/component/core/Input";
import Container from "@/component/shared/container/Container";
import React, { useState, useEffect } from "react";
import useCartStore from "../store/Store";
import Image from "next/image";
import Loading from "@/component/core/loading/Loading";
import Modal from "@/component/shared/modal/Modal";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getDiscountedPrice = useCartStore((state) => state.getDiscountedPrice);
  const applyDiscountCode = useCartStore((state) => state.applyDiscountCode);
  const discountPercentage = useCartStore((state) => state.discountPercentage);

  const [loading, setLoading] = useState(true);
  const [enteredCode, setEnteredCode] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const handleShowModal = (msg) => {
    setModalMsg(msg);
    setShowModal(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleApplyDiscount = () => {
    applyDiscountCode(enteredCode);
  };

  if (loading) {
    return <Loading />;
  }

  const totalPrice = getTotalPrice();
  const discountedPrice = getDiscountedPrice();

  return (
    <div className="min-h-screen pb-[50px]">
      <Container>
        <div className="py-[20px]">
          {cart.length === 0 ? (
            <div
              className="flex justify-center items-center gap-[20px] py-[10px] min-h-screen"
              style={{ minHeight: "calc(100vh - 110px)" }}
            >
              <div className="mb-[180px] flex flex-col gap-3">
                <div className="w-full flex justify-center">
                  <Image
                    className="w-[150px] md:w-[250px] lg:w-[170px]"
                    src="/icons/thank-unsucess.svg"
                    width={50}
                    height={50}
                    alt="سبد خرید خالی"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-[15px] sm:text-[16px] md:text-[18px]">
                    سبد خرید شما خالی است
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-[30px]">
                <div className="w-full min-h-[50px] bg-[#e8e8e8] mb-[20px]">
                  <div className="hidden lg:flex leading-[60px] text-[#656565] px-[10px] font-medium">
                    <div className="w-[40%] text-[16px]">سبد خرید شما</div>
                    <div className="w-[20%] flex justify-center items-center text-[16px]">
                      قیمت واحد
                    </div>
                    <div className="w-[20%] flex justify-center items-center text-[16px]">
                      تعداد
                    </div>
                    <div className="w-[20%] flex justify-center items-center text-[16px]">
                      قیمت نهایی
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-[5px]">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src="/icons/seller-icon.svg"
                        width={20}
                        height={20}
                        alt="shop"
                      />
                      <p className="text-[16px] !mb-0 text-[#a1a5a9] font-bold">
                        فروشنده:
                      </p>
                    </div>
                    <div>
                      <span className="text-[16px] font-bold text-black">
                        بانی مد
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {cart.map((product) => {
                return (
                  <CartItem
                    key={product.id}
                    qty={product.quantity}
                    title={product.title}
                    brand={product.brand}
                    orgPrice={product.price}
                    finalPrice={
                      product.price - (product.price * product.discount) / 100
                    }
                    img={product.img}
                    id={product.id}
                    discount={product.discount}
                    onItemRemoved={handleShowModal}
                  />
                );
              })}
              <div className="bg-[#FAFAFA] w-full py-[40px] px-[20px] flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-[60%] lg:border-l-2 lg:border-[#e6e6e6] lg:pl-[30px] mb-[40px] lg:mb-0">
                  <div className="flex flex-wrap gap-[10px] justify-center lg:justify-start ">
                    <div className="w-full">
                      <p className="text-[16px] font-bold text-center lg:text-right">
                        ثبت کد تخفیف / بانی بن :
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                      <Input
                        value={enteredCode}
                        onChange={(e) => setEnteredCode(e.target.value)}
                        className="border-2 border-[#00bf6fc2] py-[10px] px-[30px] outline-none rounded-[5px]"
                      />
                    </div>
                    <Button
                      onClick={handleApplyDiscount}
                      className="text-white px-[15px] py-[10px] rounded-[5px]"
                    >
                      اعمال تخفیف
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-[35%] flex flex-wrap items-center gap-[15px]">
                  <div className="flex justify-between text-[#666] w-full">
                    <p className="text-[15px]">قیمت کل سفارش :</p>
                    <p className="text-[16px]">
                      {totalPrice.toLocaleString()} تومان
                    </p>
                  </div>
                  <div className="flex justify-between text-[#666] w-full">
                    <p className="text-[15px]">سود شما از این خرید :</p>
                    <p className="text-[16px]">
                      {(totalPrice * discountPercentage) / 100} تومان
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-[16px]">قیمت قابل پرداخت :</p>
                    <p className="text-[#00BF6F] text-[16px]">
                      {discountedPrice.toLocaleString()} تومان
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] flex flex-col lg:flex-row justify-between items-center">
                <div>
                  <p className="text-[14px] md:text-[16px] mb-[20px] lg:mb-0">
                    <span className="text-[#f37a23]">
                      افزودن کالا به سبد خرید به معنی رزرو آن نیست{" "}
                    </span>
                    با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل
                    کنید.
                  </p>
                </div>
                <div>
                  <Button className="text-white  px-[50px] py-[15px] rounded-[10px] text-[14px] lg:text-[16px]">
                    ثبت و ورود به مرحله بعد
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="محصول حذف شد"
          message={modalMsg}
        />
      </Container>
    </div>
  );
};

export default Cart;
