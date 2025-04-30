"use client";
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

const Navbar = () => {
  const [activePath, setActivePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className="hidden lg:flex items-center h-[70px]">
      <ul className="flex gap-12">
        {navs.map((nav) => {
          const activeLink = activePath === nav.href;
          return (
            <Link key={nav.name} href={nav.href}>
              <li
                className={`pb-1 ${
                  activeLink ? "border-b-2 border-[#00BF6F]" : ""
                }`}
              >
                {nav.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
