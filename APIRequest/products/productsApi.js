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
  let increasePerPage = pageNo * 10;
  console.log(increasePerPage, "increase");
  let url = `${baseUrl}/list-product-global/?pageNo=1&perPage=${increasePerPage}&searchKeyword=0${allQueryParams}`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching posts");
  }
  const data = await res.json();

  return {
    products: data?.data[0]?.rows,
    total: data?.data[0]?.total[0]?.count,
  };
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
  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching Best sales products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};
// get best sales electronics products
export const getBestSalesElectronicsProducts = async () => {
  let url = `${baseUrl}/best-sales/1/12/0?category=electronics`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error(
      "There was an error fetching best sales electronics products"
    );
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};

// get best sales Provisional products
export const getBestSalesProvisionalProducts = async () => {
  let url = `${baseUrl}/best-sales/1/12/0?category=provisional-bazar`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error(
      "There was an error fetching best sales provisional bazar products"
    );
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};

// get Popular products
export const getPopularProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=popular`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching popular products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};
// get special products
export const getSpecialProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=special`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching spacial products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};
// get Top products
export const getTopProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=top`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching top products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};
// get Trending products
export const getTrendingProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=trending`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching trending products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};

// new products
export const getNewProducts = async () => {
  let url = `${baseUrl}/list-product-global?pageNo=1&perPage=12&searchKeyword=0&remark=new`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching new products");
  }
  const data = await res.json();
  return data?.data[0]?.rows;
};
