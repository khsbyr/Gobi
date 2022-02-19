import React from "react";
import data from "../../data/data.json";

const Men = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-womenText font-semibold text-3xl md:hidden pt-6 pb-3">
          MEN
        </h1>
      </div>

      <div className="py-4 grid grid-cols-2 md:grid-cols-3 place-items-center gap-1 px-0 md:px-3 xl:px-48 2xl:px-60 ">
        {data.men.map((z, index) => (
          <div className="relative cursor-pointer">
            {index === 1 ? (
              <h1 className="text-center font-semibold text-3xl lg:text-5xl py-10 lg:py-20 hidden md:block">
                MEN
              </h1>
            ) : (
              ""
            )}
            <img src={z.src} alt="img" />
            <h1 className="absolute bottom-5 lg:bottom-8 left-5 text-white text-base md:text-2xl lg:text-3xl font-light ">
              {z.type}
            </h1>
            <img
              src={z.icon}
              alt="svg"
              className="absolute bottom-5 lg:bottom-7 right-4 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 "
            />
          </div>
        ))}

        <div className="relative cursor-pointer hidden md:block">
          <img src="assets/gobi5.png" alt="img" />
          <h1 className="absolute bottom-5 lg:bottom-8 left-5 text-white text-xl lg:text-3xl font-light ">
            CARDIGANS
          </h1>
          <img
            src="assets/svg/Group 1216.svg"
            alt="svg"
            className="absolute bottom-5 lg:bottom-7 right-4 w-8 h-8 lg:w-12 lg:h-12"
          />
        </div>
      </div>
    </>
  );
};

export default Men;
