"use client";
import Footer from "@/components/Footer/Footer";
import About from "@/components/Landing/About";
import Banners from "@/components/Landing/Banners";
import Category from "@/components/Landing/Category";
import Customer from "@/components/Landing/Customer";
import Menu from "@/components/Landing/Menu";
import Specials from "@/components/Landing/Specials";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full min-w-[80vw] min-h-[80vh] max-w-screen overflow-hidden">
      <Navbar />
      <Banners />
      <Specials />
      <About />
      <Category />
      <Menu />
      <Customer />
      <Footer />
    </div>
  );
}
