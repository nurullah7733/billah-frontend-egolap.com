import baseUrl from "../../utils/config/baseUrl";
export const getDivisionsRequest = async () => {
  let url = `${baseUrl}/get-divisions`;
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config);
    let data = await res.json();

    if (res.status === 200) {
      return data?.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const getDistrictsAndUpazilasRequest = async (divisionName) => {
  let url = `${baseUrl}/get-districs-by-divisions/${divisionName}`;

  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, config);
    let data = await res.json();

    if (res.status === 200) {
      return data?.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
