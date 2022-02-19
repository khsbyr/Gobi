import React from "react";
import data from "../../data/data.json";

const Footer = () => {
  return (
    <div>
      <div className="bg-aboutBg py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-20 bg-white shadow-sm px-14">
          {data.footer.map((z) => (
            <div>
              <h1 className="text-shopNowButton font-semibold text-lg">
                {z.title}
              </h1>

              <div className="mt-5 text-xs">
                {z.sub.map((k) => (
                  <ul className="mt-2">
                    <li className="cursor-pointer">{k.text}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-14 pt-5 text-gray-600 text-xs">
          <h1>All content Copyright © 2020 GOBI Cashmere</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
