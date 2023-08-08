import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons";

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

export default NumberOrderCardBtn;
