import React from "react";
import { Start } from "../../components";
import { PiUser } from "react-icons/pi";

export default function Rating() {
  return (
    <div className="bg-white p-2">
      <div className="flex justify-between border-b-2 border-[#FF6868] border-solid py-2">
        <h4 className="font-bold text-xl">Đánh giá sản phẩm</h4>
        <div className="flex items-center gap-1">
          <h5 className="font-bold text-lg">5.00</h5>
          <Start rating={5.0} />
        </div>
      </div>
      
      <div className="border-b-2 border-[#FF6868] border-solid py-2">
        <div className="flex items-center gap-1">
          <div className="text-2xl">
            <PiUser />
          </div>
          <h5>thang</h5>
        </div>
        <p>sản phẩm tốt</p>
      </div>
      <div className="border-b-2 border-[#FF6868] border-solid py-2">
        <div className="flex items-center gap-1">
          <div className="text-2xl">
            <PiUser />
          </div>
          <h5>duc anh</h5>
        </div>
        <p>chi nay dep ne</p>
      </div>
      <div className="border-b-2 border-[#FF6868] border-solid py-2">
        <div className="flex items-center gap-1">
          <div className="text-2xl">
            <PiUser />
          </div>
          <h5>minh man</h5>
        </div>
        <p>xin info chi di</p>
      </div>
    </div>
  );
}
