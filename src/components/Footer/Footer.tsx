import React from "react";
import Image from "next/image";
import CircleIcon from "../Common/CircleIcon";
import { Mail, Phone } from "lucide-react";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="w-full px-8 py-5 bg-brand-navbar mt-10">
      <div className="flex w-full justify-between items-center gap-10 mb-5 border-b-2 border-brand-accent_dark py-2 ">
        <div className="flex gap-1 items-center w-[60%]">
          <Image
            src={"/small_logo.png"}
            width={200}
            height={80}
            alt="BASH CUP"
            className="min-w-[40px] max-w-[60px]"
          />
          <h4 className="text-xl text-brand font-black text-nowrap select-none">
            BASHCUP
          </h4>
        </div>
        <div className="flex gap-3 items-center flex-wrap justify-end w-[40%]">
          <Image
            src={"/image/icons/facebook-2.png"}
            width={60}
            height={60}
            alt="facebook"
            className="min-w-[20px] max-w-[30px] object-cover  cursor-pointer hover:scale-110"
          />
          <Image
            src={"/image/icons/instagram.png"}
            width={60}
            height={60}
            alt="facebook"
            className="min-w-[20px] max-w-[30px] object-cover cursor-pointer hover:scale-110"
          />

          <Image
            src={"/image/icons/tik-tok.png"}
            width={60}
            height={60}
            alt="facebook"
            className="min-w-[20px] max-w-[30px] object-cover cursor-pointer hover:scale-110"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <Image
          src={"/bash_logo.png"}
          width={300}
          height={200}
          alt="BASH CUP"
          className="max-w-[200px] min-w-[120px] hidden lg:block"
        />
        <div className="flex flex-col gap-4 justify-center col-span-1">
          <h6 className="font-bold tracking-wider">Quick Link</h6>
          <div className="flex flex-col gap-2 text-sm tracking-wide">
            <p className="hover:underline cursor-pointer hover:text-brand-secondary">
              Home
            </p>
            <p className="hover:underline cursor-pointer hover:text-brand-secondary">
              Cart
            </p>
            <p className="hover:underline cursor-pointer hover:text-brand-secondary">
              Menu
            </p>
            <p className="hover:underline cursor-pointer hover:text-brand-secondary">
              HandiCraft
            </p>
            <p className="hover:underline cursor-pointer hover:text-brand-secondary">
              Feedback
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center col-span-1">
          <div className="flex flex-col gap-2">
            <p className="font-bold tracking-wider">Want to contact us?</p>
            <div className="flex  gap-1 items-center text-sm tracking-wide">
              <CircleIcon icon={<Phone />} size={8} />
              <p>+977-9813425299</p>
            </div>
            <div className="flex  gap-1 items-center text-sm tracking-wide">
              <CircleIcon icon={<Mail />} size={8} />
              <p>aayush@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-bold tracking-wider">Message us here</h6>
            <div className="flex gap-5">
              <Image
                src={"/image/icons/facebook-messenger.png"}
                width={60}
                height={60}
                alt="facebook"
                className="min-w-[20px] max-w-[30px] hover:scale-110 cursor-pointer"
              />

              <Image
                src={"/image/icons/whatsapp.png"}
                width={60}
                height={60}
                alt="facebook"
                className="min-w-[20px] max-w-[30px] hover:scale-110 cursor-pointer"
              />
              <Image
                src={"/image/icons/viber.png"}
                width={60}
                height={60}
                alt="facebook"
                className="min-w-[0px] max-w-[30px] hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4 gap-4 text-brand-text col-span-2 md:col-span-1">
          <div className="flex  flex-col gap-1">
            <h6 className="font-bold tracking-wider text-2xl mb-3">
              Thank you!!
            </h6>
            <p className="text-lg text-brand-accent_dark">
              Thank you for visiting us. For more info connect with us at
              aayush@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*
<Image
    src={"/image/icons/facebook-messenger.png"}
    width={60}
    height={60}
    alt="facebook"
    className="min-w-[20px] max-w-[30px]"
/> 
 h-screen
<Image
    src={"/image/icons/whatsapp.png"}
    width={60}
    height={60}
    alt="facebook"
    className="min-w-[20px] max-w-[30px]"
/>
<Image
    src={"/image/icons/viber.png"}
    width={60}
    height={60}
    alt="facebook"
    className="min-w-[0px] max-w-[30px]"
/> 

  <div className="flex flex-col py-4 gap-4 text-brand-text col-span-2 md:col-span-1">
          <div className="flex  flex-col gap-1">
            <h6 className="font-bold tracking-wider">Connect</h6>
            <p className="text-xs text-brand-accent_dark">
              For more info connect with us at aayush@gmail.com
            </p>
          </div>
          <div className="flex gap-1 items-center">
            {/* <Input
              type="text"
              className="border border-brand-secondary"
              placeholder="eg: xyz@gmail.com"
            /> 
          <Button
              className="bg-brand-secondary hover:bg-brand-accent_dark"
              type="submit"
            >
              Send
            </Button> 
          </div> 
        </div> 

*/
