import Image from "next/image";
import React from "react";

const Banner2 = () => {
  return (
    <div className="min-h-[250px] md:min-h-[350px] overflow-hidden rounded-[20px]">
      <Image className="rounded-[20px] h-full object-fit-cover" src="/banner/2-1.webp" width={1200} height={437} alt="banner2"/>
    </div>
  );
};

export default Banner2;
