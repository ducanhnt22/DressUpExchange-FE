"use client";
import { useCountdown } from "@/hook";
import React from "react";

export default function Otp() {
  const { countdown, start } = useCountdown();
  return (
    <div className="flex items-center relative">
      <input type="text" placeholder="Otp" className="outline-none border-none p-3 rounded-2xl flex-1" />
      {countdown <= 0 ? (
        <button
          type="button"
          className="absolute right-4 cursor-pointer hover:underline text-[#473C33]"
          onClick={() => start(60)}
        >
          Gửi otp
        </button>
      ) : (
        <h4 className="absolute right-4 cursor-pointer hover:underline text-[#473C33]">{countdown}s</h4>
      )}
    </div>
  );
}
