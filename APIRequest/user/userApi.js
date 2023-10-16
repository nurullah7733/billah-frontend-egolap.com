import baseUrl from "../../utils/config/baseUrl";

import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import { sessionDestroy } from "../../utils/sessionHelper/sessionHelper";
import { setItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";

export const loginRequest = async (data) => {
  let url = `${baseUrl}/login`;
  const config = {
    method: "POST",
    mode: "cors",
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
      SuccessToast("Login success!");
      return data;
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
      SuccessToast("User update success!");
      return true;
    } else if (data.status === "fail" && data.data.keyPattern.mobile === 1) {
      ErrorToast("Mobile number already exits.");
    } else if (res.status === 401 && data.status == "unauthorized") {
      sessionDestroy();
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
