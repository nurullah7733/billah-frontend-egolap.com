"use client";
import React, { useState } from "react";
import BtnPromoCode from "@components/common/btnPromoCode/btnPromoCode";
import numberWithCommas from "../../../utils/numberWithComma/numberWithComma";
import { MustLoginModal } from "../../../utils/sweetAlert";

import { redirect, useRouter } from "next/navigation";
import { getItemWithExpiry } from "../../../utils/localStorageWithExpire/localStorageWithExpire";
import { paymentRequest } from "../../../APIRequest/payment/paymentApi";
import { setShippingAddressFormValue } from "../../../redux/features/userShippingAddressForm/userShippingAddressFormSlice";
import store from "../../../redux/store";
import {
  IsEmail,
  IsEmpty,
  IsMobileNumber,
} from "../../../utils/formValidation/formValidation";
import { ErrorToast } from "../../../utils/notificationAlert/notificationAlert";
import { useSelector } from "react-redux";
import { createOrder } from "../../../APIRequest/orders/ordersApi";

const Summary = ({
  width = "1/2",
  header = "",
  termAndConditionCheckbox = "",
  confirmOrderBtn = "",
  checkoutBtn = true,
  confirmOrder = false,
  products,
  totalProductsPrice,
  allProductsSubTotal,
  shippingCost,
  otherCost,
  couponDiscount,
}) => {
  let [loading, setLoading] = useState(false);
  const formValue = useSelector(
    (state) => state.userShippingAddressForm.formValue
  );

  let router = useRouter();
  const hadleChackoutBtn = async () => {
    if (
      getItemWithExpiry("userData2") == null ||
      Object.values(getItemWithExpiry("userData2"))?.length < 1
    ) {
      let result = await MustLoginModal();
      if (result.isConfirmed === true) {
        router.push("/login");
      }
    } else {
      router.push("/checkout");
    }
  };

  let userId = getItemWithExpiry("userData2")?.id;
  const handleOrderConfirmBtn = async () => {
    if (!IsEmpty(formValue.name)) {
      ErrorToast("Please provide your name");
    } else if (!IsEmpty(formValue.email)) {
      ErrorToast("Please provide your email");
    } else if (!IsEmail(formValue.email)) {
      ErrorToast("Invalid email");
    } else if (!IsEmpty(formValue.mobile)) {
      ErrorToast("Please provide your mobile");
    } else if (!IsMobileNumber(formValue.mobile)) {
      ErrorToast("Invalid mobile number");
    } else if (
      IsEmpty(formValue?.alternativeMobile) &&
      !IsMobileNumber(formValue?.alternativeMobile)
    ) {
      ErrorToast("Invalid alternative mobile number");
    } else if (!IsEmpty(formValue.country)) {
      ErrorToast("Please provide your country");
    } else if (!IsEmpty(formValue.division)) {
      ErrorToast("Division is required");
    } else if (!IsEmpty(formValue.district)) {
      ErrorToast("District is required");
    } else if (!IsEmpty(formValue.upazilla)) {
      ErrorToast("Upazilla is required");
    } else if (!IsEmpty(formValue.address)) {
      ErrorToast("Please provide your address");
    } else if (!IsEmpty(formValue.paymentMethod)) {
      ErrorToast("Please select payment method");
    } else if (!formValue.termAndCondition) {
      ErrorToast("Please agree the term & conditions");
    } else {
      setLoading(true);
      let simplifiedProducts = products.map(
        ({
          _id,
          finalPrice,
          customerChoiceProductQuantity,
          customerChoiceProductSize,
        }) => ({
          productId: _id,
          finalPrice,
          total: finalPrice * customerChoiceProductQuantity,
          customerChoiceProductQuantity,
          customerChoiceProductSize,
        })
      );
      if (formValue.paymentMethod === "cashOnDelivery") {
        let forCashOnDeliveryData = {
          allProducts: simplifiedProducts,
          "paymentIntent.paymentMethod": formValue.paymentMethod,
          amount: formValue.totalProductsPrice,
          voucherDiscount: couponDiscount,
          otherCost: otherCost,
          subTotal: totalProductsPrice,
          shippingCost: shippingCost,
          productsSubTotal: allProductsSubTotal,
          grandTotal: totalProductsPrice + shippingCost + otherCost,
          shippingAddress: {
            name: formValue.name,
            email: formValue.email,
            mobile: formValue.mobile,
            alternativeMobile: formValue.alternativeMobile,
            country: formValue.country,
            division: formValue.division,
            district: formValue.district,
            upazilla: formValue.upazilla,
            address: formValue.address,
          },
        };
        await createOrder(forCashOnDeliveryData);
        setLoading(false);
      } else {
        setLoading(true);
        let forOnlineBankingData = {
          userId: userId,
          allProducts: simplifiedProducts,
          "paymentIntent.paymentMethod": formValue.paymentMethod,
          amount: formValue.totalProductsPrice,
          voucherDiscount: couponDiscount,
          otherCost: otherCost,
          subTotal: totalProductsPrice,
          shippingCost: shippingCost,
          productsSubTotal: allProductsSubTotal,
          grandTotal: totalProductsPrice + shippingCost + otherCost,
          shippingAddress: {
            name: formValue.name,
            email: formValue.email,
            mobile: formValue.mobile,
            alternativeMobile: formValue.alternativeMobile,
            country: formValue.country,
            division: formValue.division,
            district: formValue.district,
            upazilla: formValue.upazilla,
            address: formValue.address,
          },
        };
        let result = await paymentRequest(forOnlineBankingData);
        setLoading(false);
        window.location.href = result;
      }
    }
  };

  return (
    <div
      id="summary"
      className={`w-${width}  xl:w-full px-3 md:px-0  xl:pb-14`}
    >
      <h1
        className={`pt-4 pb-8 text-2xl font-semibold text-black dark:text-white md:text-xl ${header}`}
      >
        Order Summary
      </h1>

      {products?.length > 0 ? (
        <div className="px-3 py-8 bg-gray-200 dark:bg-gray-800 rounded-2xl">
          <div className="flex justify-between text-sm font-semibold uppercase">
            <span className="text-sm md:text-[12px] ">Subtotal</span>
            <span className="md:text-[12px] ">
              ৳{numberWithCommas(allProductsSubTotal)}
            </span>
          </div>
          <div className="flex justify-between py-6 text-sm font-semibold uppercase">
            <span className="text-sm md:text-[12px] ">Total</span>
            <span className="md:text-[12px] ">
              ৳{numberWithCommas(totalProductsPrice)}
            </span>
          </div>

          <div className="flex justify-between py-6 text-sm font-semibold uppercase ">
            {shippingCost > 0 && formValue.upazilla.length > 0 ? (
              <>
                <span className="text-sm md:text-[12px] ">SHIPPING COST</span>
                <span className="md:text-[12px] ">
                  ৳{numberWithCommas(shippingCost)}
                </span>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between pb-6 text-sm font-semibold uppercase border-b border-white ">
            {otherCost > 0 && formValue.upazilla.length > 0 ? (
              <>
                <span className="text-sm md:text-[12px] ">OTHER COST</span>
                <span className="md:text-[12px] ">
                  ৳{numberWithCommas(otherCost)}
                </span>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between py-6 text-sm font-semibold uppercase">
            <span className="text-sm md:text-[12px] ">Grand Total</span>
            <span className="md:text-[12px] ">
              ৳
              {formValue.upazilla.length > 0
                ? numberWithCommas(
                    totalProductsPrice +
                      Number(shippingCost) +
                      Number(otherCost)
                  )
                : numberWithCommas(totalProductsPrice)}
            </span>
          </div>

          {couponDiscount > 0 ? (
            <>
              <div className="flex justify-between  text-sm font-semibold uppercase">
                <span className="text-sm md:text-[12px] ">
                  Vauchar Discount (applied)
                </span>
                <span className="md:text-[12px] ">{couponDiscount}%</span>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="flex justify-between py-6 text-sm font-bold uppercase">
            <span className="text-sm md:text-[13px] ">payable Total</span>
            <span className="md:text-[13px] ">
              ৳
              {formValue.upazilla.length > 0
                ? numberWithCommas(
                    totalProductsPrice +
                      Number(shippingCost) +
                      Number(otherCost)
                  )
                : numberWithCommas(totalProductsPrice)}
            </span>
          </div>

          <BtnPromoCode />

          {/* checkout btn */}
          {checkoutBtn && (
            <div className="mt-8 mb-0">
              <button
                onClick={hadleChackoutBtn}
                className="bg-primary font-semibold dark:bg-gray-700 hover:bg-primary-100 py-3 md:py-2 md:text-[12px] text-sm text-white uppercase w-full"
              >
                Checkout
              </button>
            </div>
          )}

          {/* Confirm Order btn */}
          {confirmOrder && (
            <div className="mt-[18px] mb-0">
              <div
                className={`flex items-center gap-1 mb-4 ${termAndConditionCheckbox}`}
              >
                <label className="text-sm font-semibold text-black dark:text-white flex items-center gap-1">
                  <input
                    onChange={(e) =>
                      store.dispatch(
                        setShippingAddressFormValue({
                          Name: "termAndCondition",
                          Value: e.target.checked ? true : false,
                        })
                      )
                    }
                    type="checkbox"
                    className="w-3.5 h-3.5"
                  />
                  I agree the rules of terms & conditions.
                </label>
              </div>
              <button
                onClick={handleOrderConfirmBtn}
                disabled={loading}
                className={`flex justify-center items-center gap-2 w-full py-3 text-sm font-semibold text-white uppercase bg-primary dark:bg-gray-700 hover:bg-primary-100   disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800 ${confirmOrderBtn}`}
              >
                {loading && <img src="/assets/icons/spinner.svg" width={22} />}
                Confirm Order
              </button>
            </div>
          )}
        </div>
      ) : (
        <h2 className="p-5 text-2xl font-bold text-center">Summary is Empty</h2>
      )}
    </div>
  );
};

export default Summary;
