import Link from "next/link";
import React from "react";
import NumberOrderCardBtn from "../btnNumberOrderCard/btnNumberOrderCard";
import Image from "next/image";
import AddToCardBtn from "../btnAddToCard/btnAddToCard";
import { RatingReadOnly } from "../../../components/common/rating/rating";

const Product = ({
  name,
  price,
  img,
  finalPrice,
  totalRatting,
  weight,
  discount,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow max-w-[250px]  dark:bg-gray-800 dark:border-gray-700">
      <Link href="/product-details">
        <Image
          className="rounded-t-lg cursor-pointer"
          width={300}
          height={300}
          src={img}
          alt={name}
        />
      </Link>
      <div className="p-2">
        <Link href="/product-details">
          <h1 className="mb-2 text-sm font-bold tracking-tight cursor-pointer dark:text-white">
            {name.length > 30 ? name.substring(0, 30) + " ..." : name}
          </h1>
        </Link>
        <p className="text-gray-700 dark:text-gray-400">{weight}</p>

        <RatingReadOnly ratting={totalRatting} />
        <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
          ৳{finalPrice}
          <span className="mx-1 text-gray-400 line-through dark:text-gray-500 text-[14px]">
            {price}
          </span>
          <span className="mx-1 text-gray-400 dark:text-gray-500 text-[14px]">
            {discount}% off
          </span>
        </p>

        {0 === 0 ? <NumberOrderCardBtn /> : <AddToCardBtn />}
      </div>
    </div>
  );
};

export default Product;
