import baseUrl from "../../utils/config/baseUrl";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import {
  sessionDestroy,
  setToken,
  setUserData,
} from "../../utils/sessionHelper/sessionHelper";

// get All Products
export const getAllProductsRequest = async (allQueryParams, pageNo) => {
  // let url = `${baseUrl}/list-product-global/?${allQueryParams}`;

  let url = `${baseUrl}/list-product-global/?pageNo=${pageNo}&perPage=50&searchKeyword=0${allQueryParams}`;

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
      return data?.data[0];
    } else if (data.status === "fail") {
      ErrorToast("Request fail. Please try again.");
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

// get single Products
export const getSingleProductsRequest = async (id) => {
  let url = `${baseUrl}/product-details/${id}`;

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
      return data?.data[0];
    } else if (data.status === "fail") {
      ErrorToast("Request fail. Please try again.");
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

// get Products Privacy Policy
export const getProductsPrivacyPolicyRequest = async () => {
  let url = `${baseUrl}/list-products-privacy-policy`;

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
      return data?.data[0];
    } else {
      ErrorToast("Request fail. Please try again.");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// get related Products
export const getRelatedProductsRequest = async (subCategory) => {
  let url = `${baseUrl}/related-products/${subCategory}`;

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
      return data?.data[0];
    } else if (data.status === "fail") {
      ErrorToast("Request fail. Please try again.");
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

// get best sales products
export const getBestSalesProducts = async () => {
  let url = `${baseUrl}/best-sales/1/12/0`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
// get best sales electronics products
export const getBestSalesElectronicsProducts = async () => {
  let url = `${baseUrl}/best-sales/1/12/0?category=electronics`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// get best sales Provisional products
export const getBestSalesProvisionalProducts = async () => {
  let url = `${baseUrl}/best-sales/1/12/0?category=provisional-bazar`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// get Popular products
export const getPopularProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=popular`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
// get special products
export const getSpecialProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=special`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
// get Top products
export const getTopProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=top`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
// get Trending products
export const getTrendingProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=trending`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// new products
export const getNewProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=new`;

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
      return data?.data[0]?.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
