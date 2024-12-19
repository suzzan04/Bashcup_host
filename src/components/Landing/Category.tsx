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
      <div className="w-full h-full max-w-[1800px] bg-background px-8 py-10 flex flex-col gap-14">
        <h3 className="text-xl text-left font-semibold tracking-wider px-3 ">
          CATEGORIES
        </h3>
        <div className="w-full px-3 flex gap-5 justify-between flex-wrap ">
          {categoriesData.map((data, index) => (
            <div
              className=" rounded-full  flex flex-col gap-2 cursor-pointer items-center hover:scale-125 roverflow-hidden"
              key={index}
            >
              <Image
                src={data.image}
                alt={data.name}
                width={300}
                height={400}
                className="object-contain object-center size-32 rounded-full overflow-hidden"
              />
              <p className="text-sm tracking-wide text-brand-accent_dark">
                {data.name.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
