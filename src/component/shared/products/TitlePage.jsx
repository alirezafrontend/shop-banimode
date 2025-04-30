"use client";
import React from "react";

const TitlePage = ({ titlePage }) => {
  return (
    <div className="text-[15px] md:text-[16px] lg:text-[18px]">
      <h3 className="mb-[10px]">{titlePage[0]}</h3>
      <h3>{titlePage[1]}</h3>
    </div>
  );
};

export default TitlePage;
