"use client";
import React, { useState } from "react";
import { ProductForm, Upload } from ".";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateProduct({
  token,
}: {
  token: string | undefined;
}) {
  const [name, setName] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  const router = useRouter();
  const handleCreateProduct = async () => {
    const thumbnail = imgUrl[0];
    const res = await fetch(`https://dressupexchange.somee.com/api/product`, {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        size,
        price,
        quantity,
        thumbnail,
        images: imgUrl,
        categoryId: category,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    toast.success(data);
    router.push("/myProduct");
  };

  return (
    <div>
      <div className="flex font-bold text-3xl my-4 justify-center">
        Selling Product
      </div>
      <div className="flex flex-col justify-center items-center h-full ">
        <ProductForm
          setName={setName}
          setSize={setSize}
          setPrice={setPrice}
          setQuantity={setQuantity}
          setDescription={setDescription}
          setCategory={setCategory}
        />
        <Upload token={token} imgUrl={imgUrl} setImgUrl={setImgUrl} />
        <button
          onClick={() => handleCreateProduct()}
          className="p-3 mb-2 bg-orange-400 outline outline-offset outline-stone-500 mt-5 rounded-lg font-bold hover:bg-yellow-800"
        >
          Tạo mới sản phẩm
        </button>
      </div>
    </div>
  );
}
