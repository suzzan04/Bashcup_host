"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { debounce } from "@/helpers/debouncer";
import { NavbarData } from "@/@types/Navbar";
import TopNavbar from "./TopNavbar";
import { navbarData as data } from "./data.json";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarData: NavbarData[] = data;
  const navbarRef = useRef<null | HTMLDivElement>(null);
  const mobileNavbar = useRef<null | HTMLDivElement>(null);

  // to set navbar on top
  useEffect(() => {
    const detectScroll = () => {
      const position = navbarRef.current?.getBoundingClientRect();
      if (position && position.top <= -4) {
        setIsScrolled(true);
      } else if (window.scrollY <= 1) {
        setIsScrolled(false);
      }
    };
    const debounceScroller = debounce(detectScroll, 0);
    window.addEventListener("scroll", debounceScroller);

    return () => {
      window.removeEventListener("scroll", debounceScroller);
    };
  }, []);

  // Close mobile navbar
  useEffect(() => {
    const closeModal = (event: MouseEvent) => {
      if (
        mobileNavbar.current &&
        !mobileNavbar.current.contains(event?.target as Node)
      ) {
        setIsOpen(false);
      }
      if (isOpen) {
        document.body.style.overflowY = "hidden";
        document.addEventListener("mousedown", closeModal);
      } else {
        document.body.style.overflowY = "auto";
      }
    };
    window.addEventListener("mousedown", closeModal);
  }, [isOpen]);

  const pathName = usePathname();
  return (
    <nav className="w-full h-full">
      <TopNavbar />
      <div
        className={`w-full h-full bg-brand-navbar p-5 duration-150 ${
          isScrolled ? " top-0 fixed" : " static"
        }`}
      >
        <div className="hidden sm:flex space-x-10 justify-center items-center text-brand-text">
          {navbarData.map((data, index) => (
            <div
              key={index}
              className={`relative group ${
                pathName === data.path
                  ? "font-semibold text-brand-accent_dark"
                  : "font-medium"
              }`}
            >
              <Link href={data.path} className={`text-lg tracking-wider `}>
                {data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent_dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
          ))}
        </div>

        <Menu
          className="block sm:hidden cursor-pointer size-7 text-brand-accent_dark"
          onClick={() => {
            setIsOpen(true);
          }}
        />
        {isOpen && <MobileNavbar closeModal={setIsOpen} ref={mobileNavbar} />}
      </div>
    </nav>
  );
};

export default Navbar;
