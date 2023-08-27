import { runningOrdersRequest } from "../../../APIRequest/orders/ordersApi";

const AllOrders = async () => {
  let data = await runningOrdersRequest(1, 20, "0");

  console.log(data, "from order page ");
  return (
    <div>
      <h1>All Orders</h1>
    </div>
  );
};

export default AllOrders;
