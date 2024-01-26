import baseUrl from "../../utils/config/baseUrl";
import Cookies from "js-cookie";
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

export const loginRequest = async (data) => {
  let url = `${baseUrl}/login`;
  const config = {
    method: "POST",
    mode: "cors",
    redirect: "follow",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, config);

    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      setItemWithExpiry("userData2", data.data, 2592000);
      return { result: true, data };
    } else if (res.status === 200 && data.status === "Invalid Credentials") {
      ErrorToast(data.status);
      return false;
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const registrationRequest = async (data) => {
  let url = `${baseUrl}/registration`;
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      SuccessToast("Registration success!");
      return true;
    } else if (res.status === 200 && data.data.keyPattern.email === 1) {
      ErrorToast("Email Already Exits");
      return false;
    } else if (res.status === 200 && data.data.keyPattern.mobile === 1) {
      ErrorToast("Mobile Number Already Exits");
      return false;
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const userUpdateRequest = async (data, id) => {
  let url = `${baseUrl}/user-udpate-by-user/${id}`;
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
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      // SuccessToast("User update success!"); here not use toast for coupon code use this api
      return true;
    } else if (data.status === "fail" && data?.data?.keyPattern?.mobile === 1) {
      ErrorToast("Mobile number already exits.");
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const logOutRequest = async () => {
  let url = `${baseUrl}/logout`;
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
    if (res.status === 200 && data.status === "success") {
      sessionDestroy();
      // Cookies.remove("token");
      Cookies.remove("token2");
      SuccessToast("logout success!");
      return data;
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// addToCart/updateCart
export const userAddToCartOrUpdateRequest = async (id, data) => {
  let url = `${baseUrl}/add-to-cart/${id}`;
  const config = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: data }),
  };
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      return true;
    } else if (data.status === "fail") {
      return false;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// removeCart
export const userRemoveCartItem = async (id, data) => {
  let url = `${baseUrl}/add-to-cart/${id}`;
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
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      return true;
    } else if (data.status === "fail") {
      return false;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
