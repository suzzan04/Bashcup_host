"use client";
import React from "react";
import ItemCard from "../Common/Card/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppSelector } from "@/redux/store";
const LatestHandiCraft = () => {
  const handicraft = useAppSelector((state) => state.handicraft);
  const specialData = handicraft.items.filter(
    (item) => item.isSpecial === true
  );
  // console.log({ handicraft });
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-full max-w-[1800px] bg-background px-8 py-16 flex flex-col gap-14">
        <h3 className="text-xl text-center font-semibold tracking-wider ">
          MITHO SAMJHANA
        </h3>
        <div className="flex gap-4 items-center w-full justify-center relative">
          <Swiper
            loop
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 40,
              },
            }}
            spaceBetween={30}
            draggable={true}
            centeredSlides={true}
            navigation={{
              prevEl: ".handicraft-prev",
              nextEl: ".handicraft-next",
            }}
          >
            {specialData.map((data) => (
              <SwiperSlide key={data._id} className="!flex justify-center">
                <ItemCard
                  _id={data._id}
                  description={data.description}
                  image={data.image}
                  name={data.name}
                  price={data.price}
                  key={data._id}
                  category={data.category}
                  isSpecial={data.isSpecial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="absolute top-1/2 left-4 handicraft-prev bg-brand-accent_light hover:bg-brand-accent_dark text-brand-text hover:text-background duration-100 ease-in-out cursor-pointer z-10 p-2 rounded-full  transform -translate-y-1/2 flex justify-center items-center"
            aria-label="Previous Slide"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-6 handicraft-next bg-brand-accent_light hover:bg-brand-accent_dark text-brand-text hover:text-background duration-100 ease-in-out cursor-pointer z-10 p-2 rounded-full  transform -translate-y-1/2 flex justify-center items-center"
            aria-label="Next Slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestHandiCraft;
