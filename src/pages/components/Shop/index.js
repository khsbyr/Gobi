import React, { useState } from "react";
import data from "../../data/data.json";

const Shop = () => {
  const [isHover, setIsHover] = useState();

  const mouseOver = (e) => {
    setIsHover(e + "true");
  };

  const mouseLeave = (e) => {
    setIsHover(e + "false");
  };

  return (
    <div>
      <h1 className="text-center text-womenText font-bold text-3xl mt-8 py-10">
        TO GET AND TO GIFT
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 lg:px-40 xl:px-74 2xl:px-80">
        {data.shop.map((z, index) => (
          <div className="grid grid-rows-1 items relative ">
            {z.new ? (
              <div
                className={`absolute m-4  rounded-lg z-50 ${
                  isHover === z.id + "true"
                    ? "bg-red-300 text-white"
                    : "bg-summerBg"
                }`}
              >
                <h1 className="px-3 py-1 font-thin">NEW</h1>
              </div>
            ) : (
              ""
            )}

            <img
              src={isHover === z.id + "true" ? z.src2 : z.src}
              alt="img"
              onMouseOver={(e) => mouseOver(z.id)}
              onMouseLeave={(e) => mouseLeave(z.id)}
              className="cursor-pointer hover:opacity-50"
            />
            <h1 className="text-shopNowButton w-3/4 font-semibold py-2">
              {z.title}
            </h1>
            <div className="flex gap-x-5">
              <h1 className="font-semibold line-through">$ {z.price}</h1>
              <h1 className="text-shopRed font-semibold">$ {z.sale}</h1>
            </div>

            {isHover === z.id + "true" ? (
              <div className="absolute top-[175px] left-[70px]">
                <button className="py-0.5 px-5 bg-white rounded-lg font-semibold text-shopNowButton text-xs">
                  ҮЗЭХ
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
