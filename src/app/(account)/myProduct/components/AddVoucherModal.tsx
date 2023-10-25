"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function AddVoucherModal({
  productId,
  setOpen,
  token,
}: {
  productId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | undefined;
}) {
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [remainingCount, setRemainingCount] = useState<number>(0);

  const handleAddVoucher = async () => {
    const res = await fetch(
      `https://dressupexchange.somee.com/api/voucher/CreateVoucher?ProductID=${productId}`,
      {
        method: "POST",
        body: JSON.stringify({ name, code, discountAmount, remainingCount }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (res.ok) {
      toast.success(data.msg);
      setOpen(false);
    }
  };
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-stone-300">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-stone-400">
            <h3 className="flex text-xl justify-center font-semibold text-gray-900 ">
              Add Voucher
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => setOpen(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Voucher Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Voucher Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Voucher Code
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Voucher Code"
                required
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Discount Amount
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Discount Amount %"
                required
                onChange={(e) => setDiscountAmount(+e.target.value)}
              />
              <span className="absolute top-1/2 right-2 text-xl">%</span>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Voucher Quantity
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Voucher Quantity"
                required
                onChange={(e) => setRemainingCount(+e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleAddVoucher}
            >
              Create
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
