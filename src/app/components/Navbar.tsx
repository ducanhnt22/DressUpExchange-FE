import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import { PiUser } from "react-icons/pi";
import { BsCart2 } from "react-icons/bs";
import { SearchBar, SignOut } from ".";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <header className="w-full">
      <div className="flex bg-[#FFFFFF] justify-between p-2">
        <div className="flex font-semibold gap-10 ml-20">
          <h3>Download App</h3>
          <h3>Premium</h3>
        </div>
        <h3 className="font-semibold mr-20">Contact us</h3>
      </div>
      <div className="bg-[#825942] flex items-center p-3 gap-4 justify-center">
        <div className="ml-16 mr-3">
          <Link href={"/"}>
            <Image src={Logo} width={100} height={50} alt="Dress up exchange logo" />
          </Link>
        </div>

        <SearchBar />

        {session ? (
          <div className="flex items-center text-[#ECE8E8] mr-20 gap-5">
            <Link href={"/profile"}>
              <PiUser />
            </Link>

            <Link href={"/cart"}>
              <BsCart2 />
            </Link>
            {/* <button>Đăng xuất</button> */}
            <SignOut />
          </div>
        ) : (
          <div className="flex items-center text-[#ECE8E8] mr-20 gap-5">
            <Link href={"/signIn"}>Đăng nhập</Link>
            <Link href={"/signUp"}>Đăng ký</Link>
          </div>
        )}
      </div>
    </header>
  );
}
