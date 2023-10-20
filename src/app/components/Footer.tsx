import React from "react";
import Link from "next/link";
import { BsFacebook, BsFillRocketTakeoffFill } from "react-icons/bs";
import Logo from "../../../public/logo.png";
import LogoBlack from "../../../public/logoBlack.png";
import Image from "next/image";
import { FaArrowsRotate } from "react-icons/fa6";
import { GrCircleInformation, GrSupport, GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="fix">
      <div className="bg-[#C0A380]">
        <div className="grid grid-cols-4 pt-8 pb-8">
          <div className="flex items-center gap-4 justify-center">
            <BsFillRocketTakeoffFill className="text-3xl" />
            <div>
              <h3 className="font-bold">COSPLAY COSTUME SALE</h3>
              <p className="font-medium">Any One Piece 12% OFF</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <FaArrowsRotate className="text-3xl" />
            <div>
              <h3 className="font-bold">PRODUCT RETURNS</h3>
              <p className="font-medium">within 30 days</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <GrCircleInformation className="text-3xl" />
            <div>
              <h3 className="font-bold">FREESHIP 1 TIME</h3>
              <p className="font-medium">When you sign up</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <GrSupport className="text-3xl" />
            <div>
              <h3 className="font-bold ">WE SUPPORT</h3>
              <p className="font-medium">24/7 amazing services</p>
            </div>
          </div>
        </div>
        <div className="border border-solid border-[#F5DCBD]"></div>
        <div className="grid grid-cols-4 justify-center">
          <div className="flex items-center gap-4 justify-center mt-5">
            <Link href={"/"}>
              <Image src={Logo} width={150} height={150} alt="Dress up exchange logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <h2 className="font-bold mt-8 text-xl">Company Info</h2>
          </div>
          <div className="flex items-center gap-4 justify-center ml-4">
            <h2 className="font-bold mt-8 text-xl">Customer Service</h2>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <h2 className="font-bold mt-8 text-xl">Help & Support</h2>
          </div>
          <div className="ml-10 mr-10 mt-3 mb-3">
            <h3 className="font-bold mb-3 mt-3">JOIN US TO GET LATEST NEWS AND SPEICAL OFFERS</h3>
            <div className="flex items-center mb-3 mt-3">
              <input
                className="placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#825942] focus:ring-[#825942] focus:ring-1 sm:text-sm"
                placeholder="Email Address:"
              />
              <button className="bg-gray-300 hover:bg-[#825942] text-gray-800 font-bold text-sm py-2 px-3 ml-1 rounded">
                Subcribe
              </button>
            </div>
            <div className="flex font-bold mt-1 mb-1">
              <div className="font-bold justify-center">Find Us On: </div>
              <Link href={"https://www.facebook.com/due.vn"}>
                <BsFacebook className="text-xl ml-4 mr-4  justify-center"></BsFacebook>
              </Link>
              <Link href={"https://www.instagram.com/dress.upexchange/"}>
                <GrInstagram className="text-xl justify-center"></GrInstagram>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="text-sm ml-11">
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>About DressUpExchange</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Affiliate Program</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Apply to be our influencers</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Wholesale Program</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Privacy</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Terms and Conditions</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-sm mr-9">
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Contact Us</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Coupons</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Reward Points</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Payment Methods</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-sm">
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Shipping And Handling</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Return And Refund</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>Track Your Order</Link>
              </div>
              <div className="hover:text-amber-100 mb-1">
                <Link href={"/"}>How to Order</Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="border border-solid border-[#F5DCBD]"></div>
        <p className="text-sm ml-10 mt-1 mb-1">Copyright © 2023 - DressUpExchange</p>
      </div>
    </footer>
  );
}
