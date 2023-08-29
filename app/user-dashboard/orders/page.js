import { NextResponse } from "next/server";
import { runningOrdersRequest } from "../../../APIRequest/orders/ordersApi";
import { redirect } from "next/navigation";

const handle401Error = (res) => {
  // Check the status code of the error response.
  if (res.status === 401) {
    // Delete the token cookies.
    const response = NextResponse.next();
    // response.cookies.set("token", "to to to");
    response.cookies.delete("token");
    // console.log(response.cookies.get("token"), "after delete");
    return response;
  }
};
const AllOrders = async () => {
  let data = await runningOrdersRequest(1, 20, "0");

  handle401Error(data);

  return (
    <div>
      <h1>All Orders</h1>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
};

export default AllOrders;
