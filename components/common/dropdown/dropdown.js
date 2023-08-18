"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Dropdown = ({ dropdownMenus }) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  return (
    <div className="relative" ref={wrapperRef}>
      <button
        className="inline-flex items-center font-semibold text-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <span>{selectedOption || "Select an option"}</span> */}
        <span>More</span>
        <RiArrowDropDownLine className="text-xl" />
      </button>
      {isOpen && (
        <div className="absolute z-50 bg-white text-black py-2 w-[200px] shadow-lg rounded-md ">
          {dropdownMenus?.map((option, index) => (
            <p
              className="px-3 py-1"
              onClick={() => setIsOpen(false)}
              key={index}
            >
              <Link
                href={option.link}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {option.menuName}
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
