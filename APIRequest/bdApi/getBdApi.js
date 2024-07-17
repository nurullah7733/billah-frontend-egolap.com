import baseUrl from "../../utils/config/baseUrl";

export const getDivisionsRequest = async () => {
  let url = `${baseUrl}/get-divisions`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("There was an error fetching Divisions");
  }
  const data = await res.json();
  return data?.data;
};

export const getDistrictsRequest = async (id) => {
  let url = `${baseUrl}/get-districts/${id}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("There was an error fetching Divisions");
  }
  const data = await res.json();
  return data?.data;
};
export const getUpazillasRequest = async (id) => {
  let url = `${baseUrl}/get-Upazilas/${id}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("There was an error fetching Divisions");
  }
  const data = await res.json();
  return data?.data;
};
