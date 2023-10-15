"use client";
import React from "react";
import Summary from "@components/cartPage/summary/summary";
import CartProducts from "@components/cartPage/cartProducts/cartProducts";
import { useSelector } from "react-redux";

let items = [
  {
    image: "/assets/img/products/30.webp",
    name: "Innisfree Perfect 9 Repair Lotion Ex- 160ml",
    price: "10",
  },
  {
    image: "/assets/img/products/31.webp",
    name: "CeraVe Facial Moisturising Lotion is fragrance free, paraben-free, allergy tested & non-comedogenic",
    price: "20",
  },
  {
    image: "/assets/img/products/32.webp",
    name: "protective barrier. Developed with dermatologists,",
    price: "30",
  },
  {
    image: "/assets/img/products/33.webp",
    name: "CeraVe Facial Moisturising Lotion is fragrance free, paraben-free, allergy tested & non-comedogenic",
    price: "40",
  },
];

const Cart = () => {
  const { products, totalProductsPrice } = useSelector(
    (state) => state.addToCartProducts
  );

  return (
    <div className="container px-4 mx-auto py-7 dark:bg-gray-700">
      <div className="flex justify-between px-4 shadow-md xl:flex-col pb-7">
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
