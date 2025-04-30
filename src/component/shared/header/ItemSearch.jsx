import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemSearch = ({ item, onSelect }) => {
  return (
    <div className="mb-[10px]">
      <Link
        href={`/shop/${item.id}`}
        className="flex  p-2 hover:bg-gray-100 rounded-md"
        onClick={() => onSelect(item)}
      >
        <div className="w-full flex items-center gap-3">
          {" "}
          <div className="w-[20%]">
            <Image
              src={item.images[0]}
              width={50}
              height={50}
              alt={item.title}
            />
          </div>
          <span className="w-[80%] text-sm text-gray-800">{item.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemSearch;
