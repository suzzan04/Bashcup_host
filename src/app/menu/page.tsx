import React from "react";
import BoilerPlate from "../BoilerPlate";
import Category from "@/components/Landing/Category";
import Menu from "@/components/Landing/Menu";

const Page = () => {
  return (
    <BoilerPlate>
      <Category />
      <Menu />
    </BoilerPlate>
  );
};

export default Page;
