"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import { useSelector } from "react-redux";
import { userAddToCartOrUpdateRequest } from "../../APIRequest/user/userApi";

const MainSlider = ({ slider, token }) => {
  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // when home page unmounted then localstorage cart item save to database.
    return async () => {
      if (token !== undefined && addToCartProducts?.length > 0) {
        let id = getItemWithExpiry("userData2")?.id;
        let cart = addToCartProducts;
        await userAddToCartOrUpdateRequest(id, cart);
      }
    };
  });

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
          {slider?.map((item, index) => (
            <div key={index}>
              <Link href="#">
                <Image
                  src={item?.secure_url}
                  placeholder="blur"
                  blurDataURL={item?.secure_url}
                  alt="Daily egolap offers"
                  width={1680}
                  height={450}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
