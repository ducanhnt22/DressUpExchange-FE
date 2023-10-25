"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Start } from "@/app/product/components";
import AddVoucherModal from "./AddVoucherModal";

type product = {
  name: string;
  price: number;
  productId: number;
  thumbnail: string;
  token: string | undefined;
};
export default function UserProductCard({
  name,
  price,
  thumbnail,
  productId,
  token,
}: product) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={`relative h-72 max-h-72`}>
        <Image
          src={thumbnail}
          alt="aaa"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-3 bg-slate-100 flex justify-around flex-col fill-transparent">
        <h2 className="text-lg line-clamp-2 mb-2">{name}</h2>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="items-center">4.4/5</h3>
            <Start rating={4.4} />
          </div>

          <h3 className="text-right text-sm mr-3 text-orange-400">
            {price?.toLocaleString()}VND
          </h3>
        </div>
        <div className="flex justify-between mt-2">
          <button className="bg-orange-400 px-5 rounded-lg hover:bg-orange-600 text-white">
            Edit
          </button>
          <button
            className="bg-orange-400 py-2 px-3 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => setOpen(true)}
          >
            Add Voucher
          </button>
        </div>
      </div>
      {open && (
        <AddVoucherModal
          productId={productId}
          setOpen={setOpen}
          token={token}
        />
      )}
    </div>
  );
}
