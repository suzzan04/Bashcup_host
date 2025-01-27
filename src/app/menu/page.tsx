"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
// import Category from "@/components/Landing/Category";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";
import { useAppSelector } from "@/redux/store";

const Page = () => {
  const products = useAppSelector((state) => state.product);
  const menuData = products.products.filter((item) => item.isSpecial !== true);
  return (
    <BoilerPlate>
      {/* <Category /> */}
      <Specials />
      <Menu menuItems={menuData} title="MENU" />
    </BoilerPlate>
  );
};

export default Page;
