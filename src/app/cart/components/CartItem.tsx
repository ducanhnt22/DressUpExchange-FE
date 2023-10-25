"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import useCartStore from "@/store/cart";

const totalQuantity = 10;
type props = {
  thumbnail: string;
  name: string;
  size: string;
  price: number;
  buyingQuantity: number;
  totalQuantity: number;
  productId: number;
  priceWithVoucher: number;
};
export default function CartItem({
  thumbnail,
  name,
  size,
  price,
  buyingQuantity,
  totalQuantity,
  productId,
  priceWithVoucher,
}: props) {
  const { removeFromCart } = useCartStore();
  const [quantity, setQuantity] = useState<number>(buyingQuantity);
  const [finalPrice, setFinalPrice] = useState<number>(price);

  const handleQuantity = useCallback(
    (action: "increase" | "descrease") => {
      if (action === "descrease") {
        if (quantity <= 1) {
          toast.error("Số lượng mua tối thiểu là 1");
        } else {
          setQuantity((preQuantity) => preQuantity - 1);
        }
      }
      if (action === "increase") {
        if (quantity >= totalQuantity) {
          toast.error("Vượt quá số lượng mua cho phép!!!");
        } else {
          setQuantity((preQuantity) => preQuantity + 1);
        }
      }
    },
    [quantity]
  );
  return (
    <div className="flex py-2 bg-[#EFE9E2] items-center justify-between mt-2 px-10 ">
      <div className="flex items-center w-3/5 gap-2">
        <Image src={thumbnail} alt="name" width={50} height={50} />
        <h2 className="w-1/2">{name}</h2>
        <h2 className="ml-5">Size {size}</h2>
      </div>

      <h2 className="w-2/5">{priceWithVoucher.toLocaleString()}vnd</h2>

      <div className="flex items-center w-2/5">
        <span className="text-center">{quantity}</span>
        {/* <button
          className="text-center w-6 border-2 border-solid border-[#FF9900] outline-none h-6"
          onClick={() => handleQuantity("increase")}
        >
          +
        </button>
        <input
          type="text"
          readOnly
          value={quantity}
          disabled
          className="text-center w-6 border-y-2 border-solid border-[#FF9900] h-6 overflow-hidden"
        />
        <button
          className="text-center w-6 border-2 border-solid border-[#FF9900] outline-none h-6"
          onClick={() => handleQuantity("descrease")}
        >
          -
        </button> */}
      </div>

      <h2 className="w-2/5">{price.toLocaleString()}vnd</h2>
      <button
        className="w-2/5 text-left"
        onClick={() => removeFromCart(productId)}
      >
        Xóa
      </button>
    </div>
  );
}
