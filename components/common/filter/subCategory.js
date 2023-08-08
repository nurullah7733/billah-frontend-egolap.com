import React from "react";
import Accordion from "../accordion/accordion";

const SubCategory = () => {
  let arr = [
    "Pent",
    "Shart",
    "T-shart",
    "Bottom wear",
    "Top wear",
    "Apparel and Accessories",
    "Games & Toys",
    "Tupperware",
    "Furniture",
    "Sports Products",
  ];
  let content = (
    <>
      {arr.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index + 40}>
          <input
            type="checkbox"
            id={index + 40}
            className="w-4 sm:w-3 h-4 accent-[#ff007f]"
          />
          <label
            className="dark:text-white sm:text-[14px]"
            htmlFor={index + 40}
          >
            {item}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 bg-white rounded-lg shadow card w-96 bg-base-100 dark:bg-gray-700">
      <Accordion title={"Sub Category"} content={content} />
    </div>
  );
};

export default SubCategory;
