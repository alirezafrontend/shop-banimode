import React from "react";
import Input from "../core/Input";
import Button from "../core/Button";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="hidden lg:block relative bg-[#F8F8F8] py-[80px] mt-[20px] mb-[100px]">
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[220px] bg-cover bg-no-repeat bg-[url('/icons/newsletter.svg')] opacity-50"
        style={{ zIndex: 0 }}
      ></div>
      <div className="flex flex-col items-center">
        <h3 className="text-[26px] mb-[10px]">ثبت نام در خبرنامه بانی‌مد</h3>
        <h6>
          اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما
          مطلع می شوید
        </h6>
      </div>
      <div className="absolute -bottom-[35px] right-[50%] translate-x-[50%] flex gap-[20px] w-[40%] bg-[#fff] rounded-[40px] py-[15px] px-[20px]">
        <Input
          className="w-full bg-[#EFEFEF] py-[10px] px-[15px] rounded-[20px] border-none outline-none"
          placeholder="آدرس ایمیل شما"
        />
        <Button className="w-[28%] flex justify-between items-center py-[10px] px-[10px] rounded-[25px] text-[#fff]">
          ارسال
          <span>
            <Image
              src="/icons/left-arrow.svg"
              width={15}
              height={15}
              alt="newsletter"
            />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
