import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";

export const getCouponCodeRequest = async (data) => {
  let url = `${baseUrl}/validate-coupon-code`;
  const config = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: data }),
  };
  try {
    const res = await fetch(url, config);
    let data = await res.json();
    if (res.status === 200) {
      if (data?.data.length > 0) {
        return data?.data;
      } else {
        ErrorToast("Invalid Coupon Code!");
        return false;
      }
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
