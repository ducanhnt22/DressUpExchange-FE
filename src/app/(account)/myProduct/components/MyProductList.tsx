import React from "react";
import UserProductCard from "./UserProductCard";

type props = {
  userProduct: [
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
  token: string | undefined;
};

export default function MyProductList({ userProduct, token }: props) {
  return (
    <div>
      <div className="flex font-bold text-3xl my-4 justify-center">
        My Product
      </div>
      <div className="grid grid-cols-4 gap-2 p-2">
        {userProduct.map((product) => (
          <UserProductCard
            name={product.name}
            price={product.price}
            productId={product.productId}
            thumbnail={product.thumbnail}
            key={product.productId}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}
