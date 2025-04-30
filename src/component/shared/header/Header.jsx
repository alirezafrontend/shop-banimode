"use client";
import React from "react";
import Navbar from "./Navbar";
import Container from "../container/Container";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="h-[100px] flex items-center lg:h-[150px]">
      <Container>
        <HeaderTop />
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
