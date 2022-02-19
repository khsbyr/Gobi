import React from "react";

const Navigation = () => {
  return (
    <div className="bg-headerColor h-10 flex justify-between text-white items-center font-light px-5 md:px-20">
      <div className="flex items-center gap-3">
        <img src="assets/svg/Group 1306.svg" alt="svg" />
        <p className="text-sm md:text-base">Global-English</p>
      </div>
      <div className="hidden md:block ">
        RETURNING AN ORDER?
        <span className="underline underline-offset-1 ml-3 cursor-pointer">
          Click for more info
        </span>
      </div>
      <div className="flex gap-5 cursor-pointer text-sm md:text-base">
        <h1>SIGN IN</h1>
        <h1>SIGN UP</h1>
      </div>
    </div>
  );
};

export default Navigation;
