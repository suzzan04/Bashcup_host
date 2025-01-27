import Link from "next/link";
import React from "react";
export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh]">
      <h1 className="mt-4 text-2xl font-semibold text-gray-700">
        No items in your cart
      </h1>
      <p className="mt-2 text-gray-500">
        Looks like you havent added anything to your cart yet.
      </p>
      <Link
        href={"/"}
        className="px-6 py-3 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Start Shopping
      </Link>
    </div>
  );
};
