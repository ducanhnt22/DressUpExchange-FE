"use client";
import React, { useCallback, useState } from "react";
import { Start } from "../../components";
import { toast } from "react-toastify";
import useCartStore from "@/store/cart";
import { IVoucher } from "@/types";
import dryLaudry from "../../../../../public/dryLaudry.png";
import fastLaudry from "../../../../../public/fastLaudry1.png";
import fragrantLaudry from "../../../../../public/fragrantLaudry.png";
import Image from "next/image";

type productDetail = {
  name: string;
  price: number;
  size: string;
  productId: number;
  voucher: IVoucher;
  totalQuantity: number;
  thumbnail: string;
};
export default function ProductInfo({
  name,
  price,
  size,
  productId,
  voucher,
  totalQuantity,
  thumbnail,
}: productDetail) {
  const [quantity, setQuantity] = useState<number>(1);
  const [originPrice, setOriginPrice] = useState<number>(price);
  const [buyingPrice, setBuyingPrice] = useState<number>(originPrice);
  const [toogleLaudry, setToogleLaudry] = useState<boolean>(false);
  const [laudryId, setLaudryId] = useState<number>(4);
  const [voucherId, setVoucherId] = useState<number>(0);
  const { cart, addToCart } = useCartStore();

  const handleQuantity = useCallback(
    (action: "increase" | "descrease") => {
      if (action === "descrease") {
        if (quantity <= 1) {
          toast.error("Số lượng mua tối thiểu là 1");
        } else {
          setQuantity((preQuantity) => preQuantity - 1);
          setBuyingPrice((prevPrice) => prevPrice - originPrice);
        }
      }
      if (action === "increase") {
        if (quantity >= totalQuantity) {
          toast.error("Vượt quá số lượng mua cho phép!!!");
        } else {
          setQuantity((preQuantity) => preQuantity + 1);
          setBuyingPrice((prevPrice) => prevPrice + originPrice);
        }
      }
    },
    [quantity]
  );

  const handleAddVoucher = (voucherId: number) => {
    setQuantity(1);
    setVoucherId(voucherId);
    const discount = voucher.vouchers.find(
      (vc) => vc.voucherId === voucherId
    )?.discountAmount;
    if (discount) {
      setOriginPrice(price - price * (discount / 100));
      setBuyingPrice(price - price * (discount / 100));
    }
  };
  return (
    <div className="w-3/5">
      <h1 className="font-semibold text-3xl text-[#473C33]">{name}</h1>

      <div className="mt-2">
        <h2 className="font-bold text-2xl text-[#8A5656]">
          {buyingPrice.toLocaleString()}VND
        </h2>
        <h2 className="font-bold text-xl text-[#8A5656]">
          Còn Lại: {totalQuantity}
        </h2>
      </div>

      <div className="flex items-center mt-2">
        <Start rating={5.0} />
        <h4 className="text-2xl">5.0</h4>
      </div>

      <h3 className="mt-2">Size: {size}</h3>

      <div className="flex items-center gap-5 mt-2">
        <h3>Số lượng</h3>
        <div className="flex items-center border-2 border-solid border-[#FF9900] rounded-lg">
          <button
            onClick={() => handleQuantity("increase")}
            className="text-center w-6 border-none outline-none h-6"
          >
            +
          </button>
          <input
            type="text"
            readOnly
            value={quantity}
            disabled
            className="text-center w-6 border-x-2 border-solid border-[#FF9900] h-6"
          />
          <button
            onClick={() => handleQuantity("descrease")}
            className="text-center w-6 border-none outline-none h-6"
          >
            -
          </button>
        </div>
      </div>

      {voucher.vouchers.length > 0 && (
        <div className="flex items-center gap-5 mt-2">
          <h3>Mã giảm giá của shop</h3>
          <select
            className="text-[#4F402A] bg-[#F9C171] w-60 border-none border-gray-300 rounded-lg text-base focus:border-none p-2"
            onChange={(e) => handleAddVoucher(+e.target.value)}
          >
            <option className="bg-white">Hãy chọn voucher</option>
            {voucher.vouchers.map((vc) => (
              <option
                className="bg-white"
                key={vc.voucherId}
                value={vc.voucherId}
              >
                {vc.voucherName} ({vc.discountAmount}%)
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="relative inline-flex items-center mr-5 cursor-pointer mt-2">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => setToogleLaudry(!toogleLaudry)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-4  00">
            Dịch vụ giặt ủi
          </span>
        </label>
        {toogleLaudry && (
          <div>
            <div className="my-2">Lựa chọn dịch vụ của chúng tôi</div>
            <div className="flex mt-1 gap-4">
              <div className="flex-col items-center justify-center flex gap-1">
                <input
                  type="radio"
                  value={2}
                  name="laudry"
                  onChange={(e) => setLaudryId(+e.target.value)}
                />
                <Image
                  src={fastLaudry}
                  alt="fastLaudry"
                  className="w-32 h-32 bg-white p-2 rounded"
                />
                <h3>Giặt sấy nhanh</h3>
              </div>
              <div className="flex-col items-center justify-center flex gap-1">
                <input
                  type="radio"
                  value={1}
                  name="laudry"
                  onChange={(e) => setLaudryId(+e.target.value)}
                />
                <Image
                  src={dryLaudry}
                  alt="fastLaudry"
                  className="w-32 h-32 bg-white p-2 rounded"
                />
                <h3>Giặt sấy khô</h3>
              </div>
              <div className="flex-col items-center justify-center flex gap-1">
                <input
                  type="radio"
                  value={3}
                  name="laudry"
                  onChange={(e) => setLaudryId(+e.target.value)}
                />
                <Image
                  src={fragrantLaudry}
                  alt="fastLaudry"
                  className="w-32 h-32 bg-white p-2 rounded"
                />
                <h3>Giặt sấy thơm</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-5 mt-5">
        <button
          className="bg-[#F9C171] text-[#4F402A] rounded-md py-1 px-10 font-semibold border border-[#EA9B1B] border-solid hover:opacity-90"
          onClick={() => {
            addToCart({
              buyingQuantity: quantity,
              laudryId,
              name,
              price: buyingPrice,
              productId,
              quantity: totalQuantity,
              size,
              thumbnail,
              voucherId,
              priceWithVoucher: originPrice,
            });
            toast.success("Đã thêm vào giỏ hàng");
          }}
        >
          THÊM VÀO GIỎ HÀNG
        </button>
        <button className="font-bold text-[#4F402A] bg-[#FF9900] border border-solid py-2 px-8 rounded-lg hover:opacity-80">
          MUA NGAY
        </button>
      </div>
    </div>
  );
}
