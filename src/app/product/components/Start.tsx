import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

type props = { rating: number };
export default function Start({ rating }: props) {
  const starFill: number = Math.floor(rating);
  const decimal: number = Math.floor(+(rating - starFill).toFixed(2) * 100);
  let starOuline;
  if (decimal > 0) {
    starOuline = 5 - starFill - 1;
  } else {
    starOuline = 5 - starFill;
  }

  return (
    <div>
      <div className="flex">
        {[...Array(starFill)].map((_, i) => (
          <div className="relative" key={i}>
            <div className="absolute overflow-hidden text-2xl w-[100%]">
              <BsStarFill className="text-yellow-400" />
            </div>
            <BsStar className="overflow-hidden text-2xl text-yellow-400" />
          </div>
        ))}

        {decimal > 0 && (
          <div className="relative">
            <div className={`absolute overflow-hidden text-2xl`} style={{ width: `${decimal}%` }}>
              <BsStarFill className="text-yellow-400" />
            </div>
            <BsStar className="overflow-hidden text-2xl text-yellow-400" />
          </div>
        )}

        {starOuline > 0 &&
          [...Array(starOuline)].map((_, i) => (
            <div className="relative" key={i}>
              {/* <div className="absolute overflow-hidden text-2xl w-[100%]">
                <BsStarFill className="text-yellow-400" />
              </div> */}
              <BsStar className="overflow-hidden text-2xl text-yellow-400" />
            </div>
          ))}
      </div>
    </div>
  );
}
