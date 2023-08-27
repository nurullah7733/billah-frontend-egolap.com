import baseUrl from "../../utils/config/baseUrl";
import {
  getToken,
  sessionDestroy,
} from "../../utils/sessionHelper/sessionHelper";

export const runningOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-running-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config);
    return res.json();
    // if (res.status === 200 && data.status === "success") {
    //   return true;
    // } else {
    //   ErrorToast("Request fail. Please try again.");
    //   return false;
    // }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
