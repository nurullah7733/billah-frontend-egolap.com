"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  changeOrderStatusRequest,
  runningOrdersRequest,
} from "../../../../APIRequest/orders/ordersApi";
import OrderStatusBar from "../_components/orderStatusBar";
import { randomSweetAlert } from "../../../../utils/sweetAlert";
import moment from "moment";

export default function RunningOrders() {
  const router = useRouter();
  const [data, setData] = useState([]);

  const handleClick = async (id) => {
    let confirmResult = await randomSweetAlert(
      "Are you sure cancel this order?"
    );
    if (!confirmResult.isConfirmed) return;
    let result = await changeOrderStatusRequest(id);
    if (result) {
      router.push("/user-dashboard/orders/cancel-orders");
    }
  };
  useEffect(() => {
    (async () => {
      var allData = await runningOrdersRequest(1, 100, "0");
      setData(allData);
    })();
  }, []);

  let finalData;
  if (data?.total?.length < 1) {
    finalData = <h1 className="px-5 text-2xl">No running order</h1>;
  } else {
    finalData = (
      <div className="px-5 py-3.5 w-full">
        {data?.rows?.map((indivitualOrder, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold">
              Total item ({indivitualOrder?.allProducts?.length})
            </h3>
            <p>
              Your Order ID:{" "}
              <span className="text-green-500">{indivitualOrder?.orderId}</span>
            </p>
            {indivitualOrder?.tran_id && (
              <p>
                Your Transaction ID:{" "}
                <span className="text-green-500">
                  {indivitualOrder?.tran_id}
                </span>
              </p>
            )}

            <p>
              Order status:{" "}
              <span className="text-green-500">
                {indivitualOrder?.orderStatus}
              </span>{" "}
              <button
                className="px-2 text-white dark:bg-gray-700 bg-primary"
                onClick={() => handleClick(indivitualOrder?._id)}
              >
                Cancel order
              </button>
            </p>
            <p>
              Order Times:{" "}
              <span className="text-green-500">
                {moment(indivitualOrder?.createdAt).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
            </p>
            <div className="max-w-sm py-1">
              <p>
                <span className="inline-block w-48">Sub total:</span>
                {indivitualOrder?.subTotal}
              </p>
              <p>
                <span className="inline-block w-48">Shipping charge:</span>
                {indivitualOrder?.shippingCost}
              </p>
              {indivitualOrder?.otherCost > 0 && (
                <p>
                  <span className="inline-block w-48">Other charge:</span>
                  {indivitualOrder?.otherCost}
                </p>
              )}
              {indivitualOrder?.voucherDiscount > 0 && (
                <p>
                  <span className="inline-block w-48">Discount: </span>
                  {indivitualOrder?.voucherDiscount}%
                </p>
              )}
              <hr className="mt-1" />
              <p>
                <span className="inline-block w-48">Total:</span>
                {indivitualOrder?.grandTotal}
              </p>
            </div>
            <h5 className="pb-3.5 font-semibold">
              Shipping Address:{" "}
              <p className="text-green-500">
                Name: {indivitualOrder?.shippingAddress?.name}
              </p>
              <p className="text-green-500">
                email: {indivitualOrder?.shippingAddress?.email}
              </p>
              {indivitualOrder?.shippingAddress?.alternativeMobile && (
                <p className="text-green-500">
                  alternativeMobile:{" "}
                  {indivitualOrder?.shippingAddress?.alternativeMobile}
                </p>
              )}
              <p className="text-green-500">
                division: {indivitualOrder?.shippingAddress?.division}
              </p>
              <p className="text-green-500">
                district: {indivitualOrder?.shippingAddress?.district}
              </p>
              <p className="text-green-500">
                upazilla: {indivitualOrder?.shippingAddress?.upazilla}
              </p>
              <p className="text-green-500">
                address: {indivitualOrder?.shippingAddress?.address}
              </p>
            </h5>

            <div className="grid grid-cols-6 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-3.5  ">
              {indivitualOrder?.allProducts
                ?.filter((allProduct, index) =>
                  indivitualOrder?.productsDetails?.some(
                    (productDetail) =>
                      allProduct?.productId === productDetail?._id
                  )
                )
                .map((filterProduct, index) => {
                  const matchingProductDetail =
                    indivitualOrder?.productsDetails?.find(
                      (productDetail) =>
                        filterProduct?.productId === productDetail?._id
                    );

                  return (
                    <Link
                      href={`/product-details/${matchingProductDetail?._id}`}
                    >
                      <div
                        key={index}
                        className="bg-white border border-gray-200 !rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  "
                      >
                        <Image
                          alt={matchingProductDetail?.name}
                          src={matchingProductDetail?.img[0]?.secure_url}
                          width={300}
                          height={300}
                        />
                        <div className="p-1">
                          <p className="sm:h-24 h-14">
                            {matchingProductDetail?.name?.length > 30
                              ? `${matchingProductDetail?.name.slice(0, 30)}...`
                              : matchingProductDetail?.name}
                          </p>

                          <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
                            ৳{matchingProductDetail?.finalPrice}
                            <span className="mx-2 text-gray-400 line-through dark:text-gray-500 text-[14px]">
                              ৳{matchingProductDetail?.price}
                            </span>
                          </p>
                          <div className="h-16">
                            <p>
                              quantity:{" "}
                              {filterProduct?.customerChoiceProductQuantity}
                            </p>
                            {filterProduct?.customerChoiceProductSize && (
                              <p>
                                Size: {filterProduct?.customerChoiceProductSize}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <hr className="mb-3.5" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        Running orders
      </h1>
      <div className="bg-white dark:bg-gray-800">{finalData}</div>
    </div>
  );
}
