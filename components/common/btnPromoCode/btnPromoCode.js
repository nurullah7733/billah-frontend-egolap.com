"use client";
import React, { useState } from "react";
import { getCouponCodeRequest } from "../../../APIRequest/coupon/couponApi";
import { ErrorToast } from "../../../utils/notificationAlert/notificationAlert";
import {
  getItemWithExpiry,
  setItemWithExpiry,
} from "../../../utils/localStorageWithExpire/localStorageWithExpire";
import {
  userUpdateOnlyCouponCodeUsesChangeRequest,
  userUpdateRequest,
} from "../../../APIRequest/user/userApi";
import store from "../../../redux/store";
import {
  setCouponDiscount,
  setTotalProductsPrice,
} from "../../../redux/features/addToCart/addToCartSlice";
import { MustLoginModal } from "../../../utils/sweetAlert";

const BtnPromoCode = () => {
  const [couponCode, setCouponCode] = useState("");
  const handleCouponCodeApplyBtn = async () => {
    if (couponCode.length === 0) {
      ErrorToast("Please provide a coupon code!");
    } else if (!getItemWithExpiry("userData2")) {
      MustLoginModal();
    } else {
      let result = await getCouponCodeRequest(couponCode);
      if (result?.length > 0) {
        if (getItemWithExpiry("userData2")?.couponCodeUses === couponCode) {
          return ErrorToast(`You have already use "${couponCode}" coupon code`);
        } else {
          let formData = new FormData();
          formData.append("couponCodeUses", couponCode);
          await userUpdateRequest(formData, getItemWithExpiry("userData2")?.id);

          let pushDataToLocalStorage = {
            firstName: getItemWithExpiry("userData2")?.firstName,
            lastName: getItemWithExpiry("userData2")?.lastName,
            email: getItemWithExpiry("userData2")?.email,
            mobile: getItemWithExpiry("userData2")?.mobile,
            photo: getItemWithExpiry("userData2")?.photo,
            couponCodeUses: couponCode,
            id: getItemWithExpiry("userData2")?.id,
          };
          setItemWithExpiry("userData2", pushDataToLocalStorage, 2592000);
          store.dispatch(setCouponDiscount(result?.[0]?.discound));
          store.dispatch(setTotalProductsPrice());
        }
      }
    }
  };
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
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
            type="text"
            value={couponCode}
            className="w-full px-3 py-1 rounded-sm outline-none"
          />
          <button
            onClick={handleCouponCodeApplyBtn}
            className="px-3 text-sm font-semibold text-white bg-primary dark:bg-gray-700 md:text-[13px]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnPromoCode;
