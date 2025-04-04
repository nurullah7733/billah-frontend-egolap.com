import baseUrl from "../../utils/config/baseUrl";

export const paymentRequest = async (data) => {
  let url = `${baseUrl}/bkash-payment`;
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
    let status = res.status;
    let data = await res.json();

    if (res.status === 200) {
      return data?.data?.bkashURL;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
