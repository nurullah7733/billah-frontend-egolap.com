import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";

export const createOrder = async (data) => {
  let url = `${baseUrl}/create-order`;
  const config = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, config, { cache: "no-store" });
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
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
export const runningOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-running-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    credentials: "include",
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
    throw new Error("Something went wrong");
  }
};

export const deliveryOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-delivered-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    credentials: "include",
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
    throw new Error("Something went wrong");
  }
};

export const returnOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-returned-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    credentials: "include",
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
    throw new Error("Something went wrong");
  }
};

export const cancelOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/get-cancelled-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    credentials: "include",
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
    throw new Error("Something went wrong");
  }
};

export const changeOrderStatusRequest = async (id) => {
  let url = `${baseUrl}/change-order-status/${id}`;
  const config = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderStatus: "Cancelled" }),
  };
  try {
    const res = await fetch(url, config);
    let status = res.status;
    let data = await res.json();

    if (res.status === 200 && data?.status === "success") {
      SuccessToast("Order cancel success!");

      return true;
    } else if (res.status === 200 && data?.status === "fail") {
      ErrorToast(data?.data);
    } else if (res.status === 401) {
      return { status: res.status, data: data };
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
