"use client";
import Image from "next/image";
import React, { useCallback, useState, memo } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";

type props = {
  token: string | undefined;
  imgUrl: string[];
  setImgUrl: React.Dispatch<React.SetStateAction<string[]>>;
};
function Upload({ token, imgUrl, setImgUrl }: props) {
  // const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUploadImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        const file = files[0];
        if (!file) {
          return;
        }
        const formData = new FormData();
        formData.append("file", file);

        try {
          setLoading(true);
          const res = await fetch(
            `https://dressupexchange.somee.com/api/files`,
            {
              method: "POST",
              body: formData,
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (res.ok) {
            const data = await res.json();
            setImgUrl((pre) => [...pre, data.imgUrl]);
            setLoading(false);
          }
          if (res.status === 401) {
            console.log("err");
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    []
  );

  return (
    <div className="flex gap-2 flex-col w-1/2">
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        Hình ảnh của sản phẩm (Hình ảnh đầu tiên sẽ được chọn làm thumbnail)
      </label>
      <div className="flex gap-2">
        <label
          htmlFor="upload"
          className="relative bg-gray-300 w-32 h-32 rounded-lg border-2 border-solid border-gray-500 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-400 box-border"
        >
          {loading ? (
            <svg
              role="status"
              className="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-600 group-hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          )}

          <span className="text-gray-600 group-hover:text-gray-700 text-center">
            Nhấp để tải lên hình ảnh
          </span>
          <input
            type="file"
            id="upload"
            className="hidden"
            onChange={(e) => handleUploadImage(e)}
            disabled={loading}
          />
        </label>
        {/* flex gap-2 flex-wrap */}
        <div className="grid grid-cols-3 gap-2">
          {imgUrl?.length > 0 &&
            imgUrl?.map((url, i) => (
              <div key={i} className="w-32 h-32 relative rounded-lg group">
                <Image
                  src={url}
                  fill
                  alt="img"
                  className="rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#150E0A] opacity-0 group-hover:opacity-50 flex items-center justify-center transition-opacity duration-300 gap-2">
                  <button className="text-white text-xl opacity-50 hover:opacity-100">
                    <AiOutlineEye />
                  </button>
                  <button
                    className="text-white text-xl opacity-50 hover:opacity-100"
                    onClick={() =>
                      setImgUrl((pre) => pre.filter((imgUrl) => imgUrl !== url))
                    }
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default memo(Upload);
