// import { NextResponse } from "next/server";
import Image from "next/image";
import { runningOrdersRequest } from "../../../APIRequest/orders/ordersApi";
import { logOutRequest } from "../../../APIRequest/user/userApi";
import protectedPage from "../../../utils/auth/authChecker";
import { sessionDestroy } from "../../../utils/sessionHelper/sessionHelper";
import ReactLogout from "../../../utils/test";
import BtnCancelOrder from "./_components/btnCancelOrder";
// import { redirect } from "next/navigation";

export default async function AllOrders() {
  // protectedPage();
  let data = await runningOrdersRequest(1, 100, "0");

  return (
    <div className="container">
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        Running orders
        {/* {JSON.stringify(data)} */}
      </h1>
      <div className="bg-white dark:bg-gray-800">
        <div className="px-5 py-3.5 w-full">
          {data?.rows.map((indivitualOrder, index) => (
            <div key={index}>
              <p>
                Your Order ID:{" "}
                <span className="text-green-500">
                  {indivitualOrder?.orderId}
                </span>
              </p>
              <p>
                Order status:{" "}
                <span className="text-green-500">
                  {indivitualOrder?.orderStatus}
                </span>{" "}
                <BtnCancelOrder />
              </p>
              <p></p>
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
                        <span className=" text-white block w-2/3  px-2 text-[14px] bg-yellow-500">
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
      </div>
    </div>
  );
}
