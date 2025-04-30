import React from "react";
import Slider from "../shared/slider/Slider";

const Banner4 = () => {
  const images = [
    { src: "/banner/4-1.webp", alt: "About Image 1" },
    { src: "/banner/4-2.webp", alt: "About Image 2" },
  ];

  return (
    <div className="w-full min-h-[250px] md:min-h-[350px]">
      <Slider images={images} />
    </div>
  );
};

export default Banner4;
