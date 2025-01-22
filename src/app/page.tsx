"use client";
import About from "@/components/Landing/About";
import Banners from "@/components/Landing/Banners";
import Customer from "@/components/Landing/Customer";
import LatestHandiCraft from "@/components/Landing/LatestHandicraft";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";
import BoilerPlate from "./BoilerPlate";
import { useEffect } from "react";
import { getAllProducts } from "@/service/items/products";
import { ItemDetail } from "@/@types/Item";
import { useAppDispatch } from "@/redux/store";
import { setProduct } from "@/redux/features/product/product";
import { getAllHandicraftItems } from "@/service/items/handicraft";
import { setHandicraftItems } from "@/redux/features/product/handicraft";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllProducts();
      const handicraftResponse = await getAllHandicraftItems();
      if (!response.success || !handicraftResponse.success) {
        console.error(response.message);
      }
      const handicraftData = handicraftResponse.data as ItemDetail[];
      const data = response.data as ItemDetail[];
      data.map((item) => {
        const id = item._id.toString();
        dispatch(
          setProduct({
            product: {
              ...item,
              _id: id,
            },
          })
        );
      });
      handicraftData.map((item) => {
        const id = item._id.toString();
        dispatch(
          setHandicraftItems({
            product: {
              ...item,
              _id: id,
            },
          })
        );
      });
    };
    fetch();
  }, [dispatch]);
  return (
    <div className="w-full h-full min-w-[80vw] min-h-[80vh] max-w-screen overflow-hidden">
      <BoilerPlate>
        <Banners />
        <Specials />
        <LatestHandiCraft />
        <About />
        <Menu />
        <Customer />
      </BoilerPlate>
    </div>
  );
}
