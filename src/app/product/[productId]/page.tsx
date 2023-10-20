import React from "react";
import { ProductCarousel, ProductImage, ProductInfo, Rating } from "./components";
import { ProductCard, Start } from "../components";
import Link from "next/link";
import { IProduct, IVoucher } from "@/types";
import { getProductById } from "@/lib";
import { getProductByUserId, getUserProduct, getVoucherByProductId } from "@/lib/api";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default async function ProductDetail({ params }: { params: { productId: string } }) {
  const productPromise: Promise<IProduct> = getProductById(params.productId);
  const voucherPromise: Promise<IVoucher> = getVoucherByProductId(params.productId);
  const [product, voucher] = await Promise.all([productPromise, voucherPromise]);
  const session = await getServerSession(authOptions);
  const listProduct: IProduct = await getProductByUserId(session?.user.userId);
  // console.log(listProduct)
  return (
    <div>
      <div className="bg-[#EAB97F] px-20 py-4">
        <Link href={"#"} className="text-[#8A5656]">
          Home/
        </Link>
        <Link href={"#"} className="text-[#8A5656]">
          fill/
        </Link>
        <Link href={"#"} className="text-white">
          name
        </Link>
      </div>
      <div className="bg-[#F5DCBD] p-8">
        <div className="w-[90%] mx-auto flex">
          <ProductImage thumbnail={product?.thumbnail} images={product?.images} />
          <ProductInfo
            name={product?.name}
            price={product?.price}
            size={product?.size}
            productId={product.productId}
            voucher={voucher}
            totalQuantity={product.quantity}
            thumbnail={product.thumbnail}
          />
        </div>

        {/*  <h4 className="border-b-2 border-solid border-black ml-2 py-2">Môt tả sản phẩm</h4>
          <p className="pl-2">Sản phẩm tốt</p> */}
        <div className="flex gap-2 mt-5">
          <div className="w-3/5 flex flex-col gap-2">
            <div className="bg-white pb-2">
              <h4 className="border-b-2 border-solid border-black ml-4 py-2 text-xl text-center font-bold">
                Mô tả sản phẩm
              </h4>
              <p className="px-4">{product?.description}</p>
            </div>
          </div>
          <div className="w-2/5">
            <Rating />
          </div>
        </div>
        <div className="w-full mt-5 bg-white p-4">
          <h4 className="border-b-2 border-solid border-black ml-2 py-2 text-xl text-center font-bold">
            Sản phẩm cùng người bán
          </h4>
          <div className="w-full gap-2 grid grid-cols-5 mt-3">
            {
            listProduct?.items.map((product) => (
              <ProductCarousel
              key={product.productId}
              name={product.name}
              price={product.price}
              productId={product.productId}
              thumbnail={product.thumbnail}
            />
          ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
