"use client";
import React from "react";
import Summary from "@components/cartPage/summary/summary";
import CartProducts from "@components/cartPage/cartProducts/cartProducts";

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
  return (
    <div className="container px-4 mx-auto py-7 ">
      <div className="flex px-4 shadow-md xl:flex-col dark:bg-gray-700 pb-7">
        {/* products */}
        <CartProducts items={items} />

        {/* order summary */}
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
