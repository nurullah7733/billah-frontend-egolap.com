import Link from "next/link";
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import NumberOrderCardBtn from "../btnNumberOrderCard/btnNumberOrderCard";
import Image from "next/image";
import AddToCardBtn from "../btnAddToCard/btnAddToCard";

const Product = ({
  index,
  showAddToCardBtn,
  name,
  price,
  unitPrice,
  ratting,
  weight,
  percentegeOfPrice,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow max-w-[250px]  dark:bg-gray-800 dark:border-gray-700">
      <Link href="/product-details">
        <Image
          className="rounded-t-lg cursor-pointer"
          width={300}
          height={300}
          src={`/assets/img/products/${index}.webp`}
          alt={`${index}`}
        />
      </Link>
      <div className="p-2">
        <Link href="/product-details">
          <h5 className="mb-2 text-sm font-bold tracking-tight cursor-pointer dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-400">{weight}</p>

        <StarRatingComponent
          name="rate1"
          size={24}
          className={"text-[20px]"}
          starCount={5}
          value={ratting}
          // onStarClick={this.onStarClick.bind(this)}
        />
        <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
          ৳{unitPrice}
          <span className="mx-2 text-gray-400 line-through dark:text-gray-500 text-[14px]">
            {price}
          </span>
          <span className="mx-2 text-gray-400 dark:text-gray-500 text-[14px]">
            {percentegeOfPrice} off
          </span>
        </p>

        {showAddToCardBtn === 0 ? <NumberOrderCardBtn /> : <AddToCardBtn />}
      </div>
    </div>
  );
};

export default Product;
