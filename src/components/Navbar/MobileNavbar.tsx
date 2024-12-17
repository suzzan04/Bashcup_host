"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavbarData } from "@/@types/Navbar";
import { navbarData as data } from "./data.json";
import { X } from "lucide-react";

type MobileNavbarProp = {
  closeModal: (e: boolean) => void;
  ref: React.RefObject<HTMLDivElement | null>;
};

const MobileNavbar: React.FC<MobileNavbarProp> = ({ closeModal, ref }) => {
  const navbarData: NavbarData[] = data;
  const pathName = usePathname();

  return (
    <div
      className="w-full h-screen max-w-[13rem] bg-background fixed left-0 top-0 duration-500 p-4 z-10 sm:hidden"
      ref={ref}
    >
      <div className="flex flex-col justify-evenly items-center py-10 gap-16 relative">
        <div className="flex justify-center items-center">
          <Image
            src={"/bash_logo.png"}
            alt="Bash Cup"
            width={120}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-8 px-3 cursor-pointer items-center">
          {navbarData.map((data, index) => (
            <div
              key={index}
              className={`relative group ${
                pathName === data.path
                  ? "font-semibold text-brand-accent_dark"
                  : "font-medium"
              }`}
            >
              <Link href={data.path} className={`text-xl tracking-wide `}>
                {data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent_dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
          ))}
        </div>
        <span
          className="absolute top-5 right-5 text-brand-secondary cursor-pointer hover:scale-110"
          onClick={() => closeModal(false)}
        >
          <X />
        </span>
      </div>
    </div>
  );
};

export default MobileNavbar;
