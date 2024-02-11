"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

import Slider from "react-slick";

const CategoriesSlider = () => {
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
  return (
    <div className="block border border-gray-200 rounded-lg shadow dark:border-gray-700 pt-[5px] overflow-hidden">
      <div className="py-2 pt-16 text-black dark:text-white md:pt-32">
        <div className="lg:max-w-[750px] md:max-w-[700px] sm:max-w-[500px]  w-[1120px] @screen(max-width: 500px) xs:max-w-[400px] xxs:max-w-[320px] mx-auto ">
          <Slider {...settings}>
            <div className="!flex flex-col items-center ">
              <img src="/glocery.webp" alt="" width="50" height="50" />
              <h3>Glocery</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/Appliances.webp" alt="" width="50" height="50" />

              {/* dropdown */}
              <div className="category-dropdown">
                <div className="flex items-center justify-center">
                  <span>Appliances</span>
                  <span>
                    <RiArrowDropDownLine className="text-xl" />
                  </span>
                </div>
                <div className="category-dropdown-content">
                  <div className="p-2 rounded hover:bg-base-300">
                    <Link href="#">
                      <p>Hello World!</p>
                    </Link>
                  </div>
                  <div className="p-2 rounded hover:bg-base-300">
                    <Link href="#">
                      <p>Hello World!</p>
                    </Link>
                  </div>
                  <div className="p-2 rounded hover:bg-base-300">
                    <Link href="#">
                      <p>Hello World!</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="!flex flex-col items-center">
              <img src="/Beauty-Toys&More.webp" alt="" width="50" height="50" />
              <h3>Beauty, Toys</h3>
            </div>

            <div className="!flex flex-col items-center">
              <img src="/electronics.webp" alt="" width="50" height="50" />
              <h3>Electronics</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/fasion.webp" alt="" width="50" height="50" />
              <h3>Fashion</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/home.webp" alt="" width="50" height="50" />
              <h3>Home</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/mobile.webp" alt="" width="50" height="50" />
              <h3>mobile</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/Travel.webp" alt="" width="50" height="50" />
              <h3>Travel</h3>
            </div>
            <div className="!flex flex-col items-center">
              <img src="/Two-Wheelers.webp" alt="" width="50" height="50" />
              <h3>Two Wheelers</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
