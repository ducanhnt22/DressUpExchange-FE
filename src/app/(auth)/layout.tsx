import Image from "next/image";
import React from "react";
import authbg from "../../../public/authbg.png";
import welcome from "../../../public/welcome.png";
import logo from "../../../public/logoBlack.png";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen flex bg-[#F5DCBD]">
      <div className="w-3/5 relative">
        <Image src={authbg} fill={true} alt="Dress Up Exchange" className="object-fill" />
        <Image src={welcome} alt="Wellcome to Dress up exchange" className="absolute w-1/2 bottom-8 left-10" />/
        <Image src={logo} alt="Dressup exchange logo" className="absolute w-1/5 right-12" />
      </div>
      <div className="w-2/5 flex items-center justify-center">{children}</div>
    </section>
  );
}
