import React from "react";

const BtnPromoCode = () => {
  return (
    <div className="pb-1.5 -mx-3 bg-gray-100 dark:bg-gray-900">
      <div className="px-3 py-3">
        <div className="pb-1">
          <label className="mb-2 text-sm font-bold md:text-[13px]">
            Add Promo code or voucher
          </label>
        </div>
        <div className="flex w-full gap-x-3">
          <input
            type="text"
            className="w-full px-3 py-1 rounded-sm outline-none"
          />
          <button className="px-3 text-sm font-semibold text-white bg-primary dark:bg-gray-700 md:text-[13px]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnPromoCode;
