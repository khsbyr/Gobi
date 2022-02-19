import React from "react";

const SummerSaleMobile = () => {
  return (
    <div className="bg-summerBg mx-2 rounded-md backdrop-blur-md">
      <div className="h-42 px-10 py-6 text-center">
        <h1 className="text-6xl  text-black font-semibold">SUMMER</h1>
        <h1 className="text-5xl  text-saleTextColor font-dafoe text-center -rotate-12 -mt-3 ">
          Sale
        </h1>

        <div className="flex items-center font-semibold gap-5 justify-center mt-5">
          <h1 className="text-3xl text-black">UPTO</h1>

          <h1 className="text-6xl text-black">
            60<span className="text-4xl">%</span>
            <span className="text-2xl">FF</span>
          </h1>
        </div>

        <div className="text-center mt-10">
          <button className="bg-black py-2 lg:py-3 xl:py-4 px-10 lg:px-12 xl:px-14 rounded-lg font-bold text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummerSaleMobile;
