// import NumberOrderCardBtn from "@components/common/btnNumberOrderCard/btnNumberOrderCard";
import React from "react";

const CartProducts = ({ items }) => {
  return (
    <div>
      <div className="flex justify-between -mt-6 border-b py-7">
        <h1 className="text-2xl font-semibold md:text-xl">
          Shopping Cart (3 items)
        </h1>
        {/* <h2 className="text-2xl font-semibold">3 Items</h2> */}
      </div>

      {/* header */}
      <div className="flex mt-10 mb-5 ">
        <h3 className="w-1/3 text-xs font-semibold text-black uppercase dark:text-white">
          Product Details
        </h3>
        <h3 className="w-1/3 ml-8 text-xs font-semibold text-center text-black uppercase dark:text-white ">
          Price
        </h3>
        <h3 className="w-1/3 text-xs font-semibold text-center text-black uppercase dark:text-white ">
          Total
        </h3>
      </div>

      {/* products */}
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex items-center gap-3 p-5 mb-3 bg-gray-100 dark:bg-gray-800 md:items-start">
            <div className="flex w-2/3 md:w-1/3">
              <div className="flex gap-3 xl:flex-col">
                <div className="contents">
                  <img
                    className="w-[150px] h-[150px] md:w-[100px] md:h-[100px]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="mb-1">
                    <h1 className="text-base font-bold md:text-sm">
                      {item.name}
                    </h1>
                  </div>
                  <p className="mb-1 text-sm">
                    <span className="text-sm font-semibold">Available: </span>
                    In Stock
                  </p>
                  <p className="mb-1 text-sm">
                    <span className="text-sm font-semibold">Size: </span>M
                  </p>
                  <div className="flex gap-3">
                    {/* <NumberOrderCardBtn btnHeight="8" /> */}
                    <button type="button">Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 sm:pl-6 md:pl-[70px]">
              <span className="text-sm font-semibold text-center ">
                $300.00
              </span>
            </div>

            <div className="w-1/3 pl-24 md:pl-14 sm:pl-16 xs:pl-12 xxs:pl-5">
              <span className="text-sm font-semibold ">$400.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
