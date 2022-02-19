import React from "react";

const SummerSale = () => {
  return (
    <div>
      <h1 className="text-6xl lg:text-8xl xl:text-9xl text-white font-semibold">
        SUMMER
      </h1>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl text-saleTextColor font-dafoe text-center -rotate-12 -mt-3 ">
        Sale
      </h1>

      <div className="flex items-center font-semibold gap-5">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl text-white">UPTO</h1>

        <h1 className="text-6xl lg:text-8xl xl:text-9xl text-white">
          60<span className="text-4xl lg:text-6xl xl:text-8xl">%</span>
          <span className="text-2xl lg:text-4xl xl:text-6xl">FF</span>
        </h1>
      </div>

      <div className="text-center mt-8">
        <button className="bg-white py-2 lg:py-3 xl:py-4 px-10 lg:px-12 xl:px-14 rounded-lg font-bold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default SummerSale;
