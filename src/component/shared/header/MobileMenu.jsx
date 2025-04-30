"use client";
import Button from "@/component/core/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navs = [
  { name: "صفحه اصلی", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "مردانه", href: "/men" },
  { name: "زنانه", href: "/women" },
  { name: "زیبایی و سلامت", href: "/health" },
  { name: "دیجیتال", href: "/digital" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const [activePath, setActivePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
      <Button className="absolute top-4 right-4 text-2xl bg-transparent" onClick={onClose}>
        ✕
      </Button>
      <ul className="flex flex-col gap-6 text-xl">
        {navs.map((nav) => {
          const isActive = activePath === nav.href;
          return (
            <li key={nav.name} onClick={onClose}>
              <Link
                href={nav.href}
                className={`${isActive ? "text-green-600 font-bold" : ""}`}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
