"use client";
import React from "react";
import { category } from "./data.json";
import Image from "next/image";

type Categories = {
  id: string;
  name: string;
  image: string;
};

const Category = () => {
  const categoriesData: Categories[] = category;
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-full max-w-[1800px] bg-background px-8 py-16 flex flex-col gap-14">
        <h3 className="text-xl text-center font-semibold tracking-wider px-3 ">
          CATEGORIES
        </h3>
        <div className="w-full px-3 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {categoriesData.map((data, index) => (
            <div
              className="  flex flex-col gap-2 cursor-pointer items-center "
              key={index}
            >
              <div className="w-full h-full relative  max-w-[300px] min-w-[150px]  overflow-hidden hover:scale-110 ">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={600}
                  height={600}
                  className=" object-center w-full h-full object-cover  overflow-hidden rounded-2xl"
                />
                <p className="tracking-wide text-background font-bold  absolute bg-[#0303038a] w-full h-full max-w-[300px] rounded-2xl top-0 left-0 flex justify-center items-center">
                  {data.name.toLocaleUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
