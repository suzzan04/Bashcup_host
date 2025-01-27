"use client";
import { ColumnProps } from "@/@types/TableProps";
import AdminTable from "@/components/Table/AdminTable";
import Image from "next/image";
import React from "react";

const data = [
  {
    name: "Handcrafted Wooden Bowl",
    price: 25.99,
    description:
      "A beautifully handcrafted wooden bowl made from sustainable materials.",
    image: "/image/items/drink1.jpg",
    category: "Home & Kitchen",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Organic Cotton T-Shirt",
    price: 19.99,
    description: "Soft and comfortable t-shirt made from 100% organic cotton.",
    image: "/image/items/drink1.jpg",
    category: "Apparel",
    isSpecial: false,
    isHandicraft: false,
  },
  {
    name: "Artisan Ceramic Vase",
    price: 45.0,
    description: "A unique ceramic vase crafted by local artisans.",
    image: "/image/items/drink1.jpg",
    category: "Decor",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Eco-friendly Bamboo Toothbrush",
    price: 3.5,
    description: "Sustainable bamboo toothbrush with biodegradable handle.",
    image: "/image/items/drink1.jpg",
    category: "Personal Care",
    isSpecial: false,
    isHandicraft: false,
  },
  {
    name: "Handwoven Cotton Scarf",
    price: 29.99,
    description: "A stylish handwoven scarf made from 100% cotton.",
    image: "/image/items/drink1.jpg",
    category: "Accessories",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Recycled Paper Notebook",
    price: 7.99,
    description:
      "Notebook made from 100% recycled paper, perfect for journaling.",
    image: "/image/items/drink1.jpg",
    category: "Stationery",
    isSpecial: false,
    isHandicraft: false,
  },
  {
    name: "Handcrafted Leather Wallet",
    price: 49.99,
    description: "Premium leather wallet handcrafted by skilled artisans.",
    image: "/image/items/drink1.jpg",
    category: "Accessories",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Organic Herbal Tea Blend",
    price: 12.5,
    description: "A soothing blend of organic herbs for relaxation.",
    image: "/image/items/drink1.jpg",
    category: "Beverages",
    isSpecial: false,
    isHandicraft: false,
  },
  {
    name: "Hand-painted Canvas Tote Bag",
    price: 35.0,
    description: "Eco-friendly tote bag featuring hand-painted designs.",
    image: "/image/items/drink1.jpg",
    category: "Bags",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Natural Beeswax Candles",
    price: 22.0,
    description: "Set of 4 natural beeswax candles with a subtle honey scent.",
    image: "/image/items/drink1.jpg",
    category: "Home Fragrance",
    isSpecial: false,
    isHandicraft: false,
  },
  {
    name: "Handcrafted Wooden Coasters",
    price: 18.75,
    description: "Set of 6 wooden coasters, each uniquely handcrafted.",
    image: "/image/items/drink1.jpg",
    category: "Home & Kitchen",
    isSpecial: true,
    isHandicraft: true,
  },
  {
    name: "Organic Lavender Soap",
    price: 5.99,
    description: "Handmade soap with organic lavender essential oil.",
    image: "/image/items/drink1.jpg",
    category: "Personal Care",
    isSpecial: false,
    isHandicraft: true,
  },
];

const columns: ColumnProps[] = [
  {
    fieldName: "Name",
    colStyle: { width: "400px", justifyContent: "center", textAlign: "center" },
    render: (value) => (
      <div className="w-[400px] text-[var(--dark-text)] tracking-wide  flex items-center justify-start gap-3 ">
        <div className="w-[50px] h-[48px]"></div>
        <Image
          src={"/image/items/drink1.jpg"}
          alt="Items"
          width={80}
          height={60}
        />
        <span> {value.name}</span>
      </div>
    ),
  },
  {
    fieldName: "Description",
    colStyle: { width: "200px", textAlign: "start" },
    render: (value) => (
      <div className=" text-[var(--dark-text)] tracking-wide w-[200px]   text-start line-clamp-3">
        <p>{value.description}</p>
      </div>
    ),
  },
  {
    fieldName: "Price",
    colStyle: {
      width: "120px",
      justifyContent: "start",
      textAlign: "start",
      padding: "0px 15px 0px 0px",
    },
    render: (value) => (
      <div className=" text-[var(--dark-text)] tracking-wide w-[120px] ">
        <p>Rs {value.price}</p>
      </div>
    ),
  },
  {
    fieldName: "Category",
    colStyle: {
      width: "120px",
      justifyContent: "start",
      textAlign: "start",
      padding: "0px 15px 0px 0px",
    },
    render: (value) => (
      <div className=" text-[var(--dark-text)] tracking-wide w-[120px] ">
        <p>{value.category}</p>
      </div>
    ),
  },
  {
    fieldName: "Special",
    colStyle: { width: "120px", justifyContent: "start", textAlign: "start" },
    render: (value) => (
      <div className=" text-[var(--dark-text)] tracking-wide w-[120px] ">
        <p>{value.isSpecial ? "Yes" : "No"}</p>
      </div>
    ),
  },
  {
    fieldName: "Handicraft",
    colStyle: { width: "120px", textAlign: "start" },
    render: (value) => (
      <div className=" text-[var(--dark-text)] tracking-wide w-[120px]   text-start ">
        <p>{value.isHandicraft ? "Yes" : "No"}</p>
      </div>
    ),
  },
];

const Page = () => {
  return (
    <div>
      Page
      <div className="w-full justify-center flex items-center">
        <AdminTable
          columns={columns}
          data={data}
          actions={{
            editFn: (id) => {
              // console.log(id);
            },
            deleteFn: (id) => {
              // console.log(id);
            },
          }}
          totalData={5}
        />
      </div>
    </div>
  );
};

export default Page;
