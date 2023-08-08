import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const BtnPlaceOrder = () => {
  return (
    <button className="flex items-center justify-center w-full h-10 py-2 text-white rounded-lg gap-x-1 bg-primary dark:bg-gray-700">
      <p>Place Order</p>
    </button>
  );
};

export default BtnPlaceOrder;
