import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import { setToken, setUserData } from "../../utils/sessionHelper/sessionHelper";

export const loginRequest = async (data) => {
  let url = `${baseUrl}/login`;
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
    console.log(data);
    if (res.status === 200 && data.status === "success") {
      setUserData(data.data);
      setToken(data.token);
      SuccessToast("Login success!");
      return true;
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
