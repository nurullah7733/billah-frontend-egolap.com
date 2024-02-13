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

  return (
    <div className="block border border-gray-200 rounded-lg shadow dark:border-gray-700 pt-[5px] overflow-hidden">
      <div className="py-2 pt-16 text-black dark:text-white md:pt-32">
        <div className="lg:max-w-[750px] md:max-w-[700px] sm:max-w-[500px]  w-[1120px] @screen(max-width: 500px) xs:max-w-[400px] xxs:max-w-[320px] mx-auto ">
          <div className="flex max-h-[120px] overflow-x-auto header_categories">
            {categories?.map((category, index) => (
              <div className="!flex flex-col items-center ">
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
    </div>
  );
};

export default CategoriesSlider;
