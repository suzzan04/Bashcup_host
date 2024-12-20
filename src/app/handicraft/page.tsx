import React from "react";
import BoilerPlate from "../BoilerPlate";
import Banners from "@/components/Landing/Banners";
import LatestHandiCraft from "@/components/Landing/LatestHandicraft";
import Menu from "@/components/Landing/Menu";

const Page = () => {
  return (
    <BoilerPlate>
      <Banners />
      <LatestHandiCraft />
      <Menu />
    </BoilerPlate>
  );
};

export default Page;
