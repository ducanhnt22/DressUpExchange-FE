"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <BiSearch />
      </div>
      <input
        type="text"
        className="w-full border-none outline-none pl-8 rounded-3xl py-1"
        placeholder="Tìm kiếm sản phẩm"
        onChange={() => {}}
      />
    </div>
  );
}
