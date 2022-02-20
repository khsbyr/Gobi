import React from "react";
import data from "../../data/data.json";

const SearchModal = () => {
  return (
    <div className="absolute top-[110px] right-[125px] xl:right-[165px]">
      <div className="w-[800px] h-96 bg-searchBg rounded-br-lg rounded-bl-lg">
        <div className="flex py-6 px-10">
          <div className="w-3/5">
            <h1 className="text-gray-700 cursor-pointer">
              <span>Press</span> <span className="font-bold">enter</span>{" "}
              <span>to select, </span> <span className="font-bold">esc</span>{" "}
              <span>to dismiss</span>
            </h1>

            <div className="grid grid-cols-2 gap-10 mt-5">
              {data.searchShop.map((k) => (
                <div className="flex items-center">
                  <img src={k.src} alt="img" />
                  <div>
                    <h1 className="ml-5 text-xs">{k.title}</h1>
                    <h1 className="ml-5 text-xs mt-3 font-bold">
                      <span className="line-through">{k.price}</span>{" "}
                      <span className="text-shopRed ml-4">{k.sale}</span>
                    </h1>
                  </div>
                </div>
              ))}
            </div>

            <h1 className="mt-5 text-gray-700 cursor-pointer">
              <span className="underline">View all</span>{" "}
              <span className="font-bold">(234)</span>
            </h1>
          </div>

          <div className="w-2/5 px-8">
            <ul className="text-gray-500 font-normal text-base">
              {data.serachMenu.map((z) => (
                <li className="p-1.5 cursor-pointer">{z.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
