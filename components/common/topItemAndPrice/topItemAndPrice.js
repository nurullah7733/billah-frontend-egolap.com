"use client";
import { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import Drawer from "react-modern-drawer";
import CountUp from "react-countup";
import SideItemsFilter from "../sideItemsFilter/sideItemsFilter.js";
import { useSelector } from "react-redux";

let item = "25";

const TopItemAndPrice = () => {
  const { products, totalProductsPrice } = useSelector(
    (state) => state.addToCartProducts
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black shadow-lg cursor-pointer top_item_price">
      <div
        onClick={toggleDrawer}
        className="flex flex-col items-center justify-center py-0.5 bg-primary dark:bg-gray-700"
      >
        <div>
          <BsFillBagCheckFill color="white" />
        </div>
        <div className="text-white text-[12px] mx-1">
          {products?.length} {products?.length > 1 ? "Items" : "Item"}
        </div>
      </div>
      <div className="text-[12px] text-white mx-1 flex  justify-center">
        <div className="flex items-center">
          <p className="text-[17px]">৳ </p>
          <CountUp end={totalProductsPrice} duration={1} />
        </div>
      </div>

      <Drawer
        id={1}
        style={{
          overflowY: "auto",
          backgroundColor: "gray",
        }}
        className=""
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={"260px"}
      >
        <div>
          <SideItemsFilter
            products={products}
            totalProductsPrice={totalProductsPrice}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default TopItemAndPrice;
