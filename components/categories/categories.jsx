"use client";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Link from "next/link";

import { useState } from "react";
import { Fragment } from "react";

const CategoriesSlider = ({ categories }) => {
  const [dropdownIndex, setDropdownIndex] = useState(0);
  const openDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  return (
    <div className="container mx-auto pt-[70px] md:pt-[150px]">
      <div>
        <div className="flex max-h-[120px] items-center justify-between overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full header_categories mb-2">
          {categories
            ?.slice(0, Math.min(9, categories?.length))
            ?.map((category, index) => (
              <div
                onClick={() => openDropdown(index + 1)}
                key={index}
                className="!flex flex-col items-center justify-between category_item gap-y-1  min-w-[140px] select-none cursor-pointer"
              >
                {category?.subCategory?.length > 0 ? (
                  <>
                    <img
                      src={category?.img[0]?.secure_url}
                      alt={category?.name}
                      width="50"
                      height="50"
                      className="rounded-sm"
                    />
                    <h3 className="relative justify-center text-left flex items-center font-semibold ">
                      {category?.name}
                      {category?.subCategory?.length > 0 && (
                        <>
                          {dropdownIndex === index + 1 ? (
                            <RiArrowDropUpLine
                              size={24}
                              className="ml-[-4px]"
                            />
                          ) : (
                            <RiArrowDropDownLine
                              size={24}
                              className="ml-[-4px]"
                            />
                          )}
                        </>
                      )}
                    </h3>
                  </>
                ) : (
                  <Link
                    href={`/store?pageNo=1&perPage=30&searchKeyword=0&category=${category?.name}`}
                  >
                    <div className=" flex flex-col items-center justify-center">
                      <img
                        src={category?.img[0]?.secure_url}
                        alt={category?.name}
                        width="50"
                        height="50"
                        className="rounded-sm"
                      />
                      <h3 className="relative justify-center text-left flex items-center font-semibold ">
                        {category?.name}
                        {category?.subCategory?.length > 0 && (
                          <>
                            {dropdownIndex === index + 1 ? (
                              <RiArrowDropUpLine
                                size={24}
                                className="ml-[-4px]"
                              />
                            ) : (
                              <RiArrowDropDownLine
                                size={24}
                                className="ml-[-4px]"
                              />
                            )}
                          </>
                        )}
                      </h3>
                    </div>
                  </Link>
                )}

                {category?.subCategory?.length > 0 && (
                  <>
                    {dropdownIndex === index + 1 && (
                      <div className="category-dropdown  absolute  ">
                        <div className="category-dropdown-content bg-white dark:bg-gray-900">
                          {category?.subCategory?.map((sub, index) => (
                            <div
                              key={index}
                              className="p-2 rounded hover:bg-base-300"
                            >
                              <Link
                                href={`/store?pageNo=1&perPage=30&searchKeyword=0&category=${category?.name}&subcategory=${sub?.name}`}
                              >
                                <p>{sub?.name}</p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
