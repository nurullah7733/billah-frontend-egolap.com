"use client";
import React, { useEffect } from "react";
import Summary from "@components/cartPage/summary/summary";
import CartProducts from "@components/cartPage/cartProducts/cartProducts";
import { useSelector } from "react-redux";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import { userAddToCartOrUpdateRequest } from "../../APIRequest/user/userApi";
import Cookies from "js-cookie";

const Cart = () => {
  let token = Cookies.get("token2");
  const {
    products,
    totalProductsPrice,
    shippingCost,
    otherCost,
    couponDiscount,
  } = useSelector((state) => state.addToCartProducts);

  useEffect(() => {
    // when store page unmounted then localstorage cart item save to database.
    return async () => {
      if (token !== undefined && products?.length > 0) {
        let id = getItemWithExpiry("userData2")?.id;
        let cart = products;
        await userAddToCartOrUpdateRequest(id, cart);
      }
    };
  });

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
              shippingCost={shippingCost}
              otherCost={otherCost}
              couponDiscount={couponDiscount}
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
