import React from "react";

const Subscribe = () => {
  return (
    <div className="pb-10">
      <h1 className="text-center text-womenText font-bold text-3xl pt-10">
        Subscribe
      </h1>
      <h1 className="text-center text-womenText font-normal text-md">
        Sign up for emails and receive early access to new arrivals, sales,
        events + more.
      </h1>

      <div className="flex justify-center pt-10 pb-3">
        <input
          className="w-1/2 h-14 rounded-lg bg-aboutBg placeholder:px-2 md:placeholder:px-8 placeholder:text-xs md:placeholder:text-base focus:outline-none"
          placeholder="Enter your email address"
        />
        <button className="h-14 bg-shopNowButton text-white px-10 rounded-lg -ml-5 text-xs md:text-base">
          SUBMIT
        </button>
      </div>
      <div>
        <h1 className="text-gray-400 text-xs w-full px-5 md:px-0 md:w-1/2 mx-auto">
          By signing up, you will receive Gobi Cashmere offers, promotions and
          other commercial messages. You are also agreeing to Gobi Cashmere's{" "}
          <span className="font-semibold underline cursor-pointer">
            Privacy Policy.
          </span>{" "}
          You may unsubscribe at any time.
        </h1>
      </div>
    </div>
  );
};

export default Subscribe;
