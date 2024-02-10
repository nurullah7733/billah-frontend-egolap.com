import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";

export const getCategoriesRequest = async () => {
  let url = `${baseUrl}/dropdown-category/1/10000/0`;
  const config = {
    method: "GET",
    credentials: "include",
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
