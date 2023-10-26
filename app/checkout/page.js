"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import Summary from "@components/cartPage/summary/summary";
import { CgList } from "react-icons/cg";
import { useSelector } from "react-redux";
import { paymentRequest } from "../../APIRequest/payment/paymentApi";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import store from "../../redux/store";
import { setShippingAddressFormValue } from "../../redux/features/userShippingAddressForm/userShippingAddressFormSlice";
import { ErrorToast } from "../../utils/notificationAlert/notificationAlert";
import { IsEmail, IsEmpty } from "../../utils/formValidation/formValidation";
import { createOrder } from "../../APIRequest/orders/ordersApi";

const Checkout = () => {
  const formValue = useSelector(
    (state) => state.userShippingAddressForm.formValue
  );
  const {
    products,
    totalProductsPrice,
    shippingCost,
    otherCost,
    couponDiscount,
  } = useSelector((state) => state.addToCartProducts);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  let userId = getItemWithExpiry("userData2")?.id;

  let data = {
    userId,
    allProducts: products,
    total_amount: totalProductsPrice,
  };

  const handleOrderConfirmBtn = async () => {
    if (IsEmpty(formValue.name)) {
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
    } else if (!IsEmpty(formValue.city)) {
      ErrorToast("Please provide your city");
    } else if (!IsEmpty(formValue.thana)) {
      ErrorToast("Please provide your thana");
    } else if (!IsEmpty(formValue.address)) {
      ErrorToast("Please provide your address");
    } else if (!IsEmpty(formValue.paymentMethod)) {
      ErrorToast("Please select payment method");
    } else if (!formValue.termAndCondition) {
      ErrorToast("Please agree the term & conditions");
    } else {
      if (formValue.paymentMethod === "cashOnDelivery") {
        let data = {
          allProducts: products,
          "paymentIntent.paymentMethod": formValue.paymentMethod,
          amount: formValue.totalProductsPrice,
          voucherDiscount: couponDiscount,
          otherCost: otherCost,
          subTotal: totalProductsPrice - shippingCost,
          shippingCost: shippingCost,
          grandTotal: totalProductsPrice,
          grandTotal: totalProductsPrice,
          "shippingAddress.name": formValue.name,
          "shippingAddress.email": formValue.email,
          "shippingAddress.mobile": formValue.mobile,
          "shippingAddress.alternativeMobile": formValue?.alternativeMobile,
          "shippingAddress.city": formValue.city,
          "shippingAddress.country": formValue.country,
          "shippingAddress.zipCode": formValue.zipCode,
          "shippingAddress.address": formValue.address,
        };
        let result = await createOrder(data);
      }
    }

    // let result = await paymentRequest(data);
    // if (result?.status === "success") {
    //   router.push(result?.data);
    // }
  };

  return (
    <div className="px-4 py-8">
      <div className="p-8 px-4 shadow-lg dark:bg-gray-700">
        <div>
          <div className="flex justify-between ">
            <div className="w-1/2 md:w-full">
              <div>
                <h2 className="text-2xl font-semibold md:text-xl">
                  Shipping Address
                </h2>
              </div>
              <div className="">
                <div className="mt-5 ">
                  <div className="flex gap-3 md:flex-col">
                    {/* name */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "name",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.name}
                          type="text"
                          name="Name"
                          id="Name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                    {/* email */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "email",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.email}
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    {/* mobile number */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "mobile",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.mobile}
                          type="phone"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                    {/* alternative mobile number */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="phoneNumber2"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Alternative Mobile Number
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "alternativeMobile",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.alternativeMobile}
                          type="phone"
                          name="phoneNumber2"
                          id="phoneNumber2"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    {/* country */}
                    <div className="w-full mb-2 ">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "country",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.country}
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        >
                          <option>Bangladesh</option>
                        </select>
                      </div>
                    </div>
                    {/* city */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        City <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "city",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.city}
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    {/* Thana */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="thana"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Thana <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "thana",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.thana}
                          type="text"
                          name="thana"
                          id="thana"
                          autoComplete="area"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                    {/* zip code */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "zipCode",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={formValue?.zipCode}
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  {/* address */}
                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-black dark:text-white"
                    >
                      Address <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-2">
                      <textarea
                        onChange={(e) =>
                          store.dispatch(
                            setShippingAddressFormValue({
                              Name: "address",
                              Value: e.target.value,
                            })
                          )
                        }
                        value={formValue?.address}
                        id="street-address"
                        rows="2"
                        placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                        className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                      ></textarea>
                    </div>
                  </div>

                  {/* Payable Total */}
                  <div className="hidden p-4 -mx-4 bg-gray-200 dark:bg-gray-500 mt-9 md:block">
                    <h2 className="mb-1 text-2xl font-semibold md:text-xl">
                      Payable Total: {640} Tk.
                    </h2>
                    <div
                      className="flex items-center underline dark:decoration-gray-200 text-primary"
                      onClick={toggleDrawer}
                    >
                      <CgList
                        size={16}
                        className="mr-1 md:text-[12px] dark:text-gray-200"
                      />
                      <span className="text-sm md:text-[12px] dark:text-gray-200 ">
                        Order Summary & Promo code
                      </span>
                    </div>
                    <Drawer
                      style={{
                        overflowY: "auto",
                        paddingTop: "30px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        background: "#ff007f",
                      }}
                      open={isOpen}
                      onClose={toggleDrawer}
                      direction="right"
                      size={"280px"}
                    >
                      <div>
                        <Summary width="full" checkoutBtn={false} />
                      </div>
                    </Drawer>
                  </div>

                  {/* payment method */}
                  <div className="mt-9">
                    <h2 className="mb-4 text-2xl font-semibold md:text-xl">
                      Payment Method
                    </h2>
                    <div className="flex gap-5 md:flex-col">
                      <div className="flex items-center w-full gap-4 p-5 bg-gray-200 md:p-3 dark:bg-gray-500">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "paymentMethod",
                                Value: e.target.value,
                              })
                            )
                          }
                          type="radio"
                          value="cashOnDelivery"
                          name="paymentMethod"
                          className="w-5 h-5 accent-primary"
                          id="cashOnDelivery"
                        />
                        <label
                          htmlFor="cashOnDelivery"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <img
                            src="/assets/img/logo/cash-on-delivery.png"
                            width="35"
                            height="35"
                          />
                          <span className="font-semibold text-[17px] text-gray-500 dark:text-gray-300 md:text-[15px]">
                            Cash on Delivery
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center w-full gap-4 p-5 bg-gray-200 md:p-3 dark:bg-gray-500">
                        <input
                          onChange={(e) =>
                            store.dispatch(
                              setShippingAddressFormValue({
                                Name: "paymentMethod",
                                Value: e.target.value,
                              })
                            )
                          }
                          type="radio"
                          value="digitalPayment"
                          name="paymentMethod"
                          className="w-5 h-5 accent-primary"
                          id="bkash"
                        />
                        <label htmlFor="bkash" className="cursor-pointer ">
                          {/* <img
                            src="/assets/img/logo/mobile-banking-bangladesh.webp"
                            width="70"
                            height="70"
                          /> */}
                          <span className="font-semibold text-[17px] text-gray-500 dark:text-gray-300 md:text-[15px]">
                            Online Banking
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* confirm order btn */}
                  <div className="mt-8 mb-0">
                    <button
                      onClick={handleOrderConfirmBtn}
                      className="bg-primary font-semibold dark:bg-gray-800 hidden md:block hover:bg-primary-100 py-3 md:py-2 text-sm md:text-[12px] text-white uppercase w-full  "
                    >
                      Order Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 -mt-3 md:hidden">
              <Summary
                products={products}
                totalProductsPrice={totalProductsPrice}
                shippingCost={shippingCost}
                otherCost={otherCost}
                couponDiscount={couponDiscount}
                width="full"
                headerPaddingTop="0"
                checkoutBtn={false}
                confirmOrder={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
