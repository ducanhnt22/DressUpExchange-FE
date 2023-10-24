import Link from "next/link";
import React from "react";
import { Otp } from "../components";
import ForgerForm from "./ForgerForm";

export default function ForgetPassword() {
  return (
    // <div className="w-full">
    //   <h2 className="text-center font-bold text-3xl text-[#473C33]">
    //     Quên mật khẩu
    //   </h2>
    //   <form className="flex flex-col w-4/5 mx-auto mt-7">
    //     <div className="flex flex-col gap-6 justify-center">
    //       <input
    //         type="text"
    //         placeholder="Số điện thoại"
    //         className="outline-none border-none p-3 rounded-2xl"
    //       />
    //       {/* <div className="flex items-center relative">
    //         <input type="text" placeholder="Otp" className="outline-none border-none p-3 rounded-2xl flex-1" />
    //         <button type="button" className="absolute right-4 cursor-pointer hover:underline text-[#473C33]">
    //           Gửi otp
    //         </button>
    //       </div> */}
    //       <Otp />
    //     </div>

    //     <div className="flex items-center justify-between mt-1">
    //       <Link
    //         href={"forgetPassword"}
    //         className="text-[#473C33] hover:underline"
    //       >
    //         Quên mật khẩu
    //       </Link>
    //     </div>

    //     <button className="bg-[#FFB761] text-[#473C33] text-2xl rounded-2xl p-2 mt-4 font-bold">
    //       Xác thực OTP
    //     </button>

    //     <h4 className="text-right mt-1 text-[#473C33]">
    //       Đã có tài khoản?{" "}
    //       <Link href={"/signIn"} className="hover:underline">
    //         Đăng nhập
    //       </Link>
    //     </h4>
    //   </form>
    // </div>
    <ForgerForm />
  );
}
