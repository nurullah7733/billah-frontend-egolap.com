class SessionHelper {
  setUserAddToCartInLocalStorage(value) {
    typeof window !== "undefined"
      ? window.localStorage.setItem("AddToCartItems", JSON.stringify(value))
      : false;
  }
  setUserTotalProductsPriceInLocalStorage(value) {
    typeof window !== "undefined"
      ? window.localStorage.setItem("totalProductsPrice", JSON.stringify(value))
      : false;
  }

  getUserAddToCartInLocalStorage() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("AddToCartItems"));
    }
  }
  getTotalProductsPrice() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("totalProductsPrice"));
    }
  }

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
      window.localStorage.removeItem("userData2");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("otp");
      window.location.href = "/";
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
  getUserAddToCartInLocalStorage,
  setUserAddToCartInLocalStorage,
  getTotalProductsPrice,
  setUserTotalProductsPriceInLocalStorage,
} = new SessionHelper();
