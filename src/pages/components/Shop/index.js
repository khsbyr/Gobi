import React from "react";
import data from "../../data/data.json";

const Shop = () => {
  return (
    <div>
      <h1 className="text-center text-womenText font-bold text-3xl mt-8 py-10">
        TO GET AND TO GIFT
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 lg:px-40 xl:px-74 2xl:px-80">
        {data.shop.map((z) => (
          <div className="grid grid-rows-1 items relative cursor-pointer">
            {z.new ? (
              <div className="absolute m-4 bg-summerBg rounded-lg">
                <h1 className="px-3 py-1 font-thin">NEW</h1>
              </div>
            ) : (
              ""
            )}
            <div className="absolute bottom-28 right-28 cursor-pointer opacity-0 hover:opacity-100">
              <img src="assets/wishlist.png" alt="img" />
            </div>
            <img src={z.src} alt="img" />
            <h1 className="text-shopNowButton w-3/4 font-semibold py-2">
              {z.title}
            </h1>
            <div className="flex gap-x-5">
              <h1 className="font-semibold line-through">$ {z.price}</h1>
              <h1 className="text-shopRed font-semibold">$ {z.sale}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
