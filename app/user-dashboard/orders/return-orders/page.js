"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { returnOrdersRequest } from "../../../../APIRequest/orders/ordersApi";
import OrderStatusBar from "../_components/orderStatusBar";

export default function ReturnOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      var allData = await returnOrdersRequest(1, 100, "0");
      setData(allData);
    })();
  }, []);

  let finalData;

  if (data?.total?.length < 1) {
    finalData = <h1 className="px-5 text-2xl">No return order</h1>;
  } else {
    finalData = (
      <div className="px-5 py-3.5 w-full">
        {data?.rows?.map((indivitualOrder, index) => (
          <div key={index}>
            <p>
              Your Order ID:{" "}
              <span className="text-green-500">{indivitualOrder?.orderId}</span>
            </p>
            <p>
              Order status:{" "}
              <span className="text-green-500">
                {indivitualOrder?.orderStatus}
              </span>
            </p>
            <div className="max-w-sm py-1">
              <p>
                <span className="inline-block w-48">Sub total:</span>
                {indivitualOrder?.totalPrice}
              </p>
              <p>
                <span className="inline-block w-48">Shipping charge:</span>
                {indivitualOrder?.shippingCost}
              </p>
              <hr className="mt-1" />
              <p>
                <span className="inline-block w-48">Total:</span>
                {Number(indivitualOrder?.totalPrice) +
                  Number(indivitualOrder?.shippingCost)}
              </p>
              <p>
                <span className="inline-block w-48">Discount: </span>
                {indivitualOrder?.voucherDiscount}
              </p>
              <hr className="mt-1" />
              <p>
                <span className="inline-block w-48">Total: </span>
                {indivitualOrder?.grandTotal}
              </p>
            </div>
            <p className="pb-3.5">
              Shipping Address:{" "}
              <span className="text-green-500">
                {indivitualOrder?.shippingAddress?.state},{" "}
                {indivitualOrder?.shippingAddress?.thana},{" "}
                {indivitualOrder?.shippingAddress?.district},{" "}
                {indivitualOrder?.shippingAddress?.country}
              </span>
            </p>

            <div className="grid grid-cols-6 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-3.5">
              {indivitualOrder.productsDetails.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 !rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
                >
                  <Image
                    alt={product?.name}
                    src={product?.img[0]?.secure_url}
                    width={300}
                    height={300}
                  />
                  <div className="p-1">
                    <p>{product?.name}</p>
                    <p className="text-gray-700 dark:text-gray-400">
                      {product?.weight}
                    </p>
                    <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
                      ৳{product?.finalPrice}
                      <span className="mx-2 text-gray-400 line-through dark:text-gray-500 text-[14px]">
                        ৳{product?.price}
                      </span>
                      <span className=" text-white sm:block   px-2 text-[14px] bg-yellow-500">
                        save: ৳{product?.saveAmount}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
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
        Delivery orders
      </h1>
      <div className="bg-white dark:bg-gray-800">{finalData}</div>
    </div>
  );
}
