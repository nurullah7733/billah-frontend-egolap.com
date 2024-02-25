import baseUrl from "../../utils/config/baseUrl";
import Cookies from "js-cookie";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";

export const getBrandsRequest = async () => {
  let url = `${baseUrl}/dropdown-brand`;
  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `token2=${Cookies.get("token2")}`,
    },
  };
  try {
    const res = await fetch(url, config);
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
      return data?.data;
    } else if (res.status === 401) {
      return { status: res.status, data: data };
    } else {
      // ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
