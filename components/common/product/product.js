import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RatingReadOnly } from "../../../components/common/rating/rating";
import CartButton from "../CartButton/cartButton";

const Product = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow max-w-[250px]  dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/product-details/${product?._id}`}>
        <Image
          className="rounded-t-lg cursor-pointer"
          priority
          width={300}
          height={300}
          src={product?.img[0]?.secure_url}
          alt={product?.name}
        />
      </Link>
      <div className="p-2">
        <Link href={`/product-details/${product?._id}`}>
          <h1 className="mb-2 text-sm font-bold tracking-tight cursor-pointer dark:text-white">
            {product?.name.length > 30
              ? product?.name.substring(0, 30) + " ..."
              : product?.name}
          </h1>
        </Link>
        <p className="text-gray-700 dark:text-gray-400">{product?.weight}</p>

        <RatingReadOnly ratting={product?.totalRatting} />
        <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
          ৳{product?.finalPrice}
          <span className="mx-1 text-gray-400 line-through dark:text-gray-500 text-[14px]">
            {product?.price}
          </span>
          <span className="mx-1 text-gray-400 dark:text-gray-500 text-[14px]">
            {product?.discount}% off
          </span>
        </p>

        <CartButton product={product} />
      </div>
    </div>
  );
};

export default Product;
