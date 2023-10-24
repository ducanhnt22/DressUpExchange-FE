"use client";
import { useCountdown } from "@/hook";
import React from "react";
import { toast } from "react-toastify";

type props = {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
};

export default function Otp({ setOtp, phone }: props) {
  const { countdown, start } = useCountdown();
  const handleSendOtp = async () => {
    start(60);
    const res = await fetch(
      `https://dressupexchange.somee.com/api/send-sms/SendOTP?telephoneNumber=${phone}`,
      {
        method: "POST",
      }
    );
    const data = await res.json();
    toast.success("Vui lòng kiểm tra điện thoại");
  };
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Otp"
        className="outline-none border-none p-3 rounded-2xl flex-1"
        onChange={(e) => setOtp(e.target.value)}
      />
      {countdown <= 0 ? (
        <button
          type="button"
          className="absolute right-4 cursor-pointer hover:underline text-[#473C33]"
          onClick={() => handleSendOtp()}
        >
          Gửi otp
        </button>
      ) : (
        <h4 className="absolute right-4 cursor-pointer hover:underline text-[#473C33]">
          {countdown}s
        </h4>
      )}
    </div>
  );
}
