"use client";
import React from "react";
import { specials } from "./data.json";
import { Item } from "@/@types/Item";
import MenuCard from "../Common/Card/MenuCard";

const Menu = () => {
  const menuData: Item[] = specials;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full max-w-[1800px] px-5 py-10 flex flex-col gap-8 bg-background">
        <h3 className="text-xl text-center font-semibold tracking-wider px-3 w-full py-6 ">
          COFFEE
        </h3>
        <div className="flex w-full justify-center items-center">
          <div className="flex gap-5 flex-wrap max-w-[1500px] w-full justify-center lg:justify-start">
            {menuData.map((data, index) => (
              <MenuCard
                key={index}
                id={data.id}
                category={data.category}
                description={data.description}
                image={data.image}
                name={data.name}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
