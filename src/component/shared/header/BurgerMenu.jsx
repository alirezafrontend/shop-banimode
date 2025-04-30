"use client";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="burger-menu flex lg:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/header/burger-menu.svg"
          width={30}
          height={30}
          alt="menu"
        />
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BurgerMenu;
