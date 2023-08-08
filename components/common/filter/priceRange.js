"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRange = () => {
  const [minValue, set_minValue] = useState(1);
  const [maxValue, set_maxValue] = useState(5000);

  const handleInput = (e) => {
    set_minValue(e[0]);
    set_maxValue(e[1]);
  };
  const handleChange = () => {
    //
  };

  return (
    <div className="max-w-[275px] p-5 border  border-gray-200 rounded-lg shadow card w-96 bg-white  dark:bg-gray-700">
      <div className="pb-8 text-xl font-medium sm:pb-6 sm:text-base">
        <h3 className="dark:text-white ">Price Range</h3>
      </div>
      <RangeSlider
        // onThumbDragEnd={handleChange}
        min={1}
        max={5000}
        defaultValue={[minValue, maxValue]}
        onInput={handleInput}
      />

      <div className="flex justify-between pt-7">
        <input
          type="number"
          className="border outline-none max-w-[25%] dark:text-white"
          value={minValue}
        />
        <input
          type="number"
          className="border outline-none max-w-[25%] dark:text-white"
          value={maxValue}
        />
      </div>
    </div>
  );
};

export default PriceRange;
