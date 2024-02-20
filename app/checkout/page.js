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
import {
  IsEmail,
  IsEmpty,
  IsMobileNumber,
} from "../../utils/formValidation/formValidation";
import { createOrder } from "../../APIRequest/orders/ordersApi";

export const metadata = {
  title:
    "Secure Checkout at Egolap.com - Complete Your Order Safely for Fruits, Electronics, Clothing, and Cosmetics!",
  description:
    "Finalize your purchase with confidence at Egolap.com! Our secure checkout ensures a smooth and safe transaction for your fresh fruits, cutting-edge electronics, trendy clothing, and luxurious cosmetics. Experience hassle-free shopping and enjoy the convenience of Egolap.com!",
  image: "/seo_checkout.jpg",

  twitter: {
    card: "Ready to make it yours? 🛍️ Complete your order securely at Egolap.com! From fresh fruits 🍇 to top-notch electronics 📲, trendy clothing 👗, and elegant cosmetics 💄. Your seamless checkout experience awaits. Shop smart with Egolap.com! #Egolap #SecureCheckout #ShopSmart",
    site: "@Egolap1",
  },
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      if (formValue.paymentMethod === "cashOnDelivery") {
        let userAllInfo = {
          allProducts: products,
          "paymentIntent.paymentMethod": formValue.paymentMethod,
          amount: formValue.totalProductsPrice,
          voucherDiscount: couponDiscount,
          otherCost: otherCost,
          subTotal: totalProductsPrice - shippingCost,
          shippingCost: shippingCost,
          grandTotal: totalProductsPrice,
          shippingAddress: {
            name: formValue.name,
            email: formValue.email,
            mobile: formValue.mobile,
            alternativeMobile: formValue.alternativeMobile,
            thana: formValue.thana,
            city: formValue.city,
            country: formValue.country,
            zipCode: formValue.zipCode,
            address: formValue.address,
          },
        };
        await createOrder(userAllInfo);
        setLoading(false);
      } else {
        setLoading(true);
        let userAllInfoAndPaymentData = {
          userId: userId,
          allProducts: products,
          "paymentIntent.paymentMethod": formValue.paymentMethod,
          amount: formValue.totalProductsPrice,
          voucherDiscount: couponDiscount,
          otherCost: otherCost,
          subTotal: totalProductsPrice - shippingCost,
          shippingCost: shippingCost,
          grandTotal: totalProductsPrice,
          shippingAddress: {
            name: formValue.name,
            email: formValue.email,
            mobile: formValue.mobile,
            alternativeMobile: formValue.alternativeMobile,
            thana: formValue.thana,
            city: formValue.city,
            country: formValue.country,
            zipCode: formValue.zipCode,
            address: formValue.address,
          },
        };
        let result = await paymentRequest(userAllInfoAndPaymentData);
        setLoading(false);
        window.location.href = result;
      }
    }
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
                      Payable Total: {totalProductsPrice} Tk.
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
                        <Summary
                          width="full"
                          header="hidden"
                          termAndConditionCheckbox="hidden"
                          confirmOrderBtn="hidden"
                          checkoutBtn={false}
                          products={products}
                          totalProductsPrice={totalProductsPrice}
                          shippingCost={shippingCost}
                          otherCost={otherCost}
                          couponDiscount={couponDiscount}
                          headerPaddingTop="0"
                          confirmOrder={true}
                        />
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
                      <div className="w-full bg-gray-200 dark:bg-gray-500">
                        <div className="flex items-center  gap-4 p-5   md:p-3 ">
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
                            value="bkash"
                            name="paymentMethod"
                            className="w-5 h-5 accent-primary"
                            id="bkash"
                          />
                          <label htmlFor="bkash" className="cursor-pointer ">
                            <img
                              src="/assets/icons/bkash-logo.png"
                              width="70"
                              height="70"
                              alt="bkash"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex">
                    <div className={`flex items-center gap-1 my-4  `}>
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
                        I agree the rules of term & conditions.
                      </label>
                    </div>
                  </div>

                  {/* confirm order btn */}
                  <div className=" mb-0">
                    <button
                      disabled={loading}
                      onClick={handleOrderConfirmBtn}
                      className=" bg-primary font-semibold   hidden md:block hover:bg-primary-100 py-3 md:py-2 text-sm md:text-[12px] text-white uppercase w-full dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800 "
                    >
                      <p className="flex justify-center items-center gap-2">
                        {loading && (
                          <img src="/assets/icons/spinner.svg" width={22} />
                        )}
                        Order Confirm
                      </p>
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
