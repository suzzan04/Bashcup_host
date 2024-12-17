"use client";
import About from "@/components/Landing/About";
import Banners from "@/components/Landing/Banners";
import Specials from "@/components/Landing/Specials";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full min-w-[80vw] min-h-[80vh] max-w-screen overflow-hidden">
      <Navbar />
      <Banners />
      <Specials />
      <About />
    </div>
  );
}
