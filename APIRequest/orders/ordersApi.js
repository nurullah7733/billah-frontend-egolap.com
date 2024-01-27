import { setAddToCartProduct } from "../../redux/features/addToCart/addToCartSlice";
import store from "../../redux/store";
import baseUrl from "../../utils/config/baseUrl";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import {
  setUserAddToCartInLocalStorage,
  setUserTotalProductsPriceInLocalStorage,
} from "../../utils/sessionHelper/sessionHelper";
import { userUpdateRequest } from "../user/userApi";

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
      if (Object.keys(data?.data).length > 0) {
        let id = getItemWithExpiry("userData2")?.id;

        // Order created success then empty user cart
        let data = { cart: [] };
        await userUpdateRequest(data, id);

        // Order created success then empty user cart from localstorage, useSelector
        setUserAddToCartInLocalStorage([]);
        // setUserTotalProductsPriceInLocalStorage(0);
        // store.dispatch(setAddToCartProduct([]));
      }
      window.location.href = "/";
      SuccessToast(
        "We received your purchase request; we'll be in touch shortly!"
      );
      return true;
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
