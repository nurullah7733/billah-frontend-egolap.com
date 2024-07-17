"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import { useSelector } from "react-redux";
import { userAddToCartOrUpdateRequest } from "../../APIRequest/user/userApi";
import { getMainSlidersRequest } from "../../APIRequest/mainSliders/mainSlidersApi";

const MainSlider = ({ token }) => {
  let [slider, setSlider] = React.useState([]);

  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
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

  useEffect(() => {
    (async () => {
      let data = await getMainSlidersRequest();
      if (data?.[0]?.total[0]?.count > 0) {
        setSlider(data?.[0]?.rows);
      } else {
        setSlider([]);
      }
    })();
  }, []);

  return (
    <div
      className="relative pt-16 mt-3 text-black dark:bg-gray-700 dark:text-white md:pt-32"
      style={{
        display: "block",
        paddingTop: "0",
        textAlign: "center",
      }}
    >
      <div className="mx-auto max-w-[1680px] overflow-hidden">
        <Slider {...settings}>
          {slider?.map((item, index) => (
            <div key={index}>
              <Link href={item?.link ? item?.link : "#"}>
                <Image
                  src={item?.img?.slice(-1)?.[0]?.secure_url}
                  placeholder="blur"
                  blurDataURL={item?.img?.slice(-1)?.[0]?.secure_url}
                  alt="Daily egolap offers"
                  width={1680}
                  height={450}
                  className="cursor-pointer "
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
