"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { getItemWithExpiry } from "../../../utils/localStorageWithExpire/localStorageWithExpire";
import {
  logOutRequest,
  userAddToCartOrUpdateRequest,
} from "../../../APIRequest/user/userApi";
import { useSelector } from "react-redux";

const ProfileDropdown = ({ dropdownMenus, token }) => {
  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );
  let id = getItemWithExpiry("userData2")?.id;
  let handleClick = async () => {
    if (token !== undefined) {
      await userAddToCartOrUpdateRequest(id, addToCartProducts);
    }
    await logOutRequest();
  };
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionClick = (option) => {
  //   // setSelectedOption(option);
  //   setIsOpen(false);
  // };

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
      <div
        className="inline-flex items-center font-semibold text-white outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <span>{selectedOption || "Select an option"}</span> */}

        <div className="w-10">
          <img
            src={getItemWithExpiry("userData2")?.photo}
            alt={getItemWithExpiry("userData2")?.firstName}
            className="w-12 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 bg-white dark:bg-gray-800 dark:text-white text-black py-2 min-w-[200px] shadow-lg rounded-md right-0 top-10">
          <div className="">
            <div className="px-6">
              <p className="text-base">
                {getItemWithExpiry("userData2")?.firstName +
                  " " +
                  getItemWithExpiry("userData2")?.lastName}
              </p>

              <p className="pb-3 text-base">
                {" "}
                {getItemWithExpiry("userData2")?.email}
              </p>
            </div>
            <hr />
          </div>
          <div className="py-2">
            {dropdownMenus?.map((option, index) => (
              <div key={index}>
                <Link
                  href={option.link}
                  className="block w-full px-3 text-left hover:bg-gray-100 dark:hover:bg-gray-500"
                >
                  {option.menuName}
                </Link>
              </div>
            ))}
          </div>
          <div className="">
            <hr />
            <div className="px-4 py-2">
              <a
                className="block w-full px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                onClick={handleClick}
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;
