"use client";
import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import Product from "../../components/common/product/product";
import Filter from "../../components/common/filter/filter";
import Drawer from "react-modern-drawer";

let hi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
let item = {
  productName: "best sales of the year",
  price: 500,
  unitPrice: 430,
  available: 3,
  percentegeOfPrice: "28%",
  weight: "500gm",
  ratting: 3,
  showAddToCardBtn: 1,
};

const Store = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="px-3 py-8 mx-auto ">
      <div className="w-full py-1.5 mb-2 bg-white border dark:border-none border-gray-200 rounded-lg shadow px-3 flex justify-between dark:bg-gray-700">
        <button
          onClick={toggleDrawer}
          className="lg:flex hidden  dark:bg-gray-800 dark:text-white justify-center items-center gap-x-1 w-[80px] rounded-lg text-black bg-[#f1f3f5] p-1 h-8 text-[16px]"
          type="button"
        >
          <BiFilter />
          <p>Filter</p>
        </button>

        {/* Drawer  */}
        <Drawer
          style={{
            padding: "20px 10px",
            overflowY: "scroll",
            background: "gray",
          }}
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          size="31zz0px"
        >
          <Filter />
        </Drawer>

        <div className="flex items-center gap-x-2">
          <p className="font-semibold text-[14px]">Sort By:</p>

          <select
            id="countries"
            className="outline-none  flex justify-center items-center gap-x-1 w-[120px] text-[16px] rounded-lg text-black bg-[#f1f3f5] dark:bg-gray-800 dark:text-white p-1 h-8  "
          >
            <option selected>Default</option>
            <option value="US">Price {`(High > low)`}</option>
            <option value="US">Price {`(Low < high)`}</option>
          </select>
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="lg:hidden">
          <Filter />
        </div>
        {/* products */}
        <div>
          <div className="grid grid-cols-6 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
            {hi.map((it, index) => {
              return (
                <Product
                  key={index}
                  index={index + 25}
                  name={item.productName}
                  price={item.price}
                  unitPrice={item.unitPrice}
                  available={item.available}
                  weight={item.weight}
                  percentegeOfPrice={item.percentegeOfPrice}
                  ratting={item.ratting}
                  showAddToCardBtn={item.showAddToCardBtn}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
