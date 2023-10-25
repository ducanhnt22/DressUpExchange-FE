"use client";
import { BsCart2 } from "react-icons/bs";
import React, { useState } from "react";
import useCartStore from "@/store/cart";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

type props = {
  address: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  token: string | undefined;
};
export default function CartList({ address, name, phone, token }: props) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();
  const { cart, resetCard } = useCartStore();
  let a = 0;
  const total = cart.forEach((item) => {
    a += item.price;
  });

  const handleOrder = async () => {
    const res = await fetch("https://dressupexchange.somee.com/api/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalAmount: a + 50000,
        shippingAddress: address,
        orderItemsRequest: cart,
      }),
    });
    const data = await res.json();
    resetCard();
    toast.success("Mua hàng thành công !! cảm ơn bạn đã ủng hộ !!");
    router.push("/");
  };

  const handleOrderVnpay = async () => {
    const res = await fetch(
      `https://dressupexchange.somee.com/api/payment/order-payment`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalAmount: a + 50000,
          shippingAddress: address,
          orderItemsRequest: cart,
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      resetCard();
      router.push(data.url);
    }
  };

  return (
    <div className="h-screen">
      <div className="bg-[#EAB97F] p-4 text-white flex gap-2">
        <span className="text-lg">
          <BsCart2 />
        </span>
        <h1>GIỎ HÀNG</h1>
      </div>

      <div>
        <div className="bg-[#EFE9E2] p-3">Địa chỉ nhận hàng</div>
        <div className="bg-[#FEFAF6] p-4 flex items-center justify-between">
          <span>
            {name} ({phone})
          </span>
          <span>{address}</span>
          <button>Thay đổi</button>
        </div>
      </div>

      <div className="flex py-2 bg-[#EFE9E2] items-center justify-between px-10">
        <div className="flex items-center w-3/5 gap-2">
          <h2>Sản phẩm</h2>
        </div>
        <h2 className="w-2/5">Đơn giá</h2>
        <h2 className="w-2/5">Số lượng</h2>
        <h2 className="w-2/5">Số tiền</h2>
        <h2 className="w-2/5">Thao tác</h2>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.productId}
            buyingQuantity={item.buyingQuantity}
            name={item.name}
            price={item.price}
            size={item.size}
            thumbnail={item.thumbnail}
            totalQuantity={item.quantity}
            productId={item.productId}
            priceWithVoucher={item.priceWithVoucher}
          />
        ))}
      </div>

      <div className="flex bg-[#FEFAF6] justify-between px-8 py-2">
        <input
          type="text"
          placeholder="Chú thích, dặn dò Shop"
          className="w-1/4 h-8 my-auto p-2"
        />
        <div>
          <span className="block"> Đơn vị vận chuyển: Nhanh</span>
          <span className="block">Phí ship: 50.000 VND</span>
        </div>
      </div>

      <div className="bg-[#EFE9E2] p-8 flex mt-2 justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <label htmlFor="cod">COD</label>
            <input
              type="radio"
              name="payment"
              value={"cod"}
              id="cod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="vnpay">VNPAY</label>
            <input
              type="radio"
              name="payment"
              value={"vnpay"}
              id="vnpay"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div>
              <h3>Tổng tiền hàng:</h3>
              <h3>Phí vận chuyển:</h3>
              <h3>Tổng thanh toán:</h3>
            </div>
            <div>
              <h3>{a.toLocaleString()}VND</h3>
              <h3>50.000VND</h3>
              <h3>{(a + 50000).toLocaleString()}VND</h3>
            </div>
          </div>
          {paymentMethod === "cod" && (
            <button
              className="bg-[#FF9900] text-[#4F402A] rounded-sm p-2 ml-10 float-right mt-2"
              onClick={handleOrder}
            >
              MUA NGAY
            </button>
          )}
          {paymentMethod === "vnpay" && (
            <button
              className="bg-[#FF9900] text-[#4F402A] rounded-sm p-2 ml-10 float-right mt-2"
              onClick={handleOrderVnpay}
            >
              MUA NGAY
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
