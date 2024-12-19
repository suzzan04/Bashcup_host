import React from "react";
import FeedbackCard from "../Common/Card/FeedbackCard";

const Customer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-[1800px] flex gap-10 px-5 py-10 flex-col">
        <div className="flex  flex-col gap-1 justify-center items-center w-full">
          <p className="text-sm text-brand-secondary">Come and Join</p>
          <h4 className="text-xl font-bold tracking-wider">
            OUR HAPPY CUSTOMER
          </h4>
        </div>
        <div className="flex gap-6 justify-between w-full">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Customer;
