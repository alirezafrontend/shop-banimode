"use client";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ minHeight: "calc(100vh - 110px)" }}
    >
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/header/banilogo.svg"
          alt="لوگو"
          width={200}
          height={200}
          className="animate-pulse"
        />
        <span className="flex gap-2">
          <div
            className="w-[15px] h-[15px] bg-[#00BF6F] rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-[15px] h-[15px] bg-[#00BF6F] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-[15px] h-[15px] bg-[#00BF6F] rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </span>
      </div>
    </div>
  );
};

export default Loading;
