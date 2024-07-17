import baseUrl from "../../utils/config/baseUrl";

export const getShippingCostRequest = async () => {
  let url = `${baseUrl}/list-shipping-cost/1/100/0`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("There was an error fetching Shipping Cost");
  }
  const data = await res.json();
  return data?.data[0]?.rows?.[0];
};
