import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
type BoilerPlateProps = {
  children: React.ReactNode;
};
const BoilerPlate: React.FC<BoilerPlateProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BoilerPlate;
