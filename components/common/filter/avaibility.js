import React from "react";
import Accordion from "../accordion/accordion";

const Avaibility = () => {
  let content = (
    <>
      <div className="flex items-center gap-x-2 ">
        <input
          type="checkbox"
          id={"1"}
          className="w-4 sm:w-3 h-4 accent-[#ff007f]"
        />
        <label className="dark:text-white sm:text-[14px]" htmlFor={"1"}>
          In Stock
        </label>
      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          id={"2"}
          className="w-4 sm:w-3 h-4 accent-[#ff007f]"
        />
        <label className="dark:text-white sm:text-[14px]" htmlFor={"2"}>
          Out of Stock
        </label>
      </div>
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 rounded-lg shadow card w-96 bg-base-100 bg-white dark:bg-gray-700">
      <Accordion title={"Availibility"} content={content} />
    </div>
  );
};

export default Avaibility;
