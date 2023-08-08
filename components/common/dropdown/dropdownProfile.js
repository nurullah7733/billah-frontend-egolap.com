import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const ProfileDropdown = ({ dropdownMenus }) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    // setSelectedOption(option);
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
        className=" text-white font-semibold inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <span>{selectedOption || "Select an option"}</span> */}

        <div className="w-10">
          <img src="/profile.jpg" className="rounded-full" />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-50 bg-white text-black py-2 w-[200px] shadow-lg rounded-md">
          {dropdownMenus?.map((option, index) => (
            <p
              className="px-3 py-1"
              onClick={() => setIsOpen(false)}
              key={index}
            >
              <Link
                href={option.link}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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
export default ProfileDropdown;
