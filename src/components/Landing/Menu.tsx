"use client";
import React from "react";
import MenuCard from "../Common/Card/MenuCard";
import { useAppSelector } from "@/redux/store";

const Menu = () => {
  const products = useAppSelector((state) => state.product);
  const menuData = products.products.filter((item) => item.isSpecial !== true);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full max-w-[1800px] px-5 pt-8 pb-16 flex flex-col gap-10 bg-background">
        <h3 className="text-xl text-center font-semibold tracking-wider px-3 w-full py-6 ">
          COFFEE
        </h3>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[1500px] w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {menuData.map((data, index) => (
              <MenuCard
                key={index}
                _id={data._id}
                category={data.category}
                description={data.description}
                image={data.image}
                name={data.name}
                price={data.price}
                isSpecial={data.isSpecial}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
