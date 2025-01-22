"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ItemDetail } from "@/@types/Item";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
} from "@/redux/features/cart/cart";

const ItemCard: React.FC<ItemDetail> = ({
  _id,
  image,
  name,
  description,
  price,
  category,
  isSpecial,
}) => {
  const [isActiveCart, setIsActiveCart] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartProduct = cartItems.find((item) => item._id === _id);
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    if (cartProduct) {
      dispatch(
        updateProductQuantity({
          id: _id,
          quantity: cartProduct.quantity + 1,
        })
      );
    }
  };

  const decreaseQuantity = () => {
    if (!cartProduct) return;
    if (cartProduct.quantity <= 1) {
      removeProductFromCart({
        id: _id,
      });
      setIsActiveCart(false);
      return;
    }
    dispatch(
      updateProductQuantity({
        id: _id,
        quantity: cartProduct.quantity - 1,
      })
    );
  };

  const handleCart = () => {
    setIsActiveCart(!isActiveCart);
    dispatch(
      addProductToCart({
        item: {
          _id,
          image,
          name,
          description,
          price,
          category,
          isSpecial,
          quantity: 1,
        },
      })
    );
  };

  useEffect(() => {
    if (cartProduct) {
      setIsActiveCart(true);
    }
  }, [cartProduct]);
  return (
    <div className="w-full h-full flex flex-col bg-brand-bg max-w-[350px] rounded-lg shadow shadow-brand-accent_light overflow-hidden">
      <div className=" h-auto w-full overflow-hidden max-h-[250px] rounded-t-lg">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            className="w-full object-cover object-center"
          />
        </AspectRatio>
      </div>
      <div className="px-3 py-2 flex flex-col gap-1 items-start overflow-hidden ">
        <h5 className="text-xl font-semibold text-brand-secondary">{name}</h5>
        <p className="text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center gap-3 w-full py-3">
          <p className="text-xl font-extrabold text-brand-secondary">
            Rs {price}
          </p>
          {isActiveCart ? (
            <div className="flex items-center justify-center gap-2.5">
              <Button
                className="bg-brand-secondary hover:bg-brand-accent_dark size-8 flex items-center justify-center"
                onClick={decreaseQuantity}
              >
                -
              </Button>
              <p className="text-lg">{cartProduct?.quantity}</p>
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
                handleCart();
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

export default ItemCard;
