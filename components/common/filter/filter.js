"use client";
import React, { useEffect } from "react";
import PriceRange from "./priceRange";
import Brand from "./brand";
import Category from "./category";
import Avaibility from "./avaibility";
import SubCategory from "./subCategory";
import { getItemWithExpiry } from "../../../utils/localStorageWithExpire/localStorageWithExpire";
import { userAddToCartOrUpdateRequest } from "../../../APIRequest/user/userApi";
import { useSelector } from "react-redux";

const Filter = ({ token }) => {
  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );
  useEffect(() => {
    // when store page unmounted then localstorage cart item save to database.
    return async () => {
      if (token !== undefined && addToCartProducts?.length > 0) {
        let id = getItemWithExpiry("userData2")?.id;
        let cart = addToCartProducts;
        await userAddToCartOrUpdateRequest(id, cart);
      }
    };
  });

  return (
    <div className=" max-w-[275px] ">
      <PriceRange />
      <div className="py-1"></div>
      <Avaibility />
      <div className="py-1"></div>
      <Brand />
      <div className="py-1"></div>
      <Category />
      <div className="py-1"></div>
      <SubCategory />
    </div>
  );
};

export default Filter;
