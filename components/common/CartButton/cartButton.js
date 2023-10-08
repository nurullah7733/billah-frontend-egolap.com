"use client";
import React from "react";
import store from "../../../redux/store";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { setAddToCartProduct } from "../../../redux/features/addToCart/addToCartSlice";
import { useSelector } from "react-redux";

const AddToCardBtn = ({ product }) => {
  return (
    <button
      onClick={() => store.dispatch(setAddToCartProduct(product))}
      className="flex items-center justify-center w-full h-10 py-2 text-white rounded-lg md:h-8 gap-x-1 bg-primary dark:bg-gray-700 "
    >
      <MdOutlineAddShoppingCart size={20} />
      <p className="md:text-[14px]">Add to bag</p>
    </button>
  );
};

const NumberOrderCardBtn = ({ btnHeight = "10" }) => {
  return (
    <div
      className={`flex items-center justify-between h-${btnHeight} text-white rounded-lg bg-primary-100 dark:bg-gray-500`}
    >
      <button
        className={`px-2 py-2   border-e-[1px] h-${btnHeight}  flex items-center rounded-l-lg hover:bg-primary hover:dark:bg-gray-700`}
      >
        -
      </button>
      <p className="min-w-[72px] text-center">{10} in bag</p>
      <button
        className={`px-2 py-2   border-s-[1px] h-${btnHeight} flex items-center rounded-r-lg hover:bg-primary hover:dark:bg-gray-700`}
      >
        +
      </button>
    </div>
  );
};

const CartButton = ({ product }) => {
  const addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );
  let exitsProducts = addToCartProducts?.find(
    (prod) => prod?._id === product?._id
  );
  console.log(exitsProducts, "exitsProducts");
  return (
    <>
      {exitsProducts === undefined ? (
        <AddToCardBtn product={product} />
      ) : (
        <NumberOrderCardBtn />
      )}
    </>
  );
};

export default CartButton;
