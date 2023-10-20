"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoging, setIsLoging] = useState<boolean>(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone) {
      toast.error("Vui lòng điền số điện thoại");
      return;
    }
    if (!password) {
      toast.error("Vui lòng điền mật khẩu");
      return;
    }
    setIsLoging(true);
    try {
      const res = await signIn("credentials", {
        phone,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-3xl text-[#473C33]">Đăng nhập</h2>
      <form className="flex flex-col w-4/5 mx-auto mt-7" onSubmit={(e) => handleSignIn(e)}>
        <div className="flex flex-col gap-6 justify-center">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="outline-none border-none p-3 rounded-2xl"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center">
            <input type="checkbox" />
            <h4 className="text-[#473C33]">Ghi nhớ đăng nhập</h4>
          </div>
          <Link href={"forgetPassword"} className="text-[#473C33] hover:underline">
            Quên mật khẩu
          </Link>
        </div>

        <button className="bg-[#FFB761] text-[#473C33] text-2xl rounded-2xl p-2 mt-4 font-bold" disabled={isLoging}>
          {isLoging ? (
            <svg
              role="status"
              className="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-yellow-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            "Đăng nhập"
          )}
        </button>

        <h4 className="text-right mt-1 text-[#473C33]">
          Chưa có tài khoản?{" "}
          <Link href={"/signUp"} className="hover:underline">
            Đăng ký
          </Link>
        </h4>
      </form>
    </div>
  );
}
