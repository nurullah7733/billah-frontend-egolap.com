"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

import { useEffect, useState } from "react";
import { getCategoriesRequest } from "../../APIRequest/categories/categoriesApi";

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      let data = await getCategoriesRequest();
      setCategories(data[0]?.rows);
    })();
  }, []);
  const containerStyle = {
    overflowX: "auto",
    overflowY: "hidden", // Hide the vertical scrollbar
    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
    maxWidth: "100%", // Ensure the content does not exceed the container width
  };
  return (
    <div className="container mx-auto pt-16 md:pt-[150px]">
      <div>
        <div className="flex max-h-[120px] overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full header_categories">
          {categories?.map((category, index) => (
            <div className="!flex flex-col items-center justify-center category_item gap-y-1 w-[200px] margin-x-1">
              <img
                src={category?.img[0]?.secure_url}
                alt=""
                width="50"
                height="50"
                className="rounded-sm"
              />
              <h3>{category?.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
