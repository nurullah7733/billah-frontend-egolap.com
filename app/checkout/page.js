"use client";
import numberWithCommas from "../../utils/numberWithComma/numberWithComma";
import React, { useEffect, useState } from "react";
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
import {
  getDistrictsAndUpazilasRequest,
  getDivisionsRequest,
} from "../../APIRequest/bd/bdApi";
import {
  setOtherCost,
  setShippingCost,
} from "../../redux/features/addToCart/addToCartSlice";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);

  const formValue = useSelector(
    (state) => state.userShippingAddressForm.formValue
  );

  const applicationAllSettings = useSelector(
    (state) => state.applicationAllSettings.applicationAllSettings
  );

  const {
    products,
    allProductsSubTotal,
    totalProductsPrice,
    shippingCost,
    otherCost,
    couponDiscount,
  } = useSelector((state) => state.addToCartProducts);

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
        let userAllInfo = {
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
        await createOrder(userAllInfo);
        setLoading(false);
      } else {
        setLoading(true);
        let userAllInfoAndPaymentData = {
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
        let result = await paymentRequest(userAllInfoAndPaymentData);
        setLoading(false);
        window.location.href = result;
      }
    }
  };

  const divisionChangeHandler = (e) => {
    store.dispatch(
      setShippingAddressFormValue({
        Name: "division",
        Value: e.target.value,
      })
    );
    // when user division change then rest the district and upazillas but district auto reset
    store.dispatch(
      setShippingAddressFormValue({
        Name: "upazilla",
        Value: "",
      })
    );
    if (formValue.division !== "Select Division") {
      (async () => {
        let data = await getDistrictsAndUpazilasRequest(e.target.value);
        setDistricts(data.data);
        setUpazillas([]);
      })();
    }
  };

  const districtsChangeHandler = (e) => {
    store.dispatch(
      setShippingAddressFormValue({
        Name: "district",
        Value: e.target.value,
      })
    );
    if (formValue.district !== "Select District") {
      let upazilla = districts?.find(
        (value) => value?.district === e.target.value
      );
      setUpazillas(upazilla?.upazilla);
    }
  };

  const upazillasChangeHandler = (e) => {
    store.dispatch(
      setShippingAddressFormValue({
        Name: "upazilla",
        Value: e.target.value,
      })
    );
    // add shipping cost and other cost when user select upazilla
    if (e.target.value !== "Select Upazilla") {
      if (e.target.value === "Thakurgaon Sadar") {
        store.dispatch(
          setShippingCost(
            applicationAllSettings[0]?.shippingCostThakurgaonSadar
          )
        );
        store.dispatch(
          setOtherCost(applicationAllSettings[0]?.otherCostThakurgaonSadar)
        );
      } else if (
        e.target.value === "Haripur" ||
        e.target.value === "Ranisankail" ||
        e.target.value === "Baliadangi" ||
        e.target.value === "Pirganj"
      ) {
        store.dispatch(
          setShippingCost(applicationAllSettings[0]?.shippingCostThakurgaon)
        );
        store.dispatch(
          setOtherCost(applicationAllSettings[0]?.otherCostThakurgaon)
        );
      } else if (
        e.target.value === "Dohar" ||
        e.target.value === "Savar" ||
        e.target.value === "Nawabganj" ||
        e.target.value === "Dhamrai" ||
        e.target.value === "Keraniganj"
      ) {
        store.dispatch(
          setShippingCost(applicationAllSettings[0]?.shippingCostDhaka)
        );
        store.dispatch(setOtherCost(applicationAllSettings[0]?.otherCostDhaka));
      } else {
        store.dispatch(
          setShippingCost(applicationAllSettings[0]?.shippingCost)
        );
        store.dispatch(setOtherCost(applicationAllSettings[0]?.otherCost));
      }
    }
  };

  useEffect(() => {
    (async () => {
      let division = await getDivisionsRequest();
      setDivisions(division.data);
    })();
  }, []);

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
                    {/* Division */}
                    <div className="w-full mb-2 ">
                      <label
                        htmlFor="division"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Division <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={divisionChangeHandler}
                          value={formValue?.division}
                          id="division"
                          name="division"
                          autoComplete="division-name"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        >
                          <option value="">Select Division</option>
                          {divisions?.map((division, index) => (
                            <option key={index} value={division?.division}>
                              {division?.division}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    {/* District */}
                    <div className="w-full mb-2 ">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        District <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={districtsChangeHandler}
                          value={formValue?.district}
                          id="district"
                          name="district"
                          autoComplete="district-name"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        >
                          <option value="">Select District</option>
                          {districts?.map((district, index) => (
                            <option key={index} value={district?.district}>
                              {district?.district}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* Thana */}
                    <div className="w-full mb-2 ">
                      <label
                        htmlFor="Upazilla"
                        className="block text-sm font-medium leading-6 text-black dark:text-white"
                      >
                        Upazilla <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={upazillasChangeHandler}
                          value={formValue?.upazilla}
                          id="Upazilla"
                          name="Upazilla"
                          autoComplete="Upazilla-name"
                          className="block w-full rounded-md border-0 ring-1 ring-gray-300 outline-none p-1.5   placeholder:text-gray-400 text-black dark:text-white placeholder:text-sm"
                        >
                          <option value="">Select Upazilla</option>
                          {upazillas?.map((upazilla, index) => (
                            <option key={index} value={upazilla}>
                              {upazilla}
                            </option>
                          ))}
                        </select>
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
                      Payable Total:{" "}
                      {numberWithCommas(
                        totalProductsPrice +
                          Number(shippingCost) +
                          Number(otherCost)
                      )}{" "}
                      Tk.
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
                          allProductsSubTotal={allProductsSubTotal}
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
                allProductsSubTotal={allProductsSubTotal}
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
