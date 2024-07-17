"use client";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import useWindowSize from "../../utils/windowResize/useWindowResize";
import Link from "next/link";

const CategoriesSlider = ({ categories }) => {
  const { width } = useWindowSize();
  const [dropdownIndex, setDropdownIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [srollPosition, setSrollPosition] = useState(0);
  const [categoryPosition, setCategoryPosition] = useState({ top: 0, left: 0 });

  const selectedCategoryRef = useRef(null);
  const openDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  // Create an array of refs

  const handleScroll = (e) => {
    setSrollPosition(e.target.scrollLeft);
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategoryRef.current) {
      const { top, left } = selectedCategoryRef.current.getBoundingClientRect();
      setCategoryPosition({ top, left });
    }
  }, [selectedCategory, srollPosition]);

  return (
    <div className="container mx-auto pt-[70px] md:pt-[150px]">
      <div>
        <div
          className="flex max-h-[140px] items-center justify-between overflow-x-auto overflow-y-hidden  max-w-full header_categories mb-2"
          id="category-container"
          onScroll={handleScroll}
        >
          {categories
            ?.slice(0, Math.min(9, categories?.length))
            ?.map((category, index) => (
              <div
                key={index}
                ref={selectedCategory === category ? selectedCategoryRef : null}
                onMouseEnter={() => {
                  handleClick(category), openDropdown(index + 1);
                }}
                onMouseLeave={() => setDropdownIndex(null)}
                className="!flex flex-col items-center justify-between category_item gap-y-1  min-w-[120px] select-none cursor-pointer"
              >
                {category?.subCategory?.length > 0 ? (
                  <>
                    <img
                      src={category?.img?.[0]?.secure_url}
                      alt={category?.name}
                      width="50"
                      height="50"
                      className="rounded-sm"
                    />
                    <h3 className="relative justify-center    flex items-center  text-center font-semibold   ">
                      <span className=" ">{category?.name}</span>
                      <span>
                        {category?.subCategory?.length > 0 && (
                          <>
                            {dropdownIndex === index + 1 ? (
                              <RiArrowDropUpLine
                                size={24}
                                className="ml-[-3px]"
                              />
                            ) : (
                              <RiArrowDropDownLine
                                size={24}
                                className="ml-[-3px]"
                              />
                            )}
                          </>
                        )}
                      </span>
                    </h3>
                  </>
                ) : (
                  <Link
                    href={`/store?pageNo=1&perPage=30&searchKeyword=0&category=${category?.name}`}
                  >
                    <div className=" flex flex-col items-center justify-center gap-y-1">
                      <img
                        src={category?.img?.[0]?.secure_url}
                        alt={category?.name}
                        width="50"
                        height="50"
                        className="rounded-sm"
                      />
                      <h3 className="relative justify-center   text-center flex items-center font-semibold ">
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
                      <div
                        className={`category-dropdown  absolute `}
                        style={{
                          top: width < 768 ? 260 : width < 1280 ? 190 : 145,
                          left:
                            categoryPosition.left +
                            (index === categories.length - 1
                              ? width < 768
                                ? -100
                                : -25
                              : 15),
                        }}
                      >
                        <div
                          className={`category-dropdown-content ${
                            category?.subCategory?.length > 10
                              ? "min-w-[300px]"
                              : "min-w-[200px]"
                          } bg-white dark:bg-gray-900 `}
                        >
                          <div
                            className={`grid ${
                              category?.subCategory?.length > 10
                                ? " grid-cols-2"
                                : " grid-cols-1"
                            }`}
                          >
                            {category?.subCategory?.map((sub, index) => (
                              <div
                                key={index}
                                className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                              >
                                <Link
                                  href={`/store?pageNo=1&perPage=30&searchKeyword=0&category=${category?.name}&subcategory=${sub?.name}  `}
                                >
                                  <p
                                    onClick={() => setDropdownIndex(null)}
                                    className="text-sm"
                                  >
                                    {category?.subCategory?.length > 10
                                      ? sub?.name?.length > 15
                                        ? `${sub?.name?.slice(0, 15)}...`
                                        : sub?.name
                                      : sub?.name}
                                  </p>
                                </Link>
                              </div>
                            ))}
                          </div>
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
