"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      const res = await fetch("https://dressupexchange.somee.com/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          password,
          name,
          address,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Đăng ký thành công");
        router.push("/signIn");
      } else {
        toast.error(data);
      }
    } else {
      toast.error("Mật khẩu và mật khẩu xác nhận không trùng nhau");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-3xl text-[#473C33]">Đăng ký</h2>
      <div className="flex flex-col w-4/5 mx-auto mt-7">
        <div className="flex flex-col gap-6 justify-center">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Họ và tên"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-1">
          <Link href={"forgetPassword"} className="text-[#473C33] hover:underline">
            Quên mật khẩu
          </Link>
        </div>

        <button className="bg-[#FFB761] text-[#473C33] text-2xl rounded-2xl p-2 mt-4 font-bold" onClick={handleSignUp}>
          Đăng ký
        </button>

        <h4 className="text-right mt-1 text-[#473C33]">
          Đã có tài khoản?{" "}
          <Link href={"/signIn"} className="hover:underline">
            Đăng nhập
          </Link>
        </h4>
      </div>
    </div>
  );
}
