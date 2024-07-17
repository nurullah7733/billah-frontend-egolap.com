import baseUrl from "../../utils/config/baseUrl";

// get all  Sliders
export const getMainSlidersRequest = async () => {
  let url = `${baseUrl}/get-all-main-slider/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching main sliders");
  }
  const data = await res.json();
  return data?.data;
};
