import baseUrl from "../../utils/config/baseUrl";

import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import { sessionDestroy } from "../../utils/sessionHelper/sessionHelper";
import { setItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import {
  setAddToCartProductFromUserDatabaseAfterLogin,
  setTotalProductsPrice,
} from "../../redux/features/addToCart/addToCartSlice";
import store from "../../redux/store";

export const getAllWebSettings = async () => {
  let url = `${baseUrl}/get-all-web-settings`;
  const config = {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      return data?.data;
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
