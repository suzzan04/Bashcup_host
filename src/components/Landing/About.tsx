import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-full max-w-[1800px] flex justify-center items-center relative">
        <div className="flex flex-col gap-3 max-w-[700px] px-10 py-8 h-[300px] z-10 justify-center w-full bg-brand-bg">
          <h3 className="text-2xl font-bold tracking-wider text-brand-accent_dark">
            Check out our best coffee beans.
          </h3>
          <p className="text-sm text-brand-text_secondary">
            Experience the rich, authentic taste of Nepal with every cup at our
            coffee shop, where we proudly serve coffee made from premium beans
            grown in the lush hills of our homeland. Savor the flavors that
            celebrate Nepal&apos;s heritage and craftsmanship.{" "}
          </p>
          <Button className="max-w-[200px] mt-5 bg-brand font-bold hover:bg-brand-secondary">
            Buy Now
          </Button>
        </div>
        <Image
          src={"/image/coffee-bg.png"}
          alt="Coffee beans"
          width={600}
          height={500}
          className="w-full max-h-[300px] object-contain object-right lg:block hidden absolute top-0 left-0 z-0 "
        />
        <Image
          src={"/image/coffee7.png"}
          alt="Coffee beans"
          width={600}
          height={500}
          className="w-full max-h-[300px] object-contain object-left lg:block hidden absolute  top-0  z-0 select-none "
        />
      </div>
    </div>
  );
};

export default About;
