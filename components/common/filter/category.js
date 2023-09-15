import React from "react";
import Accordion from "../accordion/accordion";

const Category = () => {
  let arr = [
    "Mans",
    "Womens",
    "Food and beverage",
    "Household items",
    "Personal Care and Beauty",
    "Apparel and Accessories",
    "Games & Toys",
    "Tupperware",
    "Furniture",
    "Sports Products",
  ];
  let content = (
    <>
      {arr.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index + 20}>
          <label className="dark:text-white sm:text-[14px]  flex items-center">
            <input
              type="checkbox"
              className="w-4 sm:w-3 h-4 mr-2  accent-[#ff007f]"
            />
            {item}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 bg-white rounded-lg shadow card w-96 bg-base-100 dark:bg-gray-700">
      <Accordion title={"Category"} content={content} />
    </div>
  );
};

export default Category;
