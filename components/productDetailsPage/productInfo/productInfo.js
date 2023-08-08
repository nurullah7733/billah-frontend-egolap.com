"use client";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import StarRatingComponent from "react-star-rating-component";
import AddToCardBtn from "@components/common/btnAddToCard/btnAddToCard";
import NumberOrderCardBtn from "@components/common/btnNumberOrderCard/btnNumberOrderCard";
import BtnPlaceOrder from "@components/common/btnPlaceOrder/btnPlaceOrder";

const ProductInfo = () => {
  return (
    <div>
      <div className="">
        {/* title */}
        <h1 className="text-3xl font-semibold md:text-xl ">
          Hilsa fish. This One of the most enterprize food.
        </h1>
        {/* rattings */}
        <div className="flex items-center gap-x-1 text-[15px] pt-2 relative -z-10">
          <StarRatingComponent
            name="rate1"
            size={24}
            className={"text-[20px]"}
            starCount={5}
            value={3}
            // onStarClick={this.onStarClick.bind(this)}
          />
          (2) &nbsp; | &nbsp; Rattings
        </div>
        {/* price */}
        <div className="py-5 mt-2 bg-gray-200 md:py-2 px-7">
          <div className="flex items-center gap-4">
            <del className="text-primary-100">৳ 300 </del>
            <p className="text-xl font-semibold text-primary">৳ 250</p>
            <p className="p-1 md:p-0.5 text-sm text-white rounded-sm bg-primary">
              17% OFF
            </p>
          </div>
        </div>

        {/* description */}
        <div className="mt-3">
          <p className="text-base md:text-[15px]">
            Almighty Audio - Experience ultimate clarity and sound quality with
            Premium High Fidelity Drivers. Fully customize the sound experience
            with the Sonar Software by using a first-in-gaming Pro-grade
            Parametric EQ.
          </p>
        </div>
        {/* sub description */}
        <div className="mt-3">
          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Country:</p>
            <p className="">Koria</p>
          </div>
          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Category:</p>
            <p className="">Serum</p>
          </div>
          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Stock:</p>
            <p className="">3 pcs available</p>
          </div>
          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">SKU:</p>
            <p className="">8809429954619</p>
          </div>
          <div className="flex mb-3">
            <p className="w-36 xl:w-[170px] lg:w-[190px]  md:w-[165px] sm:w-[210px] font-semibold text-[14px]">
              Add:
            </p>
            <div className="flex w-full gap-4">
              <div className=" md:w-[150px]  w-[200px]">
                <AddToCardBtn />
              </div>
            </div>
          </div>
        </div>

        {/* wishlist button */}
        <div className="mt-3">
          <div className="px-2 py-2 bg-gray-200 md:py-1 ">
            <div className="flex items-center gap-1 cursor-pointer">
              <AiOutlineHeart color="#ff007f" className="md:text-[15px]" />{" "}
              <button className="font-semibold text-[14px]   text-black">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
