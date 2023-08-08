import React, { useEffect, useState } from "react";
import Link from "next/link";
import BtnPromoCode from "@components/common/btnPromoCode/btnPromoCode";

const Summary = ({
  width = "1/4",
  checkoutBtn = true,
  confirmOrder = false,
}) => {
  return (
    <div id="summary" className={`w-${width} xl:w-full px-3 md:px-0  xl:pb-14`}>
      <h1 className="pb-8 text-2xl font-semibold text-black border-b dark:text-white md:text-xl ">
        Order Summary
      </h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase text-black  dark:text-white md:text-[12px] ">
          Items 3
        </span>
        <span className="font-semibold text-sm text-black  dark:text-white md:text-[12px] ">
          590$
        </span>
      </div>

      <div className="px-3 py-8 bg-gray-200 dark:bg-gray-800">
        <div className="flex justify-between py-6 text-sm font-semibold uppercase">
          <span className="text-sm md:text-[12px] ">subtotal</span>
          <span className="md:text-[12px] ">$590</span>
        </div>
        <div className="flex justify-between py-6 text-sm font-semibold uppercase ">
          <span className="text-sm md:text-[12px] ">Shipping cost</span>
          <span className="md:text-[12px] ">$50</span>
        </div>
        <div className="flex justify-between py-6 text-sm font-semibold uppercase">
          <span className="text-sm md:text-[12px] ">Total</span>
          <span className="md:text-[12px] ">$640</span>
        </div>
        <div className="flex justify-between py-6 text-sm font-bold uppercase">
          <span className="text-sm md:text-[13px] ">payable Total</span>
          <span className="md:text-[13px] ">$640</span>
        </div>

        <BtnPromoCode />

        {/* checkout btn */}
        {checkoutBtn && (
          <div className="mt-8 mb-0">
            <button className="bg-primary font-semibold dark:bg-gray-700 hover:bg-primary-100 py-3 md:py-2 md:text-[12px] text-sm text-white uppercase w-full">
              <Link href="/checkout">Checkout</Link>
            </button>
          </div>
        )}

        {/* Confirm Order btn */}
        {confirmOrder && (
          <div className="mt-[18px] mb-0">
            <div className="flex items-center gap-1 mb-4">
              <input type="checkbox" className="w-3.5 h-3.5" id="iAgree" />
              <label
                className="text-sm font-semibold text-black dark:text-white"
                htmlFor="iAgree"
              >
                I agree the rules of term & conditions.
              </label>
            </div>
            <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-primary dark:bg-gray-700 hover:bg-primary-100">
              <Link href="#">Confirm Order</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
