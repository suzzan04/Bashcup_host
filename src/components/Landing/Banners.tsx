"use client";
import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
type BannerProps = {
  name: string;
  src: string;
};

const Banners = () => {
  const bannerImages: BannerProps[] = [
    {
      name: "Banner 1",
      src: "/image/banner/bash_banner.jpg",
    },
    {
      name: "Banner 2",
      src: "/image/banner/bash_banner-2.jpg",
    },
    {
      name: "Banner 3",
      src: "/image/banner/bash_coffee_banner.jpg",
    },
  ];
  return (
    <div className="w-full h-full max-h-[500px] overflow-hidden relative cursor-grab active:cursor-grabbing">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        draggable={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        {bannerImages.map((data, index) => (
          <SwiperSlide key={index}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={data.src}
                alt={data.name}
                width={0}
                height={0}
                sizes="100vw"
                fill
                className="w-full h-full object-cover object-center max-h-[500px]"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banners;
