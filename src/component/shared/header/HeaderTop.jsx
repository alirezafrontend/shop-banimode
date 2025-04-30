"use client";
import useCartStore from "@/app/store/Store";
import Button from "@/component/core/Button";
import Input from "@/component/core/Input";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

const HeaderTop = () => {
  const cart = useCartStore((state) => state.cart);
  const allQty = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-white grid grid-cols-12 h-[80px]">
      <div className="flex items-center col-span-6 lg:col-span-3 gap-2">
        <div className="relative">
          <Link href="/cart">
            <Image
              className="cursor-pointer"
              src="/header/cart-new.svg"
              width={30}
              height={30}
              alt="Cart Icon"
            />
          </Link>
          {allQty > 0 && (
            <span className="absolute -top-[8px] -right-[8px] flex justify-center items-center bg-[#19B16A] text-[#fff] text-[13px] w-[20px] h-[20px] rounded-full">
              {allQty}
            </span>
          )}
        </div>
        <Button className="hidden lg:flex text-[#fff] px-[20px] py-[8px] rounded-[20px] justify-center items-center">
          ورود / ثبت نام
        </Button>
        <BurgerMenu />
      </div>
      <SearchBar />
      <div className="flex items-center justify-end col-span-6 lg:col-span-3">
        <Link rel="icon" href="/">
          <div>
            <Image
              className="cursor-pointer"
              src="/header/banilogo.svg"
              width={180}
              height={110}
              alt="logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
