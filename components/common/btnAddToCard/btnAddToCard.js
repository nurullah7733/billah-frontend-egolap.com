import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCardBtn = () => {
  return (
    <button className="flex items-center justify-center w-full h-10 py-2 text-white rounded-lg md:h-8 gap-x-1 bg-primary dark:bg-gray-700 ">
      <MdOutlineAddShoppingCart size={20} />{" "}
      <p className="md:text-[14px]">Add to bag</p>
    </button>
  );
};

export default AddToCardBtn;
