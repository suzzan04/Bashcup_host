"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import Banners from "@/components/Landing/Banners";
import LatestHandiCraft from "@/components/Landing/LatestHandicraft";
import { useAppSelector } from "@/redux/store";
import Menu from "@/components/Landing/Menu";

const Page = () => {
  const handicraft = useAppSelector((state) => state.handicraft);
  const menuData = handicraft.items.filter((item) => item.isSpecial !== true);
  const banner = useAppSelector((state) => state.banner);
  const handicraftBanner = banner.items.filter(
    (item) => item.forMainPage === false
  );
  return (
    <BoilerPlate>
      <Banners banner={handicraftBanner} />
      <LatestHandiCraft />
      <Menu menuItems={menuData} title="HANDICRAFT" />
    </BoilerPlate>
  );
};

export default Page;
