"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="relative pt-16 mt-3 text-black dark:bg-gray-700 dark:text-white md:pt-32"
      style={{
        overflow: "hidden",
        display: "block",
        paddingTop: "0",
        textAlign: "center",
      }}
    >
      <div className="mx-auto max-w-[1680px]">
        <Slider {...settings}>
          <Link href="#">
            <img
              src="/slider/1.jpg"
              alt=""
              width="1680px"
              height="450px"
              className="cursor-pointer"
            />
          </Link>

          <Link href="#">
            <img
              src="/slider/2.jpg"
              alt=""
              width="1680px"
              height="450px"
              className="cursor-pointer"
            />
          </Link>

          <Link href="#">
            <img
              src="/slider/3.jpg"
              alt=""
              width="1680px"
              height="450px"
              className="cursor-pointer"
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
