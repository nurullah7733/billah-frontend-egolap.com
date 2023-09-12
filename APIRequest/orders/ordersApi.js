import baseUrl from "../../utils/config/baseUrl";
import { cookies } from "next/headers";

export const runningOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-running-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  };
  try {
    const res = await fetch(url, config);
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
      return data?.data[0];
    } else if (res.status === 401) {
      return { status: res.status, data: data };
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    // throw new Error("Something went wrong");
  }
};

export const cancelledOrdersRequest = async (
  pageNo,
  perPage,
  searchKeyword
) => {
  let url = `${baseUrl}/get-cancelled-order/${pageNo}/${perPage}/${searchKeyword}`;
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
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
      return { status, data };
    } else if (res.status === 401) {
      return { status, data };
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
