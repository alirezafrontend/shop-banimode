import React from "react";
import Slider from "../shared/slider/Slider";

const BannerFirst = () => {
  const images = [
    { src: "/banner/1-1.webp", alt: "About Image 1" },
    { src: "/banner/1-2.webp", alt: "About Image 2" },
    { src: "/banner/1-4.webp", alt: "About Image 3" },
  ];

  return (
    <div className="w-full min-h-[250px] md:min-h-[350px]">
      <Slider images={images} />
    </div>
  );
};

export default BannerFirst;
