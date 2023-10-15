"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BtnPromoCode from "@components/common/btnPromoCode/btnPromoCode";
import numberWithCommas from "../../../utils/numberWithComma/numberWithComma";
import { MustLoginModal } from "../../../utils/sweetAlert";
import {
  getToken,
  getUserData,
} from "../../../utils/sessionHelper/sessionHelper";
import { useRouter } from "next/navigation";

const Summary = ({
  width = "1/2",
  checkoutBtn = true,
  confirmOrder = false,
  products,
  totalProductsPrice,
}) => {
  let router = useRouter();
  const hadleChackoutBtn = () => {
    if (getUserData() == null || Object.values(getUserData())?.length < 1) {
      return MustLoginModal();
    } else {
      router.push("/checkout");
    }
  };
  return (
    <div
      id="summary"
      className={`w-${width}  xl:w-full px-3 md:px-0  xl:pb-14`}
    >
      <h1 className="pt-4 pb-8 text-2xl font-semibold text-black dark:text-white md:text-xl ">
        Order Summary
      </h1>

      {products?.length > 0 ? (
        <div className="px-3 py-8 bg-gray-200 dark:bg-gray-800 rounded-2xl">
          <div className="flex justify-between text-sm font-semibold uppercase">
            <span className="text-sm md:text-[12px] ">subtotal</span>
            <span className="md:text-[12px] ">
              ৳{numberWithCommas(totalProductsPrice)}
            </span>
          </div>
          <div className="flex justify-between py-6 text-sm font-semibold uppercase border-b border-white ">
            <span className="text-sm md:text-[12px] ">Shipping cost</span>
            <span className="md:text-[12px] "> ৳{numberWithCommas("50")}</span>
          </div>
          <div className="flex justify-between py-6 text-sm font-semibold uppercase">
            <span className="text-sm md:text-[12px] ">Total</span>
            <span className="md:text-[12px] ">
              {" "}
              ৳{numberWithCommas(totalProductsPrice + 50)}
            </span>
          </div>
          <div className="flex justify-between py-6 text-sm font-bold uppercase">
            <span className="text-sm md:text-[13px] ">payable Total</span>
            <span className="md:text-[13px] ">
              ৳{numberWithCommas(totalProductsPrice + 50)}
            </span>
          </div>

          <BtnPromoCode />

          {/* checkout btn */}
          {checkoutBtn && (
            <div className="mt-8 mb-0">
              <button
                onClick={hadleChackoutBtn}
                className="bg-primary font-semibold dark:bg-gray-700 hover:bg-primary-100 py-3 md:py-2 md:text-[12px] text-sm text-white uppercase w-full"
              >
                Checkout
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
      ) : (
        <h2 className="p-5 text-2xl font-bold text-center">Summary is Empty</h2>
      )}
    </div>
  );
};

export default Summary;
