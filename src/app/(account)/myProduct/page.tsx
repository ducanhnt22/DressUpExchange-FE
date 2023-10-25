import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import { getServerSession } from "next-auth";
import { getUserProduct } from "@/lib/api";
import MyProductList from "./components/MyProductList";

interface userProductType {
  count: number;
  items: [
    {
      userId: number;
      productId: number;
      name: string;
      desciption: string;
      price: number;
      quantity: number;
      size: string;
      thumbnail: string;
      images: [string];
      user: {
        phone: string;
        name: number;
        role: string;
        address: string;
      };
    }
  ];
}
export default async function MyProduct() {
  const session = await getServerSession(authOptions);
  const userProduct: userProductType = await getUserProduct(
    session?.user.userId
  );
  return (
    <div>
      <MyProductList
        userProduct={userProduct.items}
        token={session?.user.accessToken}
      />
    </div>
  );
}
