"use client";
import Image from "next/image";
import Input from "@/component/core/Input";
import { useState, useEffect, useRef } from "react";

import ItemSearch from "./ItemSearch";
import { getProductSales } from "@/services/productBase";
import Portal from "./Portal";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (item) => {
    setSearchTerm(""); 
    setShowDropdown(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductSales();
      console.log("Products from Supabase:", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  }, [searchTerm, products]);

  const [inputPosition, setInputPosition] = useState({
    top: 0,
    left: 0,
    height: 0,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setInputPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        height: rect.height,
        width: rect.width,
      });
    }
  }, [showDropdown]);

  return (
    <div className="relative w-full hidden lg:flex items-center justify-center lg:col-span-6">
      <Input
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        className="w-full bg-[#F3F3F3] px-[40px] py-[10px] outline-none border-none rounded-[10px]"
        placeholder="جستجو میان هزاران برند و صدها هزار کالا"
      />
      <span className="absolute top-[29px] right-1.5">
        <Image
          width={22}
          height={22}
          src="/header/icons8-search.svg"
          alt="search"
          unoptimized
        />
      </span>

      {showDropdown && filtered.length > 0 && (
        <Portal>
          <div
            className="max-h-[50vh] overflow-y-auto bg-white shadow-md rounded-[10px] z-[9999] p-4"
            style={{
              top: inputPosition.top + inputPosition.height + 5,
              left: inputPosition.left,
              width: inputPosition.width,
              position: "absolute",
            }}
          >
            {filtered.map((item) => (
              <ItemSearch key={item.id} item={item} onSelect={() => handleSelect(item)} />
            ))}
          </div>
        </Portal>
      )}
    </div>
  );
};

export default SearchBar;
