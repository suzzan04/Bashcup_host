import React from "react";
import BoilerPlate from "../BoilerPlate";
// import Category from "@/components/Landing/Category";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";

const Page = () => {
  return (
    <BoilerPlate>
      {/* <Category /> */}
      <Specials />
      <Menu />
    </BoilerPlate>
  );
};

export default Page;
