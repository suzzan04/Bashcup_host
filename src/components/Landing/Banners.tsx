"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    <div className="w-full h-full max-h-[500px] overflow-hidden relative">
      <Carousel
        orientation="horizontal"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {bannerImages.map((data, index) => (
            <CarouselItem key={index}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banners;
