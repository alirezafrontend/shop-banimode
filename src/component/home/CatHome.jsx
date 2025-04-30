"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const catHome = [
  {
    src: "/catHome/men.webp",
    href: "/men",
    alt: "Men's Category",
  },
  {
    src: "/catHome/women.webp",
    href: "/women",
    alt: "Women's Category",
  },
  {
    src: "/catHome/health.webp",
    href: "/health",
    alt: "Health Category",
  },
  {
    src: "/catHome/digital.webp",
    href: "/digital",
    alt: "Digital Category",
  },
];

const CatHome = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-12 gap-[20px] py-[30px]">
      {catHome.map((cat, index) => (
        <div className="col-span-3" key={cat.href}>
          <Link href={cat.href} className="col-span-3">
            <Image
              src={cat.src}
              alt={cat.alt}
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CatHome;
