import React, { useState } from "react";
import PriceRange from "./priceRange";
import Brand from "./brand";
import Category from "./category";
import Avaibility from "./avaibility";
import SubCategory from "./subCategory";
import Size from "./size";

const Filter = () => {
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
      <div className="py-1"></div>
      <Size />
    </div>
  );
};

export default Filter;
