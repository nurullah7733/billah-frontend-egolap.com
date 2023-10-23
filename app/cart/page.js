"use client";
import React from "react";
import Summary from "@components/cartPage/summary/summary";
import CartProducts from "@components/cartPage/cartProducts/cartProducts";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products, totalProductsPrice } = useSelector(
    (state) => state.addToCartProducts
  );

  return (
    <div className="container px-4 mx-auto py-7 dark:bg-gray-700">
      <div
        className={`${
          products?.length > 0 && "flex"
        } justify-between px-4 shadow-md xl:flex-col pb-7`}
      >
        {products?.length > 0 ? (
          <>
            {/* products */}
            <CartProducts products={products} />

            {/* order summary */}
            <Summary
              products={products}
              totalProductsPrice={totalProductsPrice}
            />
          </>
        ) : (
          <h2 className="py-8 text-2xl font-bold text-center">Cart is Empty</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
