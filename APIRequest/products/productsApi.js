import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import {
  sessionDestroy,
  setToken,
  setUserData,
} from "../../utils/sessionHelper/sessionHelper";

export const getAllProductsRequest = async (allQueryParams) => {
  let url = `${baseUrl}/list-product-global/?${allQueryParams}`;

  console.log(url, "url");

  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config, { cache: "no-store" });
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      return data?.data[0];
    } else if (data.status === "fail") {
      ErrorToast("Request fail. Please try again.");
    } else if (res.status === 401 && data.status == "unauthorized") {
      sessionDestroy();
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    // throw new Error("Something went wrong");
  }
};
