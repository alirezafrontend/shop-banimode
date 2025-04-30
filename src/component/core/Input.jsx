"use client";
import React, { forwardRef } from "react";

const Input = forwardRef(({ placeholder, className, ...props }, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        className={`${className}`}
        type="text"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
