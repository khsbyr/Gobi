import React from "react";
import data from "../../data/data.json";

const About = () => {
  return (
    <div className="py-20 relative hidden md:block">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <img src="assets/Rectangle 147.png" alt="img" />
        </div>
        <div className="bg-aboutBg md:px-2 lg:px-4 xl:px-6 2xl:px-14 md:py-8 lg:py-12 xl:py-16 ">
          <h1 className="text-shopNowButton md:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl font-base ">
            {data.about.text}
          </h1>
          <h1 className="text-shopNowButton md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-base md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
            {data.about.description}
          </h1>

          <div className="md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
            <button className="bg-shopNowButton md:py-1 lg:py-4 md:px-6 lg:px-12 rounded-lg font-semibold text-white">
              READ MORE
            </button>
          </div>

          <div className="flex gap-x-1 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
            <img
              src="assets/gobi15.png"
              alt="img"
              className="md:h-28 lg:h-36 xl:h-48 2xl:h-64"
            />
            <img
              src="assets/gobi15.png"
              alt="img"
              className="md:h-28 lg:h-36 xl:h-48 2xl:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
