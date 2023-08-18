class SessionHelper {
  setUserData(value) {
    typeof window !== "undefined"
      ? window.localStorage.setItem("userData", JSON.stringify(value))
      : false;
  }
  getUserData() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("userData"));
    }
  }
  setToken(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", JSON.stringify(value));
    }
  }
  getToken() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("token"));
    }
  }
  setEmail(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("email", value);
    }
  }
  getEmail() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("email");
    }
  }
  setOtp(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("otp", value);
    }
  }
  getOtp() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("otp");
    }
  }
  sessionDestroy() {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
      window.location.href = "/login";
    }
  }
}
export const {
  getUserData,
  setUserData,
  getToken,
  setToken,
  getEmail,
  setEmail,
  getOtp,
  setOtp,
  sessionDestroy,
} = new SessionHelper();
