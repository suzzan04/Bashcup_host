"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Item } from "@/@types/Item";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MenuCard: React.FC<Item> = ({ image, name, description, price }) => {
  const [isActiveCart, setIsActiveCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity((prev) => ++prev);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      setIsActiveCart(false);
      return;
    }
    setQuantity((prev) => --prev);
  };
  return (
    <div className="w-full h-full flex flex-col border border-brand-accent rounded-lg max-w-[350px] overflow-hidden flex-grow shadow-sm">
      <div className=" h-auto w-full overflow-hidden max-h-[200px]">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            className="w-full object-cover object-top"
          />
        </AspectRatio>
      </div>
      <div className="px-3 py-2 flex flex-col gap-1 items-start overflow-hidden ">
        <h5 className="text-xl font-semibold text-brand-secondary">{name}</h5>
        <p className="text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center gap-3 w-full py-3">
          <p className="text-xl font-extrabold text-brand-text">Rs {price}</p>
          {isActiveCart ? (
            <div className="flex items-center justify-center gap-2.5">
              <Button
                className="bg-brand-secondary hover:bg-brand-accent_dark size-8 flex items-center justify-center"
                onClick={decreaseQuantity}
              >
                -
              </Button>
              <p className="text-lg">{quantity}</p>
              <Button
                className="bg-brand-secondary hover:bg-brand-accent_dark size-8 flex items-center justify-center"
                onClick={increaseQuantity}
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              className="bg-brand-secondary hover:bg-brand-accent_dark"
              onClick={() => {
                setIsActiveCart(true);
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
