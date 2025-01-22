"use client";
import React from "react";
import { CartItem } from "@/components/Common/Card/CartCard";
import BoilerPlate from "../BoilerPlate";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  removeProductFromCart,
  updateProductQuantity,
} from "@/redux/features/cart/cart";

const Page = () => {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Chicken Burger",
  //     description: "Chicken Burger with extra fries",
  //     price: 210,
  //     quantity: 1,
  //     image: "/image/items/drink1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Chicken Pizza",
  //     description: "Large chicken pizza with extra cheese",
  //     price: 450,
  //     quantity: 2,
  //     image: "/image/items/drink2.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Chicken Pizza",
  //     description: "Large chicken pizza with extra cheese",
  //     price: 450,
  //     quantity: 2,
  //     image: "/image/handicraft/item1.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Chicken Burger",
  //     description: "Chicken Burger with extra fries",
  //     price: 210,
  //     quantity: 1,
  //     image: "/image/handicraft/item2.jpg",
  //   },
  // ]);

  // const handleDeleteItem = (itemId: number) => {
  //   setCartItems(cartItems.filter((item) => item.id !== itemId));
  // };

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const increaseQuantity = (id: string, quantity: number) => {
    dispatch(
      updateProductQuantity({
        id: id,
        quantity: quantity + 1,
      })
    );
  };

  const decreaseQuantity = (id: string, quantity: number) => {
    if (quantity <= 1) {
      removeProductFromCart({
        id: id,
      });
      return;
    }
    dispatch(
      updateProductQuantity({
        id: id,
        quantity: quantity - 1,
      })
    );
  };

  const deleteItem = (id: string) => {
    dispatch(removeProductFromCart({ id: id }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total: number = subtotal;

  return (
    <>
      <BoilerPlate>
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col max-w-[1800px]  w-full gap-8">
            <h1 className="py-8 text-2xl sm:text-3xl text-center">Your Cart</h1>

            <div className="flex flex-col justify-center w-full gap-5">
              <div className="grid grid-cols-8 w-full space-x-8 text-[#9A9A9A] border-b pb-3 border-[#9A9A9A] px-3 text-sm">
                <div className="col-span-3 px-5 md:col-span-4">Product</div>
                <div className="hidden md:block md:col-span-1">Price</div>
                <div className="col-span-2 md:col-span-1">Quantity</div>
                <div className="col-span-2 md:col-span-1">Total</div>
              </div>
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  onDelete={deleteItem}
                  onDecreaseQuantity={decreaseQuantity}
                  onIncreaseQuantity={increaseQuantity}
                />
              ))}
            </div>

            <div className="bg-[#F4F4F4] px-8 py-5 rounded w-full">
              <div className="py-3 mb-4 text-lg font-bold sm:py-0">
                Order Summary
              </div>
              <div className="grid w-full grid-cols-1 space-y-10 sm:space-x-10 sm:space-y-0 sm:grid-cols-2">
                {/* Promo code */}
                <div className="flex justify-center col-span-1 mb-4 max-w-[450px] flex-nowrap flex-col  gap-4">
                  <p className="text-brand-text_secondary">
                    Do you have any promo code for discount?
                  </p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-3/4 px-3 py-2 mr-2 border border-gray-300 rounded-md"
                    />
                    <button className="px-4 py-2 font-medium bg-brand-accent text-background  rounded-md hover:bg-brand-accent_dark">
                      Apply
                    </button>
                  </div>
                </div>
                {/* Sub total */}
                <div className="flex flex-col col-span-1 gap-4 max-w-[500px] justify-self-start w-full place-self-start sm:justify-center mx-auto sm:place-self-center">
                  <div className="flex justify-between px-2">
                    <span className="text-gray-700">Sub Total</span>
                    <span>Rs {subtotal}</span>
                  </div>
                  <div className="flex justify-between px-2">
                    <span className="text-gray-700">Discount</span>
                    <span>-</span>
                  </div>
                  <div className="flex justify-between px-2 font-medium">
                    <span className="text-gray-700">Total</span>
                    <span>Rs {total}</span>
                  </div>

                  <button className="w-full flex justify-between px-5 py-2 font-medium text-background bg-brand-accent  rounded-md hover:bg-brand-accent_dark">
                    Checkout
                    <span>Rs {total}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BoilerPlate>
    </>
  );
};

export default Page;
