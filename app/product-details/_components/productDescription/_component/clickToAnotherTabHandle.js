"use client";
import React from "react";
import { setProductReviewTab } from "../../../../../redux/features/websiteSettings/webSettingSlice";
import store from "../../../../../redux/store";
import { useSelector } from "react-redux";

const ClickToAnotherTabHandle = ({ product }) => {
  const productReviewTab = useSelector(
    (state) => state.websiteSettings.productReviewTab
  );
  const handleClick = (value) => {
    store.dispatch(setProductReviewTab(value));
  };
  return (
    <>
      <li className="flex-auto mr-2 -mb-px text-center cursor-pointer last:mr-0">
        <a
          className={
            "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
            (productReviewTab == 1
              ? "text-white bg-primary dark:bg-gray-500"
              : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
          }
          onClick={() => {
            handleClick(1);
          }}
          data-toggle="tab"
          role="tablist"
        >
          Product Details
        </a>
      </li>
      <li className="flex-auto mr-2 -mb-px text-center cursor-pointer last:mr-0">
        <a
          className={
            "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
            (productReviewTab == 2
              ? "text-white bg-primary dark:bg-gray-500"
              : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
          }
          onClick={() => {
            handleClick(2);
          }}
          data-toggle="tab"
          role="tablist"
        >
          review ({product?.ratings?.length})
        </a>
      </li>
      <li className="flex-auto mr-2 -mb-px text-center cursor-pointer last:mr-0">
        <a
          className={
            "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
            (productReviewTab == 3
              ? "text-white bg-primary dark:bg-gray-500"
              : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
          }
          onClick={() => {
            handleClick(3);
          }}
          data-toggle="tab"
          role="tablist"
        >
          Shipping & delivery
        </a>
      </li>
    </>
  );
};

export default ClickToAnotherTabHandle;
