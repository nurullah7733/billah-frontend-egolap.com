"use client";
import React, { useEffect } from "react";
import Summary from "@components/cartPage/summary/summary";
import CartProducts from "@components/cartPage/cartProducts/cartProducts";
import { useSelector } from "react-redux";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import { userAddToCartOrUpdateRequest } from "../../APIRequest/user/userApi";
import Cookies from "js-cookie";

export const metadata = {
  title:
    "Your Egolap.com Shopping Cart - Securely Store and Checkout with Ease for Fruits, Electronics, Clothing, and Cosmetics!",
  description:
    "Review and finalize your order at Egolap.com! Your secure shopping cart awaits, filled with fresh fruits, cutting-edge electronics, trendy clothing, and luxurious cosmetics. Effortlessly manage your selections and proceed to checkout. Shopping made simple at Egolap.com!",
  image: "/seo_card.jpg",

  twitter: {
    card: "Ready to make it yours? 🛒 Your Egolap.com cart is packed with goodies – from fresh fruits 🍏 to top-notch electronics 📦, trendy clothing 👜, and elegant cosmetics 💅. Securely checkout for an unmatched shopping experience. Shop smart with Egolap.com! #Egolap #SecureCheckout #ShopSmart",
    site: "@Egolap1",
  },
};

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
