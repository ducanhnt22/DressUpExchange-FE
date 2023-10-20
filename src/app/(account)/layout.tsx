import Link from "next/link";
import React from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <div className="w-1/5 flex flex-col border-r-2 border-solid border-gray-300 min-h-screen bg-stone-200">
        {/* <div className="p-2 m-2 bg-[#C9AD7F] hover:bg-amber-500">
          <Link href={"/profile"} className="font-bold">Profile</Link>
        </div>
        <div className="p-2 m-2 bg-[#C9AD7F] hover:bg-amber-500">
          <Link href={"/myProduct"} className="font-bold">My Product</Link>
        </div>
        <div className="p-2 m-2 bg-[#C9AD7F] hover:bg-amber-500">
          <Link href={"/sellingProduct"} className="font-bold">Selling Product</Link>
        </div> */}
        <div className="bg-white rounded-md list-none text-center mt-1">
          <li className="py-3 border-b-2"><a href="/profile" className="list-none  hover:text-orange-400">Profile</a></li>
          <li className="py-3 border-b-2"><a href="/myProduct" className="list-none  hover:text-orange-400">My Product</a></li>
          <li className="py-3 border-b-2"><a href="/sellingProduct" className="list-none  hover:text-orange-400">Selling Product</a></li>
        </div>
      </div>
      <div className="w-4/5 ">{children}</div>
    </section>
  );
}
