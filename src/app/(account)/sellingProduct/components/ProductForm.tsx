import React, { memo } from "react";

type props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};
function ProductForm({ setName, setSize, setPrice, setQuantity, setDescription, setCategory }: props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-1/2">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
          Tên sản phẩm
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 ">
          Size
        </label>
        <input
          type="text"
          id="size"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">
          Giá
        </label>
        <input
          type="text"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setPrice(+e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 ">
          Số lượng
        </label>
        <input
          type="quntity"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Lựa chọn loại sản phẩm
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => setCategory(+e.target.value)}
        >
          <option selected>Choose a category</option>
          <option value="1">Full bộ</option>
          <option value="2">Tóc</option>
          <option value="3">khác</option>
        </select>
      </div>
      <div className="w-1/2">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mô tả
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
export default memo(ProductForm);
