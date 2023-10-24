"use client";
import React, { useState } from "react";
import { Otp } from "../components";
import Link from "next/link";
import { toast } from "react-toastify";
import ForgerModal from "./ForgerModal";

function ForgerForm() {
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const verifyOtp = async () => {
    const res = await fetch(
      `https://dressupexchange.somee.com/api/send-sms/ConfirmOTP?otp=${otp}`,
      { method: "POST" }
    );
    if (!res.ok) {
      toast.error("Sai Otp");
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-3xl text-[#473C33]">
        Quên mật khẩu
      </h2>
      <div className="flex flex-col gap-6 justify-center">
        <input
          type="text"
          placeholder="Số điện thoại"
          className="outline-none border-none p-3 rounded-2xl"
          onChange={(e) => setPhone(e.target.value)}
        />

        <Otp setOtp={setOtp} phone={phone} />
      </div>

      <button
        className="bg-[#FFB761] text-[#473C33] text-2xl rounded-2xl p-2 mt-4 font-bold"
        onClick={verifyOtp}
      >
        Xác thực OTP
      </button>

      <h4 className="text-right mt-1 text-[#473C33]">
        Đã có tài khoản?{" "}
        <Link href={"/signIn"} className="hover:underline">
          Đăng nhập
        </Link>
      </h4>

      {/* <ForgerModal setOpen={setOpen} phone={phone} /> */}
      {open && <ForgerModal setOpen={setOpen} phone={phone} />}
    </div>
  );
}

export default ForgerForm;
