"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons";

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="my-2 cursor-pointer sm:my-4 md:my-6">
      <div
        className="flex items-center justify-between"
        onClick={toggleExpanded}
      >
        <div className="pl-0 pr-0 text-xl sm:text-base font-medium pb-3  dark:after:!text-[#fff]">
          <h3 className="dark:text-white">{title}</h3>
        </div>
        <div className="flex-none pl-2">
          {/* {expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} */}
        </div>
      </div>
      <div
        className={` overflow-hidden transition-[min-height] duration-200 ease-in ${
          expanded ? "min-h-40" : "max-h-0"
        }`}
      >
        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
