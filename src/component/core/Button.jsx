"use client";
import React from "react";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-[#00BF6F] flex cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;