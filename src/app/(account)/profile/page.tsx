import React from "react";

export default function Profile() {
  return (
    <div className="h-full flex flex-col items-center mt-5 gap-5">
      <div className="font-bold text-3xl">Update Profile</div>
      <div className="w-1/2">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
          Tên
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">
          Số điện thoại
        </label>
        <input
          type="text"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
          Địa chỉ
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Lưu Thay đổi
      </button>
    </div>
  );
}
