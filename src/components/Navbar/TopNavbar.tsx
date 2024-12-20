"use client";
import React from "react";
import Image from "next/image";
import { Phone, Truck } from "lucide-react";
import CircleIcon from "../Common/CircleIcon";

const TopNavbar = () => {
  return (
    <div className="w-full h-full bg-background text-brand-text px-5 py-3">
      <div className="w-full flex justify-center sm:justify-between items-center gap-8">
        <div className="hidden sm:flex items-center gap-3">
          <CircleIcon icon={<Phone />} size={9} />
          <p className="text-xs  tracking-wider">+977-9813425299</p>
        </div>
        <div className="flex items-center tracking-widest gap-1 flex-nowrap select-none">
          <Image
            alt="Bash Coffee"
            src={"/small_logo.png"}
            width={60}
            height={60}
          />
          <h1 className="text-2xl text-brand font-black text-nowrap">
            BASHCUP
          </h1>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <CircleIcon icon={<Truck />} size={9} />
          <p className="tracking-wider w-[150px] text-xs flex flex-col text-nowrap">
            Delivery all over
            <span>Kathmandu valley.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
