import baseUrl from "../../utils/config/baseUrl";
import { cookies } from "next/headers";

import getCookie from "../../utils/getACookie/getACookie";
import {
  getToken,
  sessionDestroy,
} from "../../utils/sessionHelper/sessionHelper";
export const runningOrdersRequest = async (pageNo, perPage, searchKeyword) => {
  let token = cookies().get("token");
  let url = `${baseUrl}/get-running-order/${pageNo}/${perPage}/${searchKeyword}`;
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: token?.value,
    },
  };
  try {
    const res = await fetch(url, config);
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
      return { status, data };
    } else if (res.status === 401) {
      // document.cookie =
      //   "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
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
export const logOutRequest = async () => {
  let token = cookies().get("token");
  let url = `${baseUrl}/login`;
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: token?.value,
    },
  };
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    if (res.status === 200 && data.status === "success") {
      // document.cookie = `token = ${data.token}`;
      // const response = NextResponse.next();
      // response.cookies.set("token", "log lg login");
      window.location = "/";
      setUserData(data.data);
      setToken(data.token);
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
