import React, { useState } from "react";
import Navigation from "./Navigation";
import data from "../../data/data.json";
import SummerSale from "./SummerSale";
import SummerSaleMobile from "./SammerSaleMobile";
import SearchModal from "../SearchModal";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  const focus = () => {
    setIsSearching(true);
  };

  const blur = () => {
    setIsSearching(false);
  };

  return (
    <div>
      <Navigation />

      <div className="relative">
        <div>
          <img
            src="assets/bg.png"
            className="w-full h-auto hidden md:block"
            alt="bg"
          />
          <img
            src="assets/IMG_0668.png"
            className="w-full h-auto md:hidden"
            alt="bg"
          />
        </div>

        <div className="absolute top-0 flex justify-between px-5 lg:px-10 xl:px-20 text-center items-center w-full text-white mt-8 font-light place-items-center">
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              {data.menu?.map((menu) => (
                <li key={menu.id} className="cursor-pointer">
                  {menu.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-5 items-center lg:hidden">
            <img src="assets/svg/Group 6.svg" alt="svg" />
            <img src="assets/svg/Group 420.svg" alt="svg" />
          </div>

          <div className="">
            <img src="assets/GOBI.png" alt="logo" />
            <img
              src="assets/cashmere for all.png"
              alt="logo"
              className="mt-2"
            />
          </div>
          <div className="flex items-center gap-5">
            <img
              src="assets/svg/Group 420.svg"
              alt="svg"
              className="hidden lg:block"
            />

            <input
              className="bg-white text-black w-72 py-2 rounded-lg placeholder:text-black placeholder:text-xs placeholder:pl-5 placeholder:font-semibold hidden lg:block focus:outline-none focus:bg-searchBg"
              placeholder="Search"
              onFocus={focus}
              onBlur={blur}
            />

            <img src="assets/svg/Vector.svg" alt="svg" />
            <img src="assets/svg/Group 416.svg" alt="svg" />
          </div>
        </div>

        <div className="hidden md:block absolute top-1/3 left-[60%]">
          <SummerSale />
        </div>

        <div className="md:hidden absolute top-3/4 w-full">
          <SummerSaleMobile />
        </div>
      </div>
      {isSearching ? <SearchModal /> : ""}
    </div>
  );
};

export default Header;
