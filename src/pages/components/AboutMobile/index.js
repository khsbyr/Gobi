import React from "react";
import data from "../../data/data.json";

const AboutMobile = () => {
  return (
    <div className="py-14 px-2 bg-aboutBg md:hidden">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-2">
        <div>
          <img src="assets/14 1.png" alt="img" className="h-full w-full" />
        </div>
        <div className="grid gap-y-3.5">
          <img src="assets/gobi15.png" alt="img" />
          <img src="assets/gobi15.png" alt="img" />
        </div>
      </div>

      <div className="text-center py-8">
        <h1 className="text-shopNowButton text-2xl font-bold ">
          {data.about.text}
        </h1>
        <h1 className="text-shopNowButton py-5 font-normal">
          {data.about.description}
        </h1>

        <div className="md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
          <button className="bg-shopNowButton py-4 px-10 rounded-lg font-semibold text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
