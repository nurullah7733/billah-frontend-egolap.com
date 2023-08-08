import React from "react";
import Accordion from "../accordion/accordion";

const Brand = () => {
  let arr = [
    "Samsung",
    "Apple",
    "Oppo",
    "Itel",
    "Vivo",
    "Infinix",
    "Redmi",
    "Realme",
  ];
  let content = (
    <>
      {arr.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index}>
          <input
            type="checkbox"
            id={index}
            className="w-4 sm:w-3 h-4 accent-[#ff007f]"
          />
          <label className="dark:text-white sm:text-[14px]" htmlFor={index}>
            {item}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 rounded-lg shadow card w-96 bg-base-100 bg-white dark:bg-gray-700">
      <Accordion title={"Brand"} content={content} />
    </div>
  );
};

export default Brand;
