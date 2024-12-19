"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FeedbackCard = () => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5 max-w-[600px] bg-background rounded-md shadow-sm">
      <div className="w-full flex justify-between items-center gap-5">
        <div className="flex gap-2 items-center flex-nowrap">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="AL" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center ">
            <p className="font-semibold tracking-wide text-brand-text">
              Aayush Lamichhane
            </p>
            <p className="text-sm text-brand-text_secondary max-w-[200px] line-clamp-1">
              aayush@gmail.com
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-nowrap">
            {[...Array(5)].map((_, index) => (
              <button
                type="button"
                key={index}
                className={`text-2xl ${
                  rating > index ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(index + 1)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 px-1 py-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        aspernatur a voluptates excepturi ullam placeat. Illum, exercitationem,
        eius, temporibus accusantium tenetur cupiditate blanditiis ipsam
        voluptate reprehenderit ullam ducimus accusamus cumque reiciendis atque
        quos repellendus. Vero, ducimus! Necessitatibus asperiores libero,
        maiores natus enim laudantium modi at repudiandae facere adipisci
        dolores placeat!
      </p>
    </div>
  );
};

export default FeedbackCard;
