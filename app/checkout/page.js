"use client";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import Summary from "@components/cartPage/summary/summary";
import { CgList } from "react-icons/cg";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="px-4 py-8">
      <div className="px-4 py-8 shadow-lg dark:bg-gray-700">
        <div>
          <div className="flex ">
            <div className="w-1/2 md:w-full">
              <div>
                <h2 className="pb-8 text-2xl font-semibold border-b md:text-xl">
                  Shipping Address
                </h2>
              </div>
              <div className="">
                <div className="mt-[50px] ">
                  <div className="flex gap-3 md:flex-col">
                    {/* name */}
                    <div className="w-full mb-2">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          autocomplete="family-name"
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
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autocomplete="email"
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
                        Mobile Number
                      </label>
                      <div className="mt-2">
                        <input
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
                          id="country"
                          name="country"
                          autocomplete="country-name"
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
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="address-level2"
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
                        Thana
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="thana"
                          id="thana"
                          autocomplete="area"
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
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autocomplete="postal-code"
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
                      Address
                    </label>
                    <div className="mt-2">
                      <textarea
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
                          type="radio"
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
                          type="radio"
                          name="paymentMethod"
                          className="w-5 h-5 accent-primary"
                          id="bkash"
                        />
                        <label htmlFor="bkash" className="cursor-pointer ">
                          <img
                            src="/assets/img/logo/bkash.png"
                            width="70"
                            height="70"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* confirm order btn */}
                  <div className="mt-8 mb-0">
                    <button className="bg-primary font-semibold dark:bg-gray-800 hidden md:block hover:bg-primary-100 py-3 md:py-2 text-sm md:text-[12px] text-white uppercase w-full  ">
                      <Link href="#">Order Confirm</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:hidden">
              <Summary
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
