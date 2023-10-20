import Image from "next/image";
import React from "react";
import { Start } from ".";
import Link from "next/link";

type product = {
  name: string;
  price: number;
  productId: number;
  thumbnail: string;
};
export default function ProductCard({ name, price, productId, thumbnail }: product) {
  return (
    <div className="shadow-lg hover:shadow-2xl">
      <Link href={`product/${productId}`} className="flex flex-col">
        <div className={`relative h-72 max-h-72`}>
          <Image src={thumbnail} alt="aaa" fill className="object-cover" priority />
        </div>

        <div className="p-3 bg-slate-100 flex justify-around flex-col fill-transparent">
          <h2 className="text-lg line-clamp-2 mb-2">{name}</h2>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="items-center">4.4/5</h3>
              <Start rating={4.4} />
            </div>

            <h3 className="text-right text-sm mr-3 text-orange-400">{price?.toLocaleString()}VND</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
