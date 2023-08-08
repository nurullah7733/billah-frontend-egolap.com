import React from "react";
import Accordion from "../accordion/accordion";

const Size = () => {
  let arr = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  let content = (
    <>
      {arr.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index + 60}>
          <input
            type="checkbox"
            id={index + 60}
            className="w-4 h-4 sm:w-3 accent-[#ff007f]"
          />
          <label
            className="dark:text-white sm:text-[14px]"
            htmlFor={index + 60}
          >
            {item}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border bg-white border-gray-200 rounded-lg shadow card w-96 bg-base-100 dark:bg-gray-700">
      <Accordion title={"Size"} content={content} />
    </div>
  );
};

export default Size;
