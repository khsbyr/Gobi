import React from "react";
import data from "../../data/data.json";

const WinterSpice = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:mt-20 xl:mt-32 gap-y-10 px-10 bg-gray-100 md:bg-white py-10">
        <div className="flex justify-center items-center">
          <div className="px-5 lg:px-10 xl:px-32 hidden md:block">
            <h1 className="text-black font-semibold text-3xl lg:text-5xl">
              {data.winterSpice.text}
            </h1>
            <h1 className="text-winterSpiceDesc fot-semibold text-xl lg:text-2xl mt-5 w-3/4">
              {data.winterSpice.description}
            </h1>

            <div className="mt-10">
              <button className="bg-shopNowButton py-2 lg:py-4 px-10 lg:px-12 rounded-lg font-semibold text-white">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="">
            <img src="assets/gobi0.png" alt="img" />
          </div>
          <div className="grid grid-row-2 gap-y-1">
            <img src="assets/gobi1.png" alt="img" />
            <img src="assets/gobi2.png" alt="img" />
          </div>
        </div>

        <div className="flex justify-center items-center text-center">
          <div className="px-1 lg:px-10 xl:px-32 md:hidden">
            <h1 className="text-black font-semibold text-3xl lg:text-5xl">
              {data.winterSpice.text}
            </h1>
            <h1 className="text-winterSpiceDesc fot-semibold text-xl lg:text-2xl mt-5">
              {data.winterSpice.description}
            </h1>

            <div className="mt-10">
              <button className="bg-shopNowButton py-2 lg:py-4 px-10 lg:px-12 rounded-lg font-semibold text-white">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinterSpice;
