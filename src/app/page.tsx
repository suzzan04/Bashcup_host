"use client";
import About from "@/components/Landing/About";
import Banners from "@/components/Landing/Banners";
// import Customer from "@/components/Landing/Customer";
import LatestHandiCraft from "@/components/Landing/LatestHandicraft";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";
import BoilerPlate from "./BoilerPlate";
import { useEffect } from "react";
import { getAllProducts } from "@/service/items/products";
import { ItemDetail } from "@/@types/Item";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setProduct } from "@/redux/features/product/product";
import { getAllHandicraftItems } from "@/service/items/handicraft";
import { setHandicraftItems } from "@/redux/features/product/handicraft";
import { getAllBanner } from "@/service/banner/banner";
import { BannerDetail } from "@/@types/Banner";
import { setBanners } from "@/redux/features/banner/banner";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);
  const menuData = products.products.filter((item) => item.isSpecial !== true);
  const banner = useAppSelector((state) => state.banner);
  const mainPageBanner = banner.items.filter(
    (item) => item.forMainPage === true
  );

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllProducts();
      const handicraftResponse = await getAllHandicraftItems();
      const bannerResponse = await getAllBanner();
      if (
        !response.success ||
        !handicraftResponse.success ||
        !bannerResponse.success
      ) {
        console.error(response.message);
        return;
      }
      const handicraftData = handicraftResponse.data as ItemDetail[];
      const data = response.data as ItemDetail[];
      const bannerData = bannerResponse.data as BannerDetail[];
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

      bannerData.map((banner) => {
        const id = banner._id.toString();
        dispatch(
          setBanners({
            banner: {
              ...banner,
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
        <Banners banner={mainPageBanner} />
        <Specials />
        <LatestHandiCraft />
        <About />
        <Menu menuItems={menuData} title="MENU" />
        {/* <Customer /> */}
      </BoilerPlate>
    </div>
  );
}
