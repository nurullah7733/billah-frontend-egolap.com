"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import numberWithCommas from "../../../utils/numberWithComma/numberWithComma";

const PriceRange = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [minMaxValue, setMinMaxValue] = useState({
    minValue: 0,
    maxValue: 50000,
  });

  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const handleRangeSubmit = () => {
    current.set("min", minMaxValue.minValue);
    current.set("max", minMaxValue.maxValue);

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    current.set("min", minMaxValue.minValue);
    current.set("max", minMaxValue.maxValue);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const handleInput = (value) => {
    setMinMaxValue({
      minValue: value[0],
      maxValue: value[1],
    });
  };
  return (
    <div className="max-w-[275px] p-5 border  border-gray-200 rounded-lg shadow card w-96 bg-white  dark:bg-gray-700">
      <div className="pb-8 text-xl font-medium sm:pb-6 sm:text-base">
        <h3 className="dark:text-white ">Price Range</h3>
      </div>
      <RangeSlider
        onThumbDragEnd={handleRangeSubmit}
        min={1}
        max={50000}
        defaultValue={[minMaxValue.minValue, minMaxValue.maxValue]}
        // value={[minValue, maxValue]}
        onInput={handleInput}
      />

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between pt-7">
          <input
            type="number"
            className="border outline-none max-w-[30%] dark:text-white text-center"
            value={minMaxValue.minValue}
            onChange={(e) => {
              setMinMaxValue((prev) => ({ ...prev, minValue: e.target.value }));
            }}
          />
          <input
            type="number"
            className="border outline-none max-w-[30%] dark:text-white text-center"
            value={minMaxValue.maxValue}
            onChange={(e) => {
              setMinMaxValue((prev) => ({ ...prev, maxValue: e.target.value }));
            }}
          />
        </div>
        <button type="submit" className="hidden">
          hi
        </button>
      </form>
    </div>
  );
};

export default PriceRange;
