"use client";
import Image from "next/image";
import React, { useState } from "react";

type prop = {
  thumbnail: string;
  images: [string];
};
export default function ProductImage({ thumbnail, images }: prop) {
  const [img, setImg] = useState(thumbnail);
  return (
    <div className="w-2/5 relative flex flex-col items-start gap-2">
      <Image src={img} alt="yae" width={450} height={500} className="max-h-[500px] max-w-[450px]" />
      <div className="flex gap-2 flex-wrap">
        {images.map((img) => (
          <Image
            key={Math.random()}
            src={img}
            alt="miko"
            width={80}
            height={120}
            className="border-2 border-solid border-black cursor-pointer"
            onClick={() => setImg(img)}
          />
        ))}
      </div>
    </div>
  );
}
