"use client";
import { useState, useEffect, useRef } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import Drawer from "react-modern-drawer";
import CountUp from "react-countup";
import SideItemsFilter from "../sideItemsFilter/sideItemsFilter.js";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";

const TopItemAndPrice = () => {
  const { products, totalProductsPrice, allProductsSubTotal } = useSelector(
    (state) => state.addToCartProducts
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const prevTotalProductsPrice = useRef(totalProductsPrice);
  const controls = useAnimation();

  useEffect(() => {
    if (prevTotalProductsPrice.current !== totalProductsPrice) {
      controls.start({
        rotate: [0, 20, -20, 0],
        transition: { duration: 0.5 },
      });
      prevTotalProductsPrice.current = totalProductsPrice;
    }
  }, [totalProductsPrice, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="bg-black shadow-lg cursor-pointer top_item_price"
        animate={controls}
      >
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
        <div className="text-[12px] text-white mx-1 flex justify-center">
          <div className="flex items-center">
            <p className="text-[17px]">৳ </p>
            <CountUp end={allProductsSubTotal} duration={1} />
          </div>
        </div>
      </motion.div>
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
            key={1}
            products={products}
            setIsOpen={setIsOpen}
            totalProductsPrice={totalProductsPrice}
          />
        </div>
      </Drawer>
    </motion.div>
  );
};

export default TopItemAndPrice;
