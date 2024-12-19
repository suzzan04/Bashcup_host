"use client";
import React from "react";
import ItemCard from "../Common/Card/ItemCard";
import { specials } from "./data.json";
import { Item } from "@/@types/Item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Specials = () => {
  const specialData: Item[] = specials;
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-full max-w-[1800px] bg-background px-8 py-16 flex flex-col gap-14">
        <h3 className="text-xl text-center font-semibold tracking-wider ">
          OUR SPECIAL COFFEE
        </h3>
        <div className="flex gap-4 items-center w-full justify-center">
          <Carousel
            orientation="horizontal"
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {specialData.slice(1, 5).map((data) => (
                <CarouselItem
                  key={data.id}
                  className="basis-1/2 md:basis-1/3 md:pl-4 pl-2"
                >
                  <ItemCard
                    id={data.id}
                    description={data.description}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    key={data.id}
                    category={data.category}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Specials;
