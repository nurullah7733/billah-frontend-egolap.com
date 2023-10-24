import baseUrl from "../../utils/config/baseUrl";

export const getShippingAndOtherCost = async () => {
  let url = `${baseUrl}/get-all-web-settings`;

  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
